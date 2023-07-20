// Sticky Navbar
window.onscroll = function () {
    // Get the header element
    var header = document.querySelector("header");
    
    // Add the "fixed" class to the header when the user scrolls down, remove it when they scroll up
    if (window.pageYOffset > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
};

// Highlight navbar link when selected

// Function to add "active" class to the corresponding navbar link
function setActiveLink(linkId) {
    // Get all the navbar links
    var links = document.querySelectorAll(".navbar a");

    // Remove the "active" class from all links
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Add the "active" class to the link with the corresponding id
    var activeLink = document.querySelector(`.navbar a[href="#${linkId}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

// Function to check which section is in view
function checkActiveSection() {
    // Get all the sections
    var sections = document.querySelectorAll(".page-content section");

    // Loop through the sections and check if they are in view
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();
        
        // If a section is in view, set its id as the active link
        if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveLink(section.id);
            break;
        }
        }
    }

    // Check the active section on page load and when the user scrolls
    window.addEventListener("load", checkActiveSection);
    window.addEventListener("scroll", checkActiveSection);
    
    // Add event listeners to navbar links to update the active link when clicked
    var navbarLinks = document.querySelectorAll(".navbar a");
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        var linkId = this.getAttribute("href").substring(1); // Get the section id without the "#" symbol
        setActiveLink(linkId);
        var targetSection = document.getElementById(linkId);
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the corresponding section
    });
}


// Carousel Functionality
const buttons = document.querySelectorAll('[data-carousel-btn]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;
        const slides = btn.closest('[data-carousel]').querySelector('[data-slides]');
        
        const activeSlide = slides.querySelector('[data-active]');
        let newIdx = [...slides.children].indexOf(activeSlide) + offset;
        if(newIdx < 0) {
            newIdx = slides.children.length - 1;
        }
        if(newIdx >= slides.children.length) {
            newIdx = 0;
        }
        slides.children[newIdx].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});


// Services grid JS

function toggleAside(asideId) {
    console.log(asideId)
    let aside = document.getElementById(asideId);
    
    // Get all aside elements
    let asides = document.getElementsByClassName('aside');
    
    // Hide all the aside elements
    for (let i = 0; i < asides.length; i++) {
        if (asides[i] !== aside) {
            asides[i].style.display = 'none';
        }
    }
    
    // Toggle selected aside
    aside.style.display = (aside.style.display === 'none') ? 'block' : 'none';
}