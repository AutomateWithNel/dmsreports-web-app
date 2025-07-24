exports.handler = async (event, context) => {
  console.log("=== DEBUG: get-links.js invoked ===");
  console.log("Event object keys:", Object.keys(event));
  console.log("Raw query string:", event.queryStringParameters);
  console.log("Full event:", JSON.stringify(event, null, 2));

  const { account } = event.queryStringParameters || {};

  console.log("Extracted account:", account);
  console.log("typeof account:", typeof account);
  console.log("account.trim():", account ? account.trim() : "n/a");

  const accountData = {
    kagio: {
      accountName: "Peanco Limited-Kagio",
      password: "4321",
      sales_summary_salesman: "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5ofM0dO6KLaM9ZvAOcRe5zpAt1BVgTeUQygj1e47cQM0q4hJNiKVlPzDbSqTEPpYBhh0iUX0ztt2FqIwovq7FH1QV8ZMzYykI9w7YceVlryEZ0DWm1NE/qVpA2eSTEdClKE2LqKawiKbVzz367qE0cSXGnijLi/p0R13CRuw0XCDVmG9+yVwk0LUWSlIyJPwKg==",
      // Add at least one other link so we can test
      daily_sales_report: "https://example.com/test"
    },
    kianyaga: {
      accountName: "Peanco Limited-Kianyaga",
      password: "4321"
    },
    aievo: {
      accountName: "Peanco Limited-Aievo",
      password: "4321"
    },
    kerugoya: {
      accountName: "Peanco Limited-Kerugoya",
      password: "4321"
    }
  };

  if (!account) {
    console.log("❌ No account provided in query");
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Account not specified" }),
    };
  }

  const trimmed = account.trim();
  console.log("Looking for account:", trimmed);

  if (!accountData[trimmed]) {
    console.log("❌ Account not found in data. Available keys:", Object.keys(accountData));
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Account not found" }),
    };
  }

  console.log("✅ Account found! Returning data for:", trimmed);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountData[trimmed]),
  };
};