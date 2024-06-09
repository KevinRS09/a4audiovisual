document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const closeMenuButton = document.querySelector('.close-menu');
    
    const languageButton = document.getElementById('language-button');
    const dropdown = document.querySelector('.dropdown');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });

    closeMenuButton.addEventListener('click', function() {
        navUl.classList.remove('show');
    });

    languageButton.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Modal functionality
    const modal = document.getElementById("contact-modal");
    const openModalButton = document.getElementById("open-modal");
    const closeModalButton = document.querySelector(".close-button");
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    openModalButton.addEventListener('click', function() {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform form submission logic (e.g., using fetch or AJAX)
        // Here we'll just simulate successful submission
        confirmationMessage.style.display = "block";
        contactForm.reset();
        setTimeout(function() {
            confirmationMessage.style.display = "none";
            modal.style.display = "none";
        }, 3000);
    });
});
