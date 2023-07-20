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