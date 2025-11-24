// Pagination Script for Guest List
// Breaks table rows into pages so large guest lists are easier to read.
// Displays 5 rows per page and dynamically generates pagination buttons.

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("guestTable");
    if (!tableBody) return; // Only run on pages that have a guest table

    // Convert table rows (NodeList) into an array
    const rows = Array.from(tableBody.querySelectorAll("tr"));

    const rowsPerPage = 5;   // Number of rows to show per page
    let currentPage = 1;     // Start on page 1

    const paginationContainer = document.getElementById("pagination");
    if (!paginationContainer) return;

    // Renders only the rows for the current page
    function renderTable() {
        tableBody.innerHTML = "";

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            // Show rows only within the selected range
            row.style.display = (index >= start && index < end) ? "" : "none";

            if (index >= start && index < end) {
                tableBody.appendChild(row);
            }
        });
    }

    // Create pagination buttons based on number of rows
    function renderPagination() {
        const totalPages = Math.ceil(rows.length / rowsPerPage);
        paginationContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;
            btn.classList.add("btn", "btn-sm", "mx-1");

            // Highlight current page button
            btn.style.background = (i === currentPage) ? "#0d6efd" : "";
            btn.style.color = (i === currentPage) ? "white" : "";

            // Change page when clicked
            btn.addEventListener("click", () => {
                currentPage = i;
                renderTable();
                renderPagination();
            });

            paginationContainer.appendChild(btn);
        }
    }

    // Initial render
    renderTable();
    renderPagination();
});
