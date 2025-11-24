// Search Filter Script
// Filters guest rows in real-time as the user types in the search box.

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return; // Only run where a search bar exists

    searchInput.addEventListener("input", function () {
        const filter = this.value.toLowerCase(); // Convert search text to lowercase
        const rows = document.querySelectorAll("#guestTable tr");

        rows.forEach(row => {
            const text = row.textContent.toLowerCase(); // Entire row text
            // If the row contains the search text, show it; otherwise hide it
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });
});
