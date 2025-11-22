const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown, .dropdown2');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle dropdowns on mobile
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if(window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if(!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('open'));
    }
});
// Dynamically set current year in footer
const yearSpan = document.getElementById('year');
if(yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Optional: collapsible sections for mobile
const footerSections = document.querySelectorAll('.footer-section h4');
footerSections.forEach(section => {
    section.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            const parent = section.parentElement;
            parent.classList.toggle('open');
            const content = section.nextElementSibling;
            if(content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        }
    });
});
