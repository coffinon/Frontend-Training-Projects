document.getElementById("form").addEventListener('submit', event => {
    event.preventDefault()
    
    const schemeColor = document.getElementById("color-input").value
    const schemeMode = document.getElementById("select-input").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${schemeColor.replace("#", "")}&format=json&mode=${schemeMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colors = data.colors.map(element => `${element.hex.value}`)
            generateColorBars(colors)
            generateHexBars(colors)
        })
})

function generateColorBars(colorArray) {
    let html = ''
    colorArray.forEach(color => {
        html += `<div class="color-bar" style="background-color: ${color}"></div>`
    })
    document.getElementById("color-bars").innerHTML = html
}

function generateHexBars(colorArray) {
    let html = ''
    colorArray.forEach(color => {
        html += `<a class="hex-bar">${color}</a>`
    })
    document.getElementById("hex-bars").innerHTML = html
}