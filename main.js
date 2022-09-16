let color = "black"
let click = true
document.querySelector('.error').style.display = "none"
function populuate(size){
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div')
squares.forEach(div=> div.remove())
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
let total = size *size
for(let i = 0; i < total; i++) {
    let square = document.createElement('div')
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = 'white'
    board.insertAdjacentElement("beforeend", square)
}
}
populuate(16)
function resize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = "none"
        populuate(input);  
    }
    else {
        document.querySelector('.error').style.display = "flex"
    }
}

function colorSquare(){
    if (click){ 
    if (color === "random"){ 
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`

    }
    else {
        this.style.backgroundColor = color
    }
}
}
function changeColor(choice) {
    color = choice; 
}

function resetBoard(){
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach(div=> div.style.backgroundColor = 'white')

}
document.querySelector('body').addEventListener('click', (e)=> {
    if(e.target.tagName != 'BUTTON'){
    click =!click
}});