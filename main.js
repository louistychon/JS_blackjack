import {
    cardvalue
} from "./cardvalue.js"
import {
    cardToDisplay
} from "./imglink.js"

let suits = ["Pique", "Coeur", "Treffle", "Carreau"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let currentCards = [];
let allcards = [];
let currentCardsdealer = [];



//select items
let btnStart = document.getElementById('btnStart')
let btnHitMe = document.getElementById('btnHitMe')
let player = document.getElementById('player')
let dealer = document.getElementById('dealer')
let div = document.createElement('div')
let pplayer = document.createElement('p')
let pdealer = document.createElement('p')
let victory = document.createElement('p')
let game = document.getElementById('game-body')

//full the allcards variable with all existing cards
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        allcards.push(values[j] + " de " + suits[i]);
    }
}

console.log(allcards)

//to randomise all functions in this game
function random(table) {
    return table[Math.floor(Math.random() * table.length)]
}

//set up the initial deck
let scorefinal;

btnStart.addEventListener('click', () => {
    btnHitMe.style.display = ''
    btnStay.style.display = ''
    currentCards = []
    //push cards into currentcards
    if (currentCards.length == 0) {
        //if there are no cards in currentcards = game initialisation
        //define 2 random cards from the whole deck
        for (let index = 0; index < 2; index++) {
            currentCards.push(random(allcards))
            cardToDisplay(currentCards[index], player)
        }
        console.log(currentCards); //visualise cards
        pplayer.innerHTML = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
        scorefinal = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
        player.appendChild(pplayer)

    } else if (currentCards.length > 0) {
        //if there are cards in currentcards = game restart
        //remove the currentcards from the deck
        currentCards = [];
        //push 2 new cards
        for (let index = 0; index < 2; index++) {
            currentCards.push(random(allcards))
        }
        console.log(currentCards);
        //display cards in HTML
    }
})

//click on hitMe button
btnHitMe.addEventListener('click', () => {
    scorefinal = 0;
    let score = []
    let x = random(allcards)
    currentCards.push(x)
    cardToDisplay(x, player)
    for (let index = 0; index < currentCards.length; index++) {
        score.push(cardvalue(currentCards[index]))
        console.log(score)
    }
    for (let index = 0; index < score.length; index++) {
        scorefinal += score[index]
    }
    console.log(scorefinal)
    if (scorefinal < 21) {
        console.log("vous avez encore la possibilité de tirer une carte")
    } else if (scorefinal == 21) {
        btnHitMe.style.display = "none"
        console.log("vous avez gagné !")
    } else {
        btnHitMe.style.display = "none"
        console.log("vous avez perdu !!!")
    }
    pplayer.innerHTML = scorefinal
})

let scoredealer;
btnStay.addEventListener("click", () => {
    let scoredealertable = [];
    scoredealer = 0;
    //push de 2 cartes dans currentCardsdealer
    for (let index = 0; index < 2; index++) {
        currentCardsdealer.push(random(allcards))
        scoredealertable.push(cardvalue(currentCardsdealer[index]))
        cardToDisplay(currentCardsdealer[index], dealer)
    }
    console.log("dealer " + currentCardsdealer)
    
    for (let index = 0; index < scoredealertable.length; index++) {
        scoredealer += scoredealertable[index]
    }
    console.log(scoredealer)
    console.log(scorefinal)
    
    //if score lower than x, then dealers draws one more card, else he stays

    if(scoredealer < 16){
        currentCardsdealer.push(random(allcards))
        scoredealertable.push(cardvalue(currentCardsdealer[2]))
        scoredealer += scoredealertable[2]
        cardToDisplay(currentCardsdealer[2], dealer)
    }
    else{
        console.log("dealer stays with the score " + scoredealer)
        btnStay.style.display = "none"
    }
    pdealer.innerHTML = scoredealer
    dealer.appendChild(pdealer)
    definewinner(scorefinal, scoredealer)
})


function definewinner(scorefinal, scoredealer) {
    if (scorefinal == 21){
        victory.innerHTML = "Le joueur a gagné !"
    }
    else if(scoredealer == 21){
        victory.innerHTML = "Le dealer a gagné !"
    }
    else if(scorefinal == scoredealer){
        victory.innerHTML = "Egalité !"
    }
    else if(scorefinal > 21 && scoredealer < 21){
        victory.innerHTML = "Le joueur perd et le dealer gagne !"
    }
    else if (scorefinal > 21 && scoredealer > 21){
        victory.innerHTML = "Le dealer et le joueur perdent, le casino raffle la mise !"
    }
    else if (scorefinal < 21 && scoredealer > 21){
        victory.innerHTML = "Le dealer perd et le joueur gagne !"
    }
    else if (scorefinal < 21 && scorefinal > scoredealer){
        victory.innerHTML = "Le joueur a gagné !"
    }
    else if (scoredealer < 21 && scoredealer > scorefinal){
        victory.innerHTML = "Le dealer a gagné !"
    }
    else {
        victory.innerHTML = "C'est bizarre !"
    }
    victory.style.color = "white"
    game.appendChild(victory)
}

export {allcards}