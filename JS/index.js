

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

const carouselControl = document.getElementById("carouselControl")
const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const slides = document.getElementsByClassName("carousel-item");
const slideIndicator = document.getElementsByClassName("carousel-slide-indicator")
const totalSlides = slides.length;
let slidePosition = 0;

prevBtn.addEventListener("click", movetoPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

carouselControl.addEventListener("click", function(){
    if (carouselControl.classList.contains("fa-pause")){
        carouselControl.classList.remove("fa-pause");
        carouselControl.classList.add("fa-play")
        clearTimeout(timeout)
             
    } else {
        carouselControl.classList.remove("fa-play");
        carouselControl.classList.add("fa-pause")
        interval();
    }
})

function interval() {
    moveToNextSlide();
    timeout = setTimeout(interval, 8500)
};
interval();



function hideAllSlides() {
    for (let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
    for (let indicator of slideIndicator){
        indicator.classList.remove("active-slide")
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
    slideIndicator[slidePosition].classList.add("active-slide")
}
function movetoPrevSlide(){
    hideAllSlides();
    if (slidePosition === 0){
        slidePosition = totalSlides - 1 ;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    slideIndicator[slidePosition].classList.add("active-slide")

}
// Invoice Creator
const invoiceInput = document.getElementById("invoiceInput")
invoiceInput.addEventListener("keyup", function(event){
    let inputNumber = invoiceInput.value
    let inputFeet = input * 3.28084
    let inputMeter = input / 3.28084

    let lengthNumber = document.getElementById("lengthNumber")
    lengthNumber.textContent = input + " meters = "  + inputFeet.toFixed(3) + " feet | " + input + " feet = " + inputMeter.toFixed(3) + " meters"

    let inputLiters = input * .264172
    let inputGallons = input / .264172

    let volumeNumber = document.getElementById("volumeNumber")
    volumeNumber.textContent = input + " liters = " + inputLiters.toFixed(3) + " gallons | " + input + " gallons = " + inputGallons.toFixed(3) + " liters"

    let inputKilos = input * 2.20462
    let inputPounds = input / 2.20462

    let massNumber = document.getElementById("massNumber")
    massNumber.textContent = input + " kilos = " + inputKilos.toFixed(3) + " pounds | " + input + " pounds = " + inputPounds.toFixed(3) + " kilos"


})

let inputFeet = input * 3.28084
let inputMeter = input / 3.28084

let lengthNumber = document.getElementById("lengthNumber")
lengthNumber.textContent = input + " meters = "  + inputFeet.toFixed(3) + " feet | " + input + " feet = " + inputMeter.toFixed(3) + " meters"

let inputLiters = input * .264172
let inputGallons = input / .264172

let volumeNumber = document.getElementById("volumeNumber")
volumeNumber.textContent = input + " liters = " + inputLiters.toFixed(3) + " gallons | " + input + " gallons = " + inputGallons.toFixed(3) + " liters"

let inputKilos = input * 2.20462
let inputPounds = input / 2.20462

let massNumber = document.getElementById("massNumber")
massNumber.textContent = input + " kilos = " + inputKilos.toFixed(3) + " pounds | " + input + " pounds = " + inputPounds.toFixed(3) + " kilos"

