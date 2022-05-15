//page to determine the card value and count if the game is over

function cardvalue(currentCards) {
    let count = 0;
    let x = currentCards[0];
    for (let index = 0; index < currentCards.length; index++) {
        switch (currentCards[index]) {
            case "A":
                count += 1;
                break;
            case "K", "Q", "J":
                count += 10;
                break;
            case 2:
                count += 2;
                break;
            case 3:
                count += 3;
                break;
            case 4:
                count += 4;
                break;
            case 5:
                count += 5;
                break;
            case 6:
                count += 6;
                break;
            case 7:
                count += 7;
                break;
            case 8:
                count += 8;
                break;
            case 9:
                count += 9;
                break;
            case 10:
                count += 10;
                break;
            default:
                console.log("cartes non valides")
        }

    }
}

console.log(cardvalue())