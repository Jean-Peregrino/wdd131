document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('main section');
            const navLinks = document.querySelectorAll('nav ul li a');
            const hambutton = document.getElementById('hambutton');
            const nav = document.getElementById('nav');
            const currentYearSpan = document.getElementById('currentyear');
            const lastModifiedSpan = document.getElementById('lastModified');

            // Set current year
            const currentYear = new Date().getFullYear();
            currentYearSpan.textContent = currentYear;

            // Set last modified date
            const lastModified = document.lastModified;
            lastModifiedSpan.textContent = lastModified;

            // Ocultar todas las secciones excepto la primera (home)
            sections.forEach((section, index) => {
                if (section.id !== 'home') {
                    section.style.display = 'none';
                }
            });

            // Mostrar la sección home de inmediato
            document.getElementById('home').style.display = 'block';

            // Function to handle navigation
            function handleNavigation(event) {
                event.preventDefault();
                const targetId = event.target.dataset.target;

                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });

                // Hide the navigation menu on mobile after selection
                if (window.innerWidth <= 1023) {
                    nav.querySelector('ul').classList.remove('show');
                }
            }

            // Add click event listeners to nav links
            navLinks.forEach(link => {
                link.addEventListener('click', handleNavigation);
            });

            // Toggle navigation menu on mobile
            hambutton.addEventListener('click', function() {
                nav.querySelector('ul').classList.toggle('show');
            });

            // Form submission handler
            const form = document.getElementById('contact-form');
            const thankYouMessage = document.getElementById('thank-you-message');

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const formData = new FormData(form);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message')
                };

                fetch('http://localhost:3000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                    if (result.message) {
                        // Ocultar el formulario y mostrar el mensaje de agradecimiento
                        form.style.display = 'none';
                        thankYouMessage.style.display = 'block';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your form.');
                });
            });
        });
