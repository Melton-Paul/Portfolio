// Invoice Creator
const unitInput = document.getElementById("unitInput");

unitInput.addEventListener("keyup", function(){
let input = unitInput.value

let inputFeet = input * 3.28084
let inputMeter = input / 3.28084

const lengthNumber = document.getElementById("lengthNumber")
lengthNumber.textContent = `${input} meters = ${inputFeet.toFixed(3)} feet | ${input} feet = ${inputMeter.toFixed(3)} meters`

let inputLiters = input * .264172
let inputGallons = input / .264172

const volumeNumber = document.getElementById("volumeNumber")
volumeNumber.textContent = `${input} liters = ${inputLiters.toFixed(3)} gallons | ${input} gallons = ${inputGallons.toFixed(3)} liters`

let inputKilos = input * 2.20462
let inputPounds = input / 2.20462

const massNumber = document.getElementById("massNumber")
massNumber.textContent = `${input} kilos =  ${inputKilos.toFixed(3)} pounds |  ${input} pounds =  ${inputPounds.toFixed(3)} kilos `

});

