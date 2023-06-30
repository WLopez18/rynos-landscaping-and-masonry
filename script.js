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
