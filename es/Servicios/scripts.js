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

    const ctaButton = document.querySelector('.cta-button');
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    ctaButton.addEventListener('click', function() {
        const formHTML = `
            <div class="form-content">
                <button class="close-form" aria-label="Close form">✖</button>
                <form id="contact-form">
                    <input type="text" id="contact-name" name="name" placeholder="Nombre de contacto" required>
                    <input type="email" id="contact-email" name="email" placeholder="Correo de contacto" required>
                    <textarea id="contact-description" name="description" rows="6" placeholder="Descripción del proyecto" required></textarea>
                    <button type="submit" class="submit-button">Enviar</button>
                </form>
                <div class="form-message"></div>
            </div>
        `;
        formContainer.innerHTML = formHTML;
        document.body.appendChild(formContainer);

        const closeFormButton = document.querySelector('.close-form');
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.querySelector('.form-message');

        closeFormButton.addEventListener('click', function() {
            formContainer.remove();
        });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const description = formData.get('description');

            // Send data to your email backend
            // For demo purposes, just display a message
            formMessage.textContent = 'Nos pondremos en contacto en cuando podamos.';
            contactForm.reset();
        });
    });
});
