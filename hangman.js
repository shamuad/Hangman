let word1 = "hangman"
const guesses1 = ["l","g","v"]

function wrongGussCount(word, guesses) {
    return guesses
        .filter(letter => word.indexOf(letter) < 0)
        .length
}

wrongGussCount(word1, guesses1);

let arr = word.split(" ").map(function (wordletter))