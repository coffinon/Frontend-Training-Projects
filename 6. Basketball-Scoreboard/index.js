let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let pointsHome = 0
let pointsGuest = 0

function addPoints(points, team) {
    if (team === "home") {
        pointsHome += points
        scoreHome.textContent = pointsHome
    }
    else if (team === "guest") {
        pointsGuest += points
        scoreGuest.textContent = pointsGuest
    }
}