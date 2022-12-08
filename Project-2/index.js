//double slider part
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`;

slideLeft.addEventListener('click', function(){
    changeSlide('up');
});
slideRight.addEventListener('click', function(){ 
    changeSlide('down');
});

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0;
        }
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

setInterval(function(){changeSlide('up')}, 5000);

//auto text
const textEl = document.querySelector('text');
let index = 1;

function writeText() {
    textEl.innerHTML = textEl.innerHTML
}