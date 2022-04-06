

// Modal 

const openModal = document.getElementById("open-modal");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal")

openModal.addEventListener("click", function(){
    overlay.style.display = "block"

});
closeModal.addEventListener("click", function(){
    overlay.style.display = "none"
});
overlay.addEventListener("click", function(){
    overlay.style.display = "none"

});

// Carousel

const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
let slidePosition = 0;
prevBtn.addEventListener("click", movetoPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);


function interval() {
    moveToNextSlide();
    setTimeout(interval, 8000)
};
interval();



function hideAllSlides() {
    for (let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}
function moveToNextSlide(){
    hideAllSlides();

    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");

}
function movetoPrevSlide(){
    hideAllSlides();
    if (slidePosition === 0){
        slidePosition = totalSlides - 1 ;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}