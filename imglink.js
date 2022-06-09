import {
    allcards
} from './main.js'

let attributesSRC = ["img/2pique.png", "img/3pique.png", "img/4pique.png", "img/5pique.png", "img/6pique.png", "img/7pique.png", "img/8pique.svg", "img/9pique.png", "img/10pique.svg", "img/valetpique.png", "img/damepique.png", "img/roipique.png", "img/aspique.png", "img/2coeur.png", "img/3coeur.png", "img/4coeur.png", "img/5coeur.png", "img/6coeur.png", "img/7coeur.png", "img/8coeur.png", "img/9coeur.png", "img/10coeur.png", "img/valetcoeur.png", "img/damecoeur.png", "img/roicoeur.png", "img/ascoeur.png", "img/2treffle.png", "img/3treffle.png", "img/4treffle.png", "img/5treffle.png", "img/6treffle.png", "img/7treffle.png", "img/8treffle.png", "img/9treffle.png", "img/10treffle.png", "img/valettreffle.png", "img/dametreffle.png", "img/roitreffle.png", "img/astreffle.png", "img/2carreau.png", "img/3carreau.png", "img/4carreau.png", "img/5carreau.png", "img/6carreau.png", "img/7carreau.png", "img/8carreau.png", "img/9carreau.png", "img/10carreau.png", "img/valetcarreau.png", "img/damecarreau.png", "img/roicarreau.png", "img/ascarreau.png"]

function cardToDisplay(card, placement) {
    let img = document.createElement("img")
    for (let i = 0; i < 52; i++) {
        if (card == allcards[i]){
            img.setAttribute("src", attributesSRC[i])
        }
    placement.appendChild(img)
    }
}

export {
    cardToDisplay
}