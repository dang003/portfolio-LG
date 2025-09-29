//HEADER DROPDOWN

// Get elements
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownBackdrop = document.getElementById('dropdownBackdrop');
const dropdownOptions = document.querySelectorAll('.dropdown-option');

// Toggle dropdown
dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

// Handle option selection
dropdownOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const target = option.getAttribute('data-target');
        if (target) {
            // Scroll to target section
            const targetElement = document.querySelector(target);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        closeDropdown();
    });

});

// Close dropdown when clicking backdrop
dropdownBackdrop.addEventListener('click', closeDropdown);

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
        closeDropdown();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDropdown();
    }
});

function toggleDropdown() {
    const isActive = dropdownToggle.classList.contains('active');
    if (isActive) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

function openDropdown() {
    dropdownToggle.classList.add('active');
    dropdownMenu.classList.add('active');
    dropdownBackdrop.classList.add('active');
}

function closeDropdown() {
    dropdownToggle.classList.remove('active');
    dropdownMenu.classList.remove('active');
    dropdownBackdrop.classList.remove('active');
}

// Optional: Update dropdown based on current section in viewport
function updateActiveSection() {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            console.log('Current section:', sectionId);
            // You could highlight the active section in the dropdown here
        }
    });
}

window.addEventListener('scroll', updateActiveSection);
document.addEventListener('DOMContentLoaded', updateActiveSection);


//SLIDESHOW

const slides = document.querySelectorAll(".slideshow img");
let current = 0;

function showSlide(index) {
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length; // wrap around
  slides[current].classList.add("active");
}

// make sure to target buttons outside slideshow
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(current - 1);
});

document.querySelector(".next").addEventListener("click", () => {
  showSlide(current + 1);
});
