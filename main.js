var suits = ["Pique", "Coeur", "Treffle", "Carreau"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var currentPlayer = 0;
let cardOneID, cardTwoID = 0,
    cardThreeID = 0,
    cardFourID = 0,
    cardfiveID, cardsixID, cardsevenID, cardeightID;
let cards = [cardOneID, cardTwoID, cardThreeID, cardFourID, cardfiveID, cardsixID, cardsevenID, cardeightID];
let currentCards = [
    [],
    [],
];

function random(table) {
    return table[Math.floor(Math.random() * table.length)]
}

//function that sets up the initial deck

function newDeck() {
    //define random cards & suits
    cardOneID = random(values);
    cardOneSuits = random(suits);
    cardTwoID = random(values);
    cardTwoSuits = random(suits);
    //push cards into currentcards
    if (currentCards[0].length == 0) {
        //if there are no cars in currentcards = game initialisation
        currentCards[0].push(cardOneID, cardOneSuits);
        currentCards[1].push(cardTwoID, cardTwoSuits);
        console.table(currentCards);
    } else {
        //if there are cards in currentcards = game restart
        //remove the currentcards from the deck
        currentCards = [[],[]];
        //push 2 new cards
        currentCards[0].push(cardOneID, cardOneSuits), currentCards[1].push(cardTwoID, cardTwoSuits);

        console.table(currentCards);
        //display cards in HTML

    }

}
//click on hitMe button
function hitMe(currentCards) {
    x = [random(values),random(suits)]
    currentCards.push(x)
    console.table(currentCards);
}

function stay() {

}

function dealerhand() {

}

window.onload = newDeck();