drawCards = () => {
    let count = 0;

    countingCards = (cards) => {
        (cards === 2 || cards === 3 || cards === 4 || cards === 5 || cards === 6 ) ?
        count++:
        (cards === 7 || cards === 8 || cards === 9 ) ?
        count:
        (cards === 10 || cards === "J" || cards === "Q" || cards === "K" || cards === "A" ) ?
        count--: null

        result = count + ((count > 0 )? ' Bet' : ' Hold');
        return count;
    }
    document.querySelector("#decision", countingCards(2) + countingCards("J") + countingCards(9) + countingCards(2) + countingCards(7)).textContent = result;
}

function clear(clear) {
    document.querySelector("#decision").textContent = " ";
}
