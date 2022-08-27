const inputField = document.getElementById("input-field")
const conversionButton = document.getElementById("conversion-button")
const lengthParagraph = document.getElementById("length")
const volumeParagraph = document.getElementById("volume")
const massParagraph = document.getElementById("mass")

const lengthRatio = 3.281       // 1 meter = 3.281 feet
const volumeRatio = 0.264       // 1 liter = 0.264 gallon
const massRatio = 2.204         // 1 kilogram = 2.204 pound

conversionButton.addEventListener("click", () => {
    if (inputField.value) {
        renderValues(inputField.value)
    } else {
        console.log("Integer value needed")
    }
})

function renderValues(value) {
    const feet = (value * lengthRatio).toFixed(3)
    const meters = (value / lengthRatio).toFixed(3)
    const gallons = (value * volumeRatio).toFixed(3)
    const liters = (value / volumeRatio).toFixed(3)
    const pounds = (value * massRatio).toFixed(3)
    const kilograms = (value / massRatio).toFixed(3)
    
    // Render lengths
    lengthParagraph.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`
    // Render volumes
    volumeParagraph.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
    // Render masses
    massParagraph.textContent = `${value} kilograms = ${pounds} pounds | ${value} pounds = ${kilograms} kilograms`
}
