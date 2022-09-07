import Dog from "./Dog.js"
import dogs from "./data.js"
import {getNopeBadgeHtml, getLikeBadgeHtml, getEndOfDogsMsgHtml} from "./utils.js"

let currentDog
let buttonsDisabled = false

document.getElementById("btn-cross").addEventListener('click', () => {
    // If buttons are not disabled, show "Nope" badge, update class variables and the app
    if(!buttonsDisabled) {
        document.getElementById("dog-section").innerHTML += getNopeBadgeHtml()
        currentDog.hasBeenSwiped = true
        updateApp()
    }
})

document.getElementById("btn-heart").addEventListener('click', () => {
    // If buttons are not disabled, show "Like" badge, update class variables and the app
    if(!buttonsDisabled) {
        document.getElementById("dog-section").innerHTML += getLikeBadgeHtml()
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true
        updateApp()
    }
})

function updateApp() {
    setTimeout(() => {
        if (dogs.length > 0) {
            // If there are new dogs nearby, take one of them and render out on the screen
            currentDog = getNewDog()
            renderNewDog(currentDog)
        } else {
            // If not, show the message that there are no more dogs to swipe
            document.getElementById("dog-section").innerHTML = getEndOfDogsMsgHtml()
            buttonsDisabled = true
        }
    }, 1000)
}

function getNewDog() {
    // Get new dog object from an array, create an class object out of this and return
    const currentDogObject = dogs.shift()
    return currentDogObject ? new Dog(currentDogObject) : {}
}

function renderNewDog(dog) {
    // Render new dog on the screen
    document.getElementById("dog-section").innerHTML = dog.getDogHtml()
}

// The app starts from here
updateApp()