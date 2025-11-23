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
// Slider JS
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}
// Footer JS

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
