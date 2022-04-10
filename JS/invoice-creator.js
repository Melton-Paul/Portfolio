// Invoice Creator
const invoiceInput = document.getElementById("invoiceInput");

invoiceInput.addEventListener("keyup", function(){
let input = invoiceInput.value

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


});

