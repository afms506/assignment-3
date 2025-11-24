// Delete Confirmation Script
// This script ensures the user is asked to confirm BEFORE deleting
// an event or guest. Prevents accidental removals.

document.addEventListener("DOMContentLoaded", () => {
    // Select all delete buttons with class .delete-confirm
    const deleteButtons = document.querySelectorAll(".delete-confirm");

    // Add click event to each delete button
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function (event) {
            // Show browser confirmation popup
            const confirmDelete = confirm("Are you sure you want to delete this?");

            // If user clicks "Cancel", stop the delete request
            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });
});
