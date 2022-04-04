
let randomNumber;
let nr;
let resetButton;
const submit_B = document.querySelector('#submit_B');
const numberButtons = document.querySelector('#numberButtons');
const para = document.querySelector("#guess");
submit_B.addEventListener('click', generateButtons);

function generateButtons () {
    nr = numberButtons.value;
    randomNumber = Math.floor(Math.random() * nr) + 1;
    numberButtons.disabled = true;
    submit_B.disabled = true;
    for (let i = 1; i <= nr; ++i) {
        let btn = document.createElement("button");
        btn.innerHTML = i;
        document.body.appendChild(btn);
        btn.onclick = function() {
            if (i == randomNumber) {
                para.textContent = 'Winner!';
                para.style.backgroundColor = 'green';
                setGameOver();
            } else {
                console.log("huo");
                para.textContent = 'Try again!';
                para.style.backgroundColor = 'red';
            }
        }
    }
}

function setGameOver() {
     resetButton = document.createElement('button');
     resetButton.textContent = 'Start new game';
     document.body.append(resetButton);
     resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    location.reload();
    return false;
}
