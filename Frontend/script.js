const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const Hmove = document.querySelector('.humanMove')
const Cmove = document.querySelector('.compMove')
const moveIndicator1 = document.querySelector('.Indicator1')
const moveIndicator2 = document.querySelector('.Indicator2')
let computerMove = '';
let humanMove= '';
let result = '';

rock.addEventListener('click',() => {
    computer()
    humanMove = 'rock'
    console.log(humanMove)
    Hmove.innerHTML = '<img src="./assets/Rock.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
})
paper.addEventListener('click',() => {
    computer()
    humanMove = 'paper'
    console.log(humanMove)
    Hmove.innerHTML = '<img src="./assets/Paper.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
})
scissor.addEventListener('click',() => {
    computer()
    humanMove = 'scissor'
    console.log(humanMove)
    Hmove.innerHTML = '<img src="./assets/Scissor.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
})

const computer = () => {
    const numMove = Math.random()
    console.log(numMove)
    if (numMove <= 1/3){
        let computerMove = 'Rock';
        console.log('this is computer Move ',computerMove)
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Rock.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${computerMove}</p>`
    } else if(numMove <= 2/3){
        let computerMove = 'Paper';
        console.log('this is computer Move ',computerMove)
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Paper.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${computerMove}</p>`
    }else{
        let computerMove = 'Scissor';
        console.log('this is computer Move ',computerMove)  
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Scissor.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${computerMove}</p>`
    }
}

