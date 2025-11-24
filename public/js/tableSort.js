function sortTable(columnIndex) {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.rows);
    const isAscending = table.getAttribute("data-sort-dir") !== "asc";

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText.toLowerCase();
        const cellB = b.cells[columnIndex].innerText.toLowerCase();

        if (cellA < cellB) return isAscending ? -1 : 1;
        if (cellA > cellB) return isAscending ? 1 : -1;
        return 0;
    });

    // Update table direction
    table.setAttribute("data-sort-dir", isAscending ? "asc" : "desc");

    // Re-append sorted rows
    rows.forEach(row => table.appendChild(row));
}
