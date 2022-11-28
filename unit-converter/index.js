let meterFeetEl = document.getElementById("meter-feet")
let literGallonEl = document.getElementById("liter-gallon")
let kiloPoundEl = document.getElementById("kilo-pound")

const meterToFeet =  3.281
const literToGallon =  4.546
const kiloToPound =  2.204

let inputEl = document.getElementById("input-box")
let convertBtnEl = document.getElementById("convert-btn")

convertBtnEl.addEventListener("click", function() {
    
    let baseValue = inputEl.value
    
    meterFeetEl.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters
    `
    literGallonEl.innerHTML = `
    ${baseValue} liters = ${(baseValue / literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * literToGallon).toFixed(3)} liters
    `
    kiloPoundEl.innerHTML = `
    ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos
    `
    
    inputEl.value = ""
})
