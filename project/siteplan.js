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

    // Hide all sections except the first one (home)
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

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
});