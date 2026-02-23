# Google SERP Parser (Node.js)

Lightweight tool for extracting search results from Google Search pages.
Built with **pure Node.js** and **RegExp**, without heavy external dependencies like Puppeteer or Cheerio.

##  Features

-   **Zero Dependencies**: Uses only native Node.js modules (`fs`, `path`).
-   **Smart Detection**: Distinguishes between **Ads** and **Organic** results.
-   **Excel Friendly**: Generates a `.csv` file with BOM encoding (supports Cyrillic/UTF-8 correctly in Excel).
-   **Data Cleaning**: Removes HTML tags and decodes entities automatically.
-   **Pagination**: Extracts the "Next Page" link.

## 🛠️ Tech Stack

-   **Runtime**: Node.js
-   **Language**: TypeScript
-   **Method**: HTML Parsing via RegExp (High Performance)

## ⚙️ How to use

1.  Save the Google Search results page as `google.html` in the project root.
2.  Run the parser:
    ```bash
    npm run start
    # or if using ts-node directly:
    ts-node index.ts
    ```
3.  Check the generated `output.csv` file.

## 📑 Output Format (CSV)

The tool generates a CSV file with the following columns:

| Title | Link | Snippet | Type |
| :--- | :--- | :--- | :--- |
| Taxi Amsterdam... | https://... | The largest taxi company... | Organic |
| Best Price Taxi... | https://... | Ready to ride with Gett... | Ads |

## 📝 Note

This parser relies on Google's HTML structure. Since Google frequently updates its DOM, this script serves as an educational example of RegEx-based parsing algorithms.
