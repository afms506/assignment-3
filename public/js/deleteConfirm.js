document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-confirm");

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function (event) {
            const confirmDelete = confirm("Are you sure you want to delete this?");
            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });
});
