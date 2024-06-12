document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const languageButton = document.getElementById('language-button');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdown = document.querySelector('.dropdown');

    const contactModal = document.getElementById('contact-modal');
    const quoteModal = document.getElementById('quote-modal');

    const openContactModalBtn = document.getElementById('open-contact-modal');
    const openQuoteModalBtn = document.getElementById('open-quote-modal');

    const closeButtons = document.querySelectorAll('.close-button');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    languageButton.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.id.split('-')[0];
            // Aquí puedes agregar la lógica para cambiar el idioma del contenido
            languageButton.src = this.src;
            dropdown.classList.remove('show');
        });
    });

    openContactModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        contactModal.style.display = 'block';
    });

    if (openQuoteModalBtn) {
        openQuoteModalBtn.addEventListener('click', function(event) {
            event.preventDefault();
            quoteModal.style.display = 'block';
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            contactModal.style.display = 'none';
            if (quoteModal) {
                quoteModal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
        if (event.target == quoteModal) {
            quoteModal.style.display = 'none';
        }
    });
});
