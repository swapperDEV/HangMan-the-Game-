const inputL = document.querySelector('.inputLetter')
const check = document.querySelector('.check')
const table = document.querySelector('.table')
const person = document.querySelectorAll('.wis')
let letter;
let points = 0;
let bPoints = 0;
let gameStatus = 'game'
const doIt = () => {
    for(let i = 0; i<actWord.length; i++) {
        const newL = document.createElement('b')
        newL.textContent = actWord[i];
        table.appendChild(newL)
    }
}
doIt()
let falseSt

const gamePreStart = () => {
    if(gameStatus == 'game') {
        gameStarted();}
        else {
            alert('game was ended, please restart website to start next round')
        }
}

check.addEventListener('click', () => {
    gamePreStart();
})
inputL.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        gamePreStart();
    }
})
