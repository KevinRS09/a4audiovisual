document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const closeMenuButton = document.querySelector('.close-menu');
    
    const languageButton = document.getElementById('language-button');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
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

    const textsToTranslate = document.querySelectorAll('[data-es], [data-fr], [data-en]');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.id.split('-')[0];
            textsToTranslate.forEach(el => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });
            languageButton.src = this.src;
            dropdown.classList.remove('show');
        });
    });
});

