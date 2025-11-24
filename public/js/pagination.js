document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("guestTable");
    if (!tableBody) return;

    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const rowsPerPage = 5; // Number of guests per page
    let currentPage = 1;

    const paginationContainer = document.getElementById("pagination");
    if (!paginationContainer) return;

    function renderTable() {
        tableBody.innerHTML = "";

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? "" : "none";
            if (index >= start && index < end) {
                tableBody.appendChild(row);
            }
        });
    }

    function renderPagination() {
        const totalPages = Math.ceil(rows.length / rowsPerPage);
        paginationContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.innerText = i;
            btn.classList.add("btn", "btn-sm", "mx-1");
            btn.style.background = (i === currentPage) ? "#0d6efd" : "";
            btn.style.color = (i === currentPage) ? "white" : "";

            btn.addEventListener("click", () => {
                currentPage = i;
                renderTable();
                renderPagination();
            });

            paginationContainer.appendChild(btn);
        }
    }

    renderTable();
    renderPagination();
});
