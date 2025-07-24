// get-links.js
exports.handler = async (event, context) => {
const { account } = event.queryStringParameters || {};

// Your account data - move your JSON files content here
const accountData = {
    kagio: {
      "accountName": "Peanco Limited-Kagio",
      "password": "4321",
      "sales_summary_salesman": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5ofM0dO6KLaM9ZvAOcRe5zpAt1BVgTeUQygj1e47cQM0q4hJNiKVlPzDbSqTEPpYBhh0iUX0ztt2FqIwovq7FH1QV8ZMzYykI9w7YceVlryEZ0DWm1NE/qVpA2eSTEdClKE2LqKawiKbVzz367qE0cSXGnijLi/p0R13CRuw0XCDVmG9+yVwk0LUWSlIyJPwKg==",
      "daily_sales_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpuKHdlybQXII/3Zh9S+DArP24P/uxMJ3Ut0J8tAA3SdJutQEP5k/LNloIKkdJ5gx3",
      "call_performance": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5ofM0dO6KLaM9ZvAOcRe5zpAt1BVgTeUQygj1e47cQM0q4hJNiKVlPzDbSqTEPpYBhh0iUX0ztt2FqIwovq7FH1QV8ZMzYykI9w7YceVlryEldY1A3gGJ/MLzpUBEhb85JddPdZ4Q3zHQbI8QSax152ejOh5olB7t0qmsFHeP3P1hJ9MKIbx/+Rfm4kuiGvX8g==",
      "salesman_listing": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wp+cbVs8ANsen+MwRli0Z0+BQlZhrH7cjVZm3GJtmjS4OZIVhUWndMGRPIQY5duQEv",
      "order_fulfillment": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wp/jvc7eGyE08b5N7DqX8JgKqAIwfOj6EFw2HBMY6x7attpGtowjTGYZK7AUnUpOeWHy96zq6qXuOIZl2zBm8UXA==",
      "sales_by_customer_summary": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpNvpYaTbZ0aChjxp/Vw6dWrOo0WdNWcHK+nQkeujrsJFFHDNgW6l/mR7yj0ErmGlQOC9YsIkF8kWaKpySya3ooEYbjpVQY29zt4AUftxK7EU=",
      "sales_report_by_customer": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpNvpYaTbZ0aChjxp/Vw6dWrOo0WdNWcHK+nQkeujrsJFFHDNgW6l/mR7yj0ErmGlQIxknZfAKh+TVKq86BMu5bQ==",
      "route_performance_target": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5oIqETDS+cdZDp6aAAPu4BpSZcMmRHEeG5GhZ2Hz6wg4+2ttkkOZCm1BCBryVPbYwzxenMGMC+Rm/yU6r4Kfzoz8ZeqjLtdJ8y15nubuHyO+WGbfuEa/umtm38yIlkye4RfG+KJOXmfYNYKZP2inwcChF9hxMi8Knr//KAfxXlD+",
      "inventory_movement": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5ofM0dO6KLaM9ZvAOcRe5zpAt1BVgTeUQygj1e47cQM0q4hJNiKVlPzDbSqTEPpYBhh0iUX0ztt2FqIwovq7FH1QV8ZMzYykI9w7YceVlryE+63nmNzoCR9kfoy6N/niHGuRuG82u67K/L6lVdi3FnoNXtRW+ztT+h6cf6a/EZCXELHm0j+ACC18h8SrnIG6xQv99vuU3kV6OYp5uUTWPgg=",
      "certificate_issues_returns": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5oIqETDS+cdZDp6aAAPu4BpSZcMmRHEeG5GhZ2Hz6wg4+2ttkkOZCm1BCBryVPbYwzxenMGMC+Rm/yU6r4Kfzoz8ZeqjLtdJ8y15nubuHyO+85KykYdWqCdQ7zhgBqN9SONpghyGwjeLUKZuWGvjdvaY3SsUXhav/IMmB32MzaPL",
      "company_invoice_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5oIqETDS+cdZDp6aAAPu4BpSZcMmRHEeG5GhZ2Hz6wg4+2ttkkOZCm1BCBryVPbYwzxenMGMC+Rm/yU6r4Kfzoz8ZeqjLtdJ8y15nubuHyO+CmazCZlQGSEx/w2dptsP9BUeeG2rwOw83IhtjD/OFbmQiRDrJboAeULUfFqBQFuNxAtxskFdFKszojP4FEhnhoieQ0KaNiWFZkKLn9pajWoq7kIYtFZaSU8tBSy4F9YO",
      "current_stock_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5oIqETDS+cdZDp6aAAPu4BpSZcMmRHEeG5GhZ2Hz6wg4+2ttkkOZCm1BCBryVPbYwzxenMGMC+Rm/yU6r4Kfzoz8ZeqjLtdJ8y15nubuHyO+V/GBKeZ2D/rrcUQmqK8cvPlon+eb5UJKW+LTJwB2DVhH0pUJQodbvb8gQdJ68BqL",
      "promotion_monitoring": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpw/iPkmgrGztOTEkXggNUvz/18oNYR3+v9J8/WXnEgxOPvSLshmEJVzWg6hd0qINp",
      "promotion_monitoring_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpqmKyy6kO2X8UeqN3Vv1QugrPLG/GgYKf8UifHOTAtUS8JeOlSgDdz6VCzfvkAV+J",
      "customer_master_data": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpedTPMPgAM5XCjVuGnZeaB7uZHG029TDBHdBPVjW1bsgFL5rlfwVRWyFSXMKYnXzy",
      "product_master_details": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=aMn4C0ew6f8cJ76cYAXS5pH+szEJoO6zQ86XsmfgHgXjqHwMvknYsRGVLR+e4j8EEzQqAwut58FfBpXDkz3UrK1Fyy2m5KRbo33AW2TxWvObFk7M0dFdHpy/H1K7J1wpxYOM9fwD8Px95abzpMwQDxQucWEL8HgtWH1O+97FB8sPaYLQ20nDC+S+lX3YIkMVON07Wg9nTSL5x6Q/cxsqgw=="
      },
    kianyaga: {
      "accountName": "Peanco Limited-Kianyaga",
      "password": "4321",
      "sales_summary_salesman": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/B0dIUaCV3UPrB8/E+CmZ9JxZaRc3ai8KLIo1caiEHcZs0wrSFvc74lTM+vK/KEcBG+mcfnZsLLPO/IgYq/8FaJJ7G9Bx2zeLuE8xSU1Ycl/FhmfUf5ad5t9lox9vqQcWWezwQRXdVb0MFksVPKvmLZsuJkAvSgVvxA14CiljpJ2Nzjoy8u7CNpYe203X9NMhg==",
      "daily_sales_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/Ns0or+NItOE5TntuXnmG5n4a+P9ob09tpgHAW5FuMMGsU0RVb0hABFUaTRrBae3Yn0xr6OycxXDOOtEgnKlTiT65MkahX0GND5OTQ1c2/8UwSuQCT032/NzkikKJMNT4q/e3AinJnKOZu+jq9SVlwzrja5wFRWqCaJ63VDdJrWf",
      "call_performance": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/D25EbSk+Rx4PNIbUAOISdKEI50RePIMJRDg0Q+XrOZ/I8Dtkp01cxQLfHw4J9KDCwbDM9nw+Q1hGjagUV0ACv3aUh4GAkGtx4YcYoInab/YyPX5SdUZ+L97msEg3uK8CM52pfZ16OBSt7Iqu6Iiwd/hs8jJk9y3g2poGNtJO9wOCfjOZX76VFATRMbutqox1g==",
      "salesman_listing": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/Ns0or+NItOE5TntuXnmG5n4a+P9ob09tpgHAW5FuMMGsU0RVb0hABFUaTRrBae3Yn0xr6OycxXDOOtEgnKlTiT65MkahX0GND5OTQ1c2/8UJSClRr8k0MNfosRUpjGiZQGW8thhBFGNSFuO+GlstFenkbdyYObF1MjMq0os1dav",
      "order_fulfillment": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/Ns0or+NItOE5TntuXnmG5n4a+P9ob09tpgHAW5FuMMGsU0RVb0hABFUaTRrBae3Yn0xr6OycxXDOOtEgnKlTiT65MkahX0GND5OTQ1c2/8UsEdVa0FRuCG071FTfHHMtcCHZy0CEx0judGDw00vszmCJyTCkLKOCiA3ym6SDPGE4dQUA3tSYOlsZJG9s8Ahfg==",
      "sales_by_customer_summary": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/GS8pHoJ/aCvgBdFtXu7dKhdIHk2p0SVX3r+2KTDDQVCR7BT0dzO0C/FNDXa3NaK/jaM5PAdPPZib91Y+uH5JjLF+C5Z+OmsxsFLCkD01TwPXbQ/LesPN6Vom3IHyxnpVfzh71aXw8kW5LyBkJx4JhfDDNjhBWw/r0JU/VleVUs3eKK+kjVrxjZglirWA13CKtOU0yeGDJmqwDjvYhvhYoY=",
      "sales_report_by_customer": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/JYtpuEHuyvtutZsUMK3MSyT/8Eoabvr1c8xTBKsi6DB2+Sxp6jyi+9v8Lf2Xr/KYQSYi/Y6lTyWj77gBQm5yVK3eyRvZv6ZopUh8kE/jLYCi5jrqPwiyRczjdCodHrVkcDGQEYrRVDUdHI2SdHHNagYa6cYR5ymQ3OGm7ZVwLtailZ8tp1dFYXY7tdF2WZZSw==",
      "route_performance_target": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/BIdaShJZzX91FEukloq9nCs1QqxLIubcMrOkB2OEW4oZH5P88d6CaIa5jmThjIFIQJJuakvMoa7lsDG5ugTx+RHYAT1qF8Za9+8fjrvHxm1ULzeTKMjGbmNBQPBS5FvzTtMB/dbplprTxFJcPZ4RFabMILfm5RUYdiJOivdvqXu",
      "inventory_movement": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/PyIhqlGl19LXvn1mzLlKx4V219Ce9yu1WUysm4c0iqMFF2x+gyYvE74CCHo9giVSBwFretx21zE4To26sm6k39/H7gQDUQyCxH6w/z/s7HOfJfZDQyhsB7DJWTKbVg/M8T474sy8LuEsdm9K3FMbkVQgowXuC5BKXHtMfJlpCqOtTCIxgoL/iGEtVD4G7CKFOrzv269c134OuyRTk43bLc=",
      "certificate_issues_returns": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/D25EbSk+Rx4PNIbUAOISdJ07LVg4YtQbw3xDSPwrc39OoxmA5NNq0v5ojZHhrncqZvP49NLIlj1g0hqTZWhIanqEX9/7Rk4CeVhz2OhNHFUkge/W60Wnt63wdMtS0GT0JWNMR7Igw1i45M43fHTg0q00eqpluXNSqQHEyXbg9Np",
      "company_invoice_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/D25EbSk+Rx4PNIbUAOISdJ07LVg4YtQbw3xDSPwrc39OoxmA5NNq0v5ojZHhrncqZvP49NLIlj1g0hqTZWhIanqEX9/7Rk4CeVhz2OhNHFUuTu3SEZMaYCW2ZrynQS83ZKKQeho+dOIV1NdZMIu1aaE8HMO5wHU41nf/vS4Eov5+9z3Od/uYr4w8R5/fuA7j0YcXgEKLTv1etKaj5TNYM1FYlnG0I/UwclFmPax52cJ",
      "current_stock_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/JYtpuEHuyvtutZsUMK3MSyHAQcC2btUZNDJYPjejbNG5Qx03RtFrGb2rCD33O/sy2d/4soYPNiFOac2UgrmHtgvVfcKdg+dxP9as0rx8mbbwvF2IB/MdndrBNmF31gP+3fHnGR4YAlRTwX6ITmf/kVkqNLBZ1btGMfEkqz4qNVu",
      "promotion_monitoring": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/GZ2CvOUOM0uQQ4q7Vt3PJr3t5wNcb4FOCS7n6xvkPT6y4JvXkmkLRbK+uJChk4EWcLTeJtl2VU+kE5fpf2MexPagXQ7vAAOIAG+HdLkUMSDhE8s/IPilyavi5IB1XZRZNo2rGxzZ8xSXHHInsklV3VbKvrHma4oCPZd16QCegwP",
      "promotion_monitoring_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/OoNExw4l2gubVw0tr4j7b6RQqTGfGmXqLns2zDYw+U43CIIP5VS4PdNUJEXcfi+O9UdV8IdxDgnfAuSa4JcTcRK3ibCn1pUXUr86gF148ilKu5f7Ru2YeYOtTuGrrCFW2WssK1ylQs7YZ+5UuAGovV3Z0q3WTfTrIToOi+8rfzN",
      "customer_master_data": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/PyIhqlGl19LXvn1mzLlKx6VuzBxVCo9xTj/r4E4hwrnHklV1bqV9fRA1QizT8NIYAv4H59m4LdZvCZpLnoJ3wBjj/G/8eUZH9czWkM8mh1lsLbPz6BsO7w3DApoxFIKvsG3JuUDtBwjyMqoChb7dU3lngBJXg++rK5rcSSwcqA2",
      "product_master_details": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=/TrRJZrqeWappV6Lry9e/PyIhqlGl19LXvn1mzLlKx6VuzBxVCo9xTj/r4E4hwrnHklV1bqV9fRA1QizT8NIYAv4H59m4LdZvCZpLnoJ3wBjj/G/8eUZH9czWkM8mh1lctsd/TmygbWcLCXFaGWONPtnAlzlLbrz5FOfl61LEaN2oXLp3M7athbg9S6Q94Oxp3hNTRfIW60UA5KLHssfdQ=="
      },
    aievo: {
      "accountName": "Aiveo Limited",
      "password": "4321",
      "sales_summary_salesman": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSplpBFOXlV5SFQ+ZQo8zh13TZIYb0yHI5R6U+RT8jnn9ofadaY3sXxPMELhwkEn4cOAIOSop0omk3f7DN0hqKAQ==",
      "daily_sales_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSWNau1O2Bdh5CXJjxgvbDdQJc%2fievXHLE6bhxh6BiHl2Ok3GjUZG5qgSdFOdP+yXMmVZj15mFY%2f1+J6+oIuUnLA%3d%3d",
      "call_performance": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpScLpUxe%2fY6xTnwJ3O31c8RXi775M9BL+%2f5bc1xViRLePDS6M5zOIA7oOkekG%2fIcRoqmcKz%2fYmZ1%2f3v3pQkVi2yA%3d%3d",
      "salesman_listing": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpS81KodCw2IOKBvxPA7xsFgXfNBOWddtKhIEn77tV%2fbTqqo%2fwnLFAEc0xuqrb6idQs",
      "order_fulfillment": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSeEO3Ycs1D/oYOEJt5ayOBm+Vfh/VZB8vNdBJh9Uz3KtJriQEV50GJWSKAGKjZRfXzKrbu8JaXbvvqYX2+ZuD8A==",
      "sales_by_customer_summary": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSplpBFOXlV5SFQ+ZQo8zh16ndUuThE0USS0wiUMh7ftdqLVyfdiRwxnyHt5B8EdEcQjJ4A5fXurjmVyUdHvg%2fFHrwdqf3zdAvXhQh+npOMcE%3d",
      "sales_report_by_customer": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSplpBFOXlV5SFQ+ZQo8zh16ndUuThE0USS0wiUMh7ftdqLVyfdiRwxnyHt5B8EdEcgBNsySA67KbUPkOuz9CsOw%3d%3d",
      "route_performance_target": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSmu6iTCxd7yb%2fxmp9h1%2f%2fpee03AD9wWjYXzXD0jpUopk5IQgBHbQq6zJm9VZgBZQm",
      "inventory_movement": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSOiZRPSGRzSd9is3kq6znFXcBho+ng0OhabPegVv04GUhcrcmmW%2fkbe0lTV3hD%2fi43wTVOci9WrLiXRsxzMy63J7XsYkhEqN1DTQsT0llCsI%3d",
      "certificate_issues_returns": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpShRzRmy%2fapsdvseZkBTsACdb5BdmMdExmtA1fBMJCbMhLlmat6bvsBzkK0VG6jawX",
      "company_invoice_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpS9f%2fRdLuPApr85E3bEySTtldL1ecYmEO5zbh%2ftrS7Tdl+d6HBtdgoNDI1hr%2fF+fJDMI3sZYoHK%2fcDEpA2xDb18gCnmqlvvbsnFMOqSKEYIMAWqWtQrCtze6II1kc3577r",
      "current_stock_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSaWm+PFGAeeOaG3ABDaHXXoYPQLQ9Hgv2GMuxXe%2fF8dyqPjHFvRpGHjWz4EBzRvgW",
      "promotion_monitoring": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSH5SpYZhTPX4r1ll10F5nu5979yT1+WiVjv++66K0mSSvNWQcdQrcRMHNCMPmv9AU",
      "promotion_monitoring_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpShUG0xbRdMuNq1M7EQ1E8Iw%2fA8syz6Lj0IHUDB5nKjDjo4iaPr0RDzGMU5LjQ+eaL",
      "customer_master_data": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSsUFUermh6uysFHLEIAD%2f2Uu12dd9Ru9Xsqjf2sc%2fKaDoHwUe2R82H8HvPB%2fkmDjG",
      "product_master_details": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=eb5qKicfGuOhQiAxIZ3xWpvmA+np5llQvebweh8A4c8v4mu6nI0Iqli0vthL3uDrhAomaCaFDhzmCzEk+Fpqdznk29BCm9IqhxRLuvUVoCaYslCd4mnQpJXwp2kBadpSdIhe+xLXFaZ9UsYSH7tsvoxPw1ZuQ9GvZE0XG8ceFlI2zYsUjvAGYmKFx0Gq6yr5hfShrgM6RCzbrLU8TXqyNw%3d%3d"
      },
    kerugoya: {
      "accountName": "Peanco Limited-Kerugoya",
      "password": "4321",
      "sales_summary_salesman": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hEMlhCcxmQAKzWTm+Qb2e2ThtwQHFHx+aUgbz7E2iAoXyerPIx0ggIh00dYAq9E4QdvAZmIuAlA/iH6ytbqf7TdRNqsCKABSGW5uYvPA0pRw=",
      "daily_sales_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7h5uUYjY1b8kcU75fSk2K3PhuSpgZcSy6i5PH4TYX/M6z+Io626yiJPWCJyS7azvtMdTadmXb9XsPBZAEcW3pz+Q==",
      "call_performance": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7h+R6QEwjhbVj5xEZaZMCpMRgh1FAKnRuLIYoqDJWVD3klBtR2TWrzCgdU96tOdRQN9+y1cGkeQrv9OEup+G1Fhayedle9BFRq1TE2eiozaPY=",
      "salesman_listing": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hEMlhCcxmQAKzWTm+Qb2e2eoFXtksYo7TEUajBVp4uCjPOpeYUzEH1tzpitJJFv2e",
      "order_fulfillment": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hMCYup2K//q5uMit63jDFZxc68gSlDPHPm0NyeVZsx4pBDfIwvSNuWFT7DZUeRowU544lmOtyTtlMrgaZDUCBQA==",
      "sales_by_customer_summary": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hEMlhCcxmQAKzWTm+Qb2e2VY+4gDDuZ+9p3U+MtDH9eefYwnMX9qrtTJEpPrIuQQIZ9zUiNLjFFR7kloS+TqQM3N2GHnBm/Ppu1jZ+LEnfqY=",
      "sales_report_by_customer": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hEMlhCcxmQAKzWTm+Qb2e2VY+4gDDuZ+9p3U+MtDH9eefYwnMX9qrtTJEpPrIuQQI9mxg830r4QyArKs1yywFow==",
      "route_performance_target": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29RyfgntypcZjjfAnstmG5PzVXz5BA7JnASyxVYfNqqSUWg8xbjdlLUIGmwwliw87ud6Au9g15ClJFOtI+FhjjYSudEg3xSiJIbGHVdjcZPyVCNf/6hXzx/DZ1tLnzdFJtgwk8RCDYFj432o1ItohMHxYHa0mDZAM6goUGTruNcvlhlZaAA==",
      "inventory_movement": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hGcF44fRiIcm0vYdas268tweQfB+9Iob05ulHxGdQNax5R89KF7X48+xKnccpSDvRu48uP73v1MSfZIDu2zunXgV+uXoypC47/EVHhHrUfH+XwiBOuO8HtwEr4wGeuk3i",
      "certificate_issues_returns": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29RyfgntypcZjjfAnstmG5PzVXz5BA7JnASyxVYfNqqSUWg8xbjdlLUIGmwwliw87ud6Au9g15ClJFOtI+FhjjYSudEg33UKG1NenscRk132WtYvDglUHAdroio8WtPJ28nXRZFjFUl95qtIiy2IxJyxBrfg7jNdXFvcTkTTf53AQT/n9CQ==",
      "company_invoice_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29RyfgntypcZjjfAnstmG5PzVXz5BA7JnASyxVYfNqqSUWg8xbjdlLUIGmwwliw87ud6Au9g15ClJFOtI+FhjjYSudEg33UKG1NenscRk132WtYvDghL0+S4/oJ1J4mw8QADrgoG9uB5gk+0eDU9lKwhfSTcAPvOil0YAQPujVegBXvhCAa6CyiO2j1LfvBhKIXL4bDlXGRGgMgnZHQdT9B42YkvT",
      "current_stock_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29RyfgntypcZjjfAnstmG5PzVXz5BA7JnASyxVYfNqqSUWg8xbjdlLUIGmwwliw87ud6Au9g15ClJFOtI+FhjjYSudEg33E67FlO1otI7lnEaaZ8yKiaAzkYhB/5UwRB+QnAJ7bzES9UoHeAM4RsjvDMRzdnX",
      "promotion_monitoring": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7h+R6QEwjhbVj5xEZaZMCpMQXqR72fiZmRJoCsyMonqKqi+wEjKSln8HElZMBHITO32w3ZJ7p45l0OxaSeYBP8HA==",
      "promotion_monitoring_report": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7hWZowtI/1MHKY7XKj5IEzep8NhTnPP6ceZe5sHIW3L5VHADvFmDEvhlZ9LoDvOZurodeWkwSKLSs6F5ziWzywMQ==",
      "customer_master_data": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29Ryfgnt4W0H4BF4utn11mryYmLU16mR0rsAdsSKwH8zreQfJbnS1uM+T61+xXuFiSJNnfk0R7YIWM6rHZ83QPVA5Lx7h+R6QEwjhbVj5xEZaZMCpMZDPExKQpXxf1XQPa1uxQFuIdOt1H2f4v5D+kwo0eZny",
      "product_master_details": "https://kbl-kn.np.accenture.com/SSRS_Extract_V8/?para=dxVEsrgr7s+NjgzyhdZwq/4OgeOqpbLdjDb29RyfgntypcZjjfAnstmG5PzVXz5BA7JnASyxVYfNqqSUWg8xbjdlLUIGmwwliw87ud6Au9g15ClJFOtI+FhjjYSudEg31zHMkYGHutAe0KVjG6ZrD90HzWtMS5k00BOtvVg+XFph1a6MuIaeAcCzaMK2UTQTWlt13T8abo3haQK4dB8V5Q=="
      }
};

if (!accountData[account]) {
return {
statusCode: 404,
body: JSON.stringify({ error: 'Account not found' })
};
}

return {
statusCode: 200,
headers: {
"Access-Control-Allow-Origin": "*",
"Content-Type": "application/json"
},
body: JSON.stringify(accountData[account])
};
};