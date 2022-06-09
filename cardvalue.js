//page to determine the card value and count if the game is over


function cardvalue(card) {
    switch (card) {
        case "A de Coeur":
        case "A de Treffle":
        case "A de Pique":
        case "A de Carreau":
            return 1
        case "K de Coeur":
        case "K de Treffle":
        case "K de Pique":
        case "K de Carreau":
        case "Q de Coeur":
        case "Q de Treffle":
        case "Q de Pique":
        case "Q de Carreau":
        case "J de Coeur":
        case "J de Treffle":
        case "J de Pique":
        case "J de Carreau":
            return 10
        case "2 de Pique":
        case "2 de Treffle":
        case "2 de Coeur":
        case "2 de Carreau":
            return 2
        case "3 de Pique":
        case "3 de Treffle":
        case "3 de Coeur":
        case "3 de Carreau":
            return 3
        case "4 de Pique":
        case "4 de Treffle":
        case "4 de Coeur":
        case "4 de Carreau":
            return 4
        case "5 de Pique":
        case "5 de Treffle":
        case "5 de Coeur":
        case "5 de Carreau":
            return 5
        case "6 de Pique":
        case "6 de Treffle":
        case "6 de Coeur":
        case "6 de Carreau":
            return 6
        case "7 de Pique":
        case "7 de Treffle":
        case "7 de Coeur":
        case "7 de Carreau":
            return 7
        case "8 de Pique":
        case "8 de Treffle":
        case "8 de Coeur":
        case "8 de Carreau":
            return 8
        case "9 de Pique":
        case "9 de Treffle":
        case "9 de Coeur":
        case "9 de Carreau":
            return 9
        case "10 de Pique":
        case "10 de Treffle":
        case "10 de Coeur":
        case "10 de Carreau":
            return 10
        default:
            console.log("cartes non valides")
            return "cnv"
    }
}
export {
    cardvalue
}