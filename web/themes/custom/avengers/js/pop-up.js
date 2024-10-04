document.addEventListener("DOMContentLoaded", function () {
    console.log("pqrs");

    // Create and style the modal element
    let modal = document.createElement('div');
    modal.className = 'pop-up';
    document.body.appendChild(modal);

    // Create and style the overlay element
    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);

    // Selecting all cards
    let cards = document.querySelectorAll(".views-view-responsive-grid__item-inner");

    // Looping through each card
    cards.forEach(function (card) {
        let profileImg = card.querySelector(".views-field-field-profile-image img");

        profileImg.addEventListener("click", function () {
            // Selecting employee name and project within the current card
            let employeeName = card.querySelector(".views-field-title");
            let employeeProject = card.querySelector(".views-field-field-projects");
            let employeeDesignation = card.querySelector(".views-field-field-job-title");
            let employeeContact = card.querySelector(".views-field-field-contact-information");
            let employeeBio = card.querySelector(".views-field-body");

            // Showing the modal and overlay when an image is clicked
            modal.style.display = "block";
            overlay.style.display = "block";

            // Adding content to the modal
            modal.innerHTML = `
                <h2>${employeeName ? employeeName.textContent : 'No Name'}</h2>
                <p>${employeeProject ? employeeProject.textContent : 'No Project'}</p>
                <p>${employeeDesignation ? employeeDesignation.textContent : 'No Designation'}</p>
                <p>${employeeContact ? employeeContact.textContent : 'No Contact'}</p>
                <p>${employeeBio ? employeeBio.textContent : 'No Bio'}</p>
                <span class="close" style="cursor: pointer; font-size: 30px; position: absolute; right: 10px; top: 10px; color: white;">&times;</span>
            `;
        });
    });

    // Closing the modal when the close button or overlay is clicked
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            modal.style.display = "none";
            overlay.style.display = "none";
            modal.innerHTML = '';
        }
    });

    // Closing the modal when the close button is clicked
    modal.addEventListener('click', function (event) {
        if (event.target.className.includes('close')) {
            modal.style.display = "none";
            overlay.style.display = "none";
            modal.innerHTML = '';
        }
    });
});
