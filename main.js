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

//hide buttons hitme and start before the beginning of the game
btnHitMe.style.display = 'none'
btnStay.style.display = 'none'

//full the "allcards" variable with all existing cards
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        allcards.push(values[j] + " de " + suits[i]);
    }
}

//to randomise all functions in this game
function random(table) {
    return table[Math.floor(Math.random() * table.length)]
}

//initialisation of the scores
let scorefinal; //sum of the values of the player cards
let scoredealer; //sum of the values of the dealer cards
let victoriesplayer = 0
let victoriesdealer = 0

//button start listener
btnStart.addEventListener('click', () => {
    //remove elements from previous game
    restart()
    //when the game starts we show buttons
    btnHitMe.style.display = ''
    btnStay.style.display = ''
    //but we remove the start button to avoid fraud
    btnStart.style.display = 'none'

    //push cards into currentcards
    for (let index = 0; index < 2; index++) {
        currentCards.push(random(allcards))
        //display the cards in the player's deck/div
        cardToDisplay(currentCards[index], player)
    }
    //calculate scorefinal
    pplayer.innerHTML = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
    scorefinal = cardvalue(currentCards[0]) + cardvalue(currentCards[1]);
    console.log(currentCards);
})

btnStay.addEventListener("click", () => {
    let scoredealertable = [];
    scoredealer = 0;
    dealer.appendChild(pdealer)
    //push 2 cards in currentCardsdealer
    for (let index = 0; index < 2; index++) {
        currentCardsdealer.push(random(allcards))
        scoredealertable.push(cardvalue(currentCardsdealer[index]))
        cardToDisplay(currentCardsdealer[index], dealer)
    }

    for (let index = 0; index < scoredealertable.length; index++) {
        scoredealer += scoredealertable[index]
    }
    let newcard

    //if score lower than x, then dealers draws one more card, else he stays
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
    if (scorefinal >= 21) {
        btnHitMe.style.display = "none"
    }
    pplayer.innerHTML = scorefinal
})

function definewinner(scorefinal, scoredealer) {
    let pvictoryplayer = document.createElement('p')
    let pvictorydealer = document.createElement('p')
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
    pvictoryplayer.innerHTML = "Victories : " + victoriesplayer
    pvictorydealer.innerHTML = "Victories : " + victoriesdealer
    console.log(pvictorydealer, pvictoryplayer)
    dealer.appendChild(pvictorydealer)
    player.appendChild(pvictoryplayer)
    game.appendChild(victory)
    btnStart.style.display = ''
}


export {
    allcards
}

function restart() {
    //empty the table with the cards
    game.removeChild(game.lastChild)
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
game.appendChild(victory)