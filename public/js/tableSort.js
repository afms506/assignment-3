// Table Sorting Script
// Allows clicking a column header to sort the table alphabetically.
// Sorts ascending, then descending on next click.

function sortTable(columnIndex) {
    // Select the table <tbody> (where rows are stored)
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.rows);

    // Determine sort direction:
    // Toggle between ascending/descending each time user clicks
    const isAscending = table.getAttribute("data-sort-dir") !== "asc";

    // Sort rows based on cell text
    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText.toLowerCase();
        const cellB = b.cells[columnIndex].innerText.toLowerCase();

        if (cellA < cellB) return isAscending ? -1 : 1;
        if (cellA > cellB) return isAscending ? 1 : -1;
        return 0;
    });

    // Save direction back to table
    table.setAttribute("data-sort-dir", isAscending ? "asc" : "desc");

    // Put sorted rows back into table
    rows.forEach(row => table.appendChild(row));
}
