const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const Hmove = document.querySelector('.humanMove')
const Cmove = document.querySelector('.compMove')
const moveIndicator1 = document.querySelector('.Indicator1')
const moveIndicator2 = document.querySelector('.Indicator2')
const innerRes = document.querySelector('.resContainer')
let computerMove = '';
let humanMove= '';
let result = '';

rock.addEventListener('click',() => {
    computer()
    humanMove = 'rock'
    console.log('This is Human',humanMove)
    Hmove.innerHTML = '<img src="./assets/Rock.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
    Result()
})
paper.addEventListener('click',() => {
    computer()
    humanMove = 'paper'
    console.log('This is Human',humanMove)
    Hmove.innerHTML = '<img src="./assets/Paper.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
    Result()
})
scissor.addEventListener('click',() => {
    computer()
    humanMove = 'scissor'
    console.log('This is Human',humanMove)
    Hmove.innerHTML = '<img src="./assets/Scissor.png" alt="">'
    moveIndicator1.innerHTML = `<p class="ResParg"><strong>HUMAN:</strong> ${humanMove}</p>`
    Result()
})

const computer = () => {
    const numMove = Math.random()
    console.log(numMove)
    if (numMove <= 1/3){
         computerMove = 'rock';
        console.log('this is computer Move ',computerMove)
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Rock.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>COMPUTER:</strong> ${computerMove}</p>`
    } else if(numMove <= 2/3){
         computerMove = 'paper';
        console.log('this is computer Move ',computerMove)
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Paper.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>COMPUTER:</strong> ${computerMove}</p>`
    }else{
         computerMove = 'scissor';
        console.log('this is computer Move ',computerMove)  
        Cmove.innerHTML = '<img class="computerImage" src="./assets/Scissor.png" alt="">'
        moveIndicator2.innerHTML = `<p class="ResParg"><strong>COMPUTER:</strong> ${computerMove}</p>`
    }
}

const Result = () => {
    if (computerMove === 'rock' && humanMove === 'paper'){
        console.log('Human Win');
        innerRes.innerHTML = `<br>
                <h4>Human Win</h4>
                <br><br>`
    }else if (computerMove === 'paper' && humanMove === 'rock'){
        innerRes.innerHTML = `<br>
        <h4>Computer Win</h4>
        <br><br>`
        console.log('Computer Win');
    }else if(computerMove === 'rock' && humanMove === 'scissor'){
        innerRes.innerHTML = `<br>
        <h4>Computer Win</h4>
        <br><br>`
        console.log('Computer Win');
    }else if(computerMove === 'scissor' && humanMove === 'rock'){
        innerRes.innerHTML = `<br>
                <h4>Human Win</h4>
                <br><br>`
        console.log('Human Win');
    }else if(computerMove === 'paper' && humanMove === 'scissor'){
        innerRes.innerHTML = `<br>
                <h4>Human Win</h4>
                <br><br>`
        console.log('Human Win');
    }else if(computerMove === 'scissor' && humanMove === 'paper'){
        innerRes.innerHTML = `<br>
                <h4>Computer Win</h4>
                <br><br>`
        console.log('Computer Win');
    }else if(computerMove === humanMove){
        innerRes.innerHTML = `<br>
                <h4>It's a Tie</h4>
                <br><br>`
        console.log(`Its a Tie`);
    }else{
        console('error')
    }
}