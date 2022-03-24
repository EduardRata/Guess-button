let number;
console.log(number);

document.getElementById("b1").onclick = function() {
    number = Math.floor(Math.random() * 3) + 1;
    if(number === 0) {
        document.getElementById("score").innerHTML = "Winner!";
        window.alert("Congrats!");
    } else {
        document.getElementById("score").innerHTML = "Try again!";
    }
}
document.getElementById("b2").onclick = function() {
    number = Math.floor(Math.random() * 3) + 1;
    if(number === 1) {
        document.getElementById("score").innerHTML = "Winner!";
        window.alert("Congrats!");
    } else {
        document.getElementById("score").innerHTML = "Try again!";
    }
}
document.getElementById("b3").onclick = function() {
    number = Math.floor(Math.random() * 3) + 1;
    if(number === 2) {
        document.getElementById("score").innerHTML = "Winner!";
        window.alert("Congrats!");
    } else {
        document.getElementById("score").innerHTML = "Try again!";
    }
}