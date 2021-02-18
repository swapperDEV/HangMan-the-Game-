const gameStarted = () => {
    console.log('clicked');
    letter = inputL.value.toLowerCase();
    inputL.value = ''
    let actFlag = false;
    const list = document.querySelectorAll('b')
    for(let i = 0; i<actWord.length; i++) {
        if(actWord[i] == letter) {
            actFlag = true;
            points++
            console.log('points get');
            falseSt = false;
            list.forEach((e) => {
               if(e.textContent == letter) {
                   e.style.opacity = 1
               }
            })
        }
        else {
            if(actFlag !== true) {
            falseSt = true;}
            console.log('points block');
        }
    }
    if(falseSt === true) {
        if(bPoints == 5) {
            alert('game end')
            gameStatus = 'end'
        }
        else {
            person[bPoints].style.display = 'block'
        }
        bPoints+= 1;;
    } 
    if(points == actWord.length) {
        alert('game win')
        gameStatus = 'end'
    }
}