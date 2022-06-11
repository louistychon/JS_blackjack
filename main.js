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
let game = document.getElementById('game-body')
let pplayer = document.createElement('p')
let pdealer = document.createElement('p')
let victory = document.createElement('p')

btnHitMe.style.display = 'none'
btnStay.style.display = 'none'

//full the allcards variable with all existing cards
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        allcards.push(values[j] + " de " + suits[i]);
    }
}

//to randomise all functions in this game
function random(table) {
    return table[Math.floor(Math.random() * table.length)]
}

//initialisation of the scorefinal variable
let scorefinal;

btnStart.addEventListener('click', () => {
    btnHitMe.style.display = ''
    btnStay.style.display = ''
    game.removeChild(game.lastChild)
    restart()
    if (currentCards.length == 0) {
        //if there are no cards in currentcards = game initialisation
        //define 2 random cards from the whole deck
        for (let index = 0; index < 2; index++) {
            //push cards into currentcards
            currentCards.push(random(allcards))
            //display the cards in the player's deck/div
            cardToDisplay(currentCards[index], player)
        }
        pplayer.innerHTML = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
        scorefinal = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
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
    }
    for (let index = 0; index < score.length; index++) {
        scorefinal += score[index]
    }

    if (scorefinal < 21) {} else if (scorefinal == 21) {
        btnHitMe.style.display = "none"
    } else {
        btnHitMe.style.display = "none"
    }
    pplayer.innerHTML = scorefinal
})
let scoredealer;
btnStay.addEventListener("click", () => {
    let scoredealertable = [];
    scoredealer = 0;
    dealer.appendChild(pdealer)
    //push de 2 cartes dans currentCardsdealer
    for (let index = 0; index < 2; index++) {
        currentCardsdealer.push(random(allcards))
        scoredealertable.push(cardvalue(currentCardsdealer[index]))
        cardToDisplay(currentCardsdealer[index], dealer)
    }

    for (let index = 0; index < scoredealertable.length; index++) {
        scoredealer += scoredealertable[index]
    }

    //if score lower than x, then dealers draws one more card, else he stays
    let newcard
    while (scoredealer < 14) {
        newcard = random(allcards)
        currentCardsdealer.push(newcard)
        scoredealertable.push(cardvalue(newcard))
        scoredealer += cardvalue(newcard)
        cardToDisplay(newcard, dealer)
    }

    pdealer.innerHTML = scoredealer
    definewinner(scorefinal, scoredealer)
})

let victoriesplayer = 0;
let victoriesdealer = 0;

let pvictoryplayer = document.createElement('p')
let pvictorydealer = document.createElement('p')

function definewinner(scorefinal, scoredealer) {
    if (scorefinal == 21) {
        victory.innerHTML = "The player wins!"
        victoriesplayer += 1
    } else if (scoredealer == 21) {
        victory.innerHTML = "The dealer wins!"
        victoriesdealer += 1
    } else if (scoredealer < 21 && scorefinal < 21 && scorefinal == scoredealer) {
        victory.innerHTML = "Tie game !"
    } else if (scorefinal > 21 && scoredealer < 21) {
        victory.innerHTML = "The player loses and the dealer wins!"
        victoriesdealer += 1
    } else if (scorefinal > 21 && scoredealer > 21) {
        victory.innerHTML = "The dealer and the player lose, the money is for the casino!"
    } else if (scorefinal < 21 && scoredealer > 21) {
        victory.innerHTML = "The dealer loses and the player wins!"
        victoriesplayer += 1
    } else if (scorefinal < 21 && scorefinal > scoredealer) {
        victory.innerHTML = "The player wins!"
        victoriesplayer += 1
    } else if (scoredealer < 21 && scoredealer > scorefinal) {
        victory.innerHTML = "The dealer wins!"
        victoriesdealer += 1
    } else {
        victory.innerHTML = "It's weird !"
    }
    btnHitMe.style.display = "none"
    btnStay.style.display = "none"
    victory.style.color = "white"
    game.appendChild(victory)
}

pvictoryplayer.innerHTML = "Victories player : " + victoriesplayer
pvictorydealer.innerHTML = "Victories dealer : " + victoriesdealer

player.appendChild(pplayer)
dealer.appendChild(pdealer)
player.appendChild(pvictoryplayer)
dealer.appendChild(pvictorydealer)

export {
    allcards
}

function restart() {
    //empty the table with the cards
    currentCards = []
    //remove the images of cards on player side
    while (player.firstChild) {
        player.removeChild(player.firstChild)
    }
    //remove images of cards on opponent side
    while (dealer.firstChild) {
        dealer.removeChild(dealer.firstChild)
    }

    //re append the paragraph displaying score of the player
    player.appendChild(pplayer)
}

window.onload = restart()