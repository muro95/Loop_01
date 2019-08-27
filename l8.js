function playGame() {
    let guessMax = parseInt(prompt("Please enter the Max number you want to guess: "));
    let guessMin = parseInt(prompt("Please enter the Min number you want to guess: "));
    let x = Math.floor(Math.random() * (guessMax - guessMin + 1)) + guessMin;
    let guess = 1;
    while (guess < 3) {
        let guessNum = parseInt(prompt("Please enter the your guess num: "));


        if (guessNum == x) {
            alert("Congrats! You are the real Champ after " + guess + " guess");
            break;
        } else if (guessNum > x) {
            guess++;
            alert("Sorry! Try Smaller Number");
        } else {
            guess++;
            alert("Arh! Try Higher Number");
        }
    }


}

