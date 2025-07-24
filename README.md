# DMS Reports Web App

## Project Structure

- `index.html`: Main dashboard page.
- `reports.json`: Master list of all report definitions (id, title, path).
- `Distributors/`: Contains distributor-specific links files (e.g., `kianyaga-links.json`).
- `Assets/`: Icons and images.

## How It Works

- The dashboard loads `reports.json` for the report grid structure.
- It loads the distributor's links file (e.g., `kianyaga-links.json`) for URLs and account name.
- The grid is built by matching report ids from `reports.json` to URLs in the distributor's links file.

## Adding a New Distributor
1. Create a new links file in `Distributors/` named `<account>-links.json` (e.g., `newdistributor-links.json`).
2. Add an `accountName` property for display.
3. Add report ids as keys and URLs as values:
   ```json
   {
     "accountName": "Distributor Name",
     "sales_summary_salesman": "https://...",
     "daily_sales_report": "https://..."
   }
   ```
4. Users can access the distributor by visiting:
   `index.html?account=<account>`

## Adding a New Report
1. Add a new report object to `reports.json` with a unique `id`, `title`, and `path`:
   ```json
   {
     "id": "new_report_id",
     "title": "New Report Title",
     "path": "Section → New Report"
   }
   ```
2. Add the new report id and URL to each distributor's links file as needed.

## Optional: Distributor Passwords
- You can add a `password` field to each distributor's links file for basic login protection:
  ```json
  {
    "accountName": "Distributor Name",
    "password": "yourpassword",
    ...
  }
  ```
- Implement a login page that checks the password before showing reports.

## Notes
- This setup is for static hosting and basic use. For real security, use a backend for authentication.
- To add a distributor selection UI, create a list or dropdown and load the corresponding links file.

---
For questions or improvements, see suggestions in the README or ask for help!