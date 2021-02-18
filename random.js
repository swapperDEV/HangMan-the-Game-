const category = ['animals', 'jobs']
const animalsList = ['frog', 'parrot', 'lion', 'jaguar', 'elephant', 'dog', 'cat', 'turtle']
const jobsList = ['policeman', 'firefighter', 'builder', 'mechanic']
const catAct = document.querySelector('.catAct')
let randomC
let actCategory
let random = () => {
    randomC = Math.round(Math.random() * ((category.length -1) - 0) + 0);
    console.log(randomC);
    actCategory = category[randomC]
    catAct.innerHTML = category[randomC]
}
random()

let randomAct;
if(actCategory === 'animals') {
    randomAct = Math.round(Math.random() * ((animalsList.length -1) - 0) + 0);
    actWord= animalsList[randomAct]
}
else if(actCategory === 'jobs') {
    randomAct = Math.round(Math.random() * ((jobsList.length -1) - 0) + 0);
    actWord= jobsList[randomAct]
}