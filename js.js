function populateBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`
    board.style.gridTemplateRows = `repeat(${size} ,1fr)`
    let boardUpdater = document.querySelector('#input')
    // let backToBlack = document.getElementById('#divSquares')
    let reset = document.querySelector('#reset')
    let small = document.querySelector('#small')
    let medium = document.querySelector('#medium')
    let large = document.querySelector('#large')

reset.addEventListener("click", () => {
    populateBoard(16)
})

small.addEventListener('click', () => {
    value = document.querySelector('#small').value
    populateBoard(value)
})

medium.addEventListener("click", () => {
    value = document.querySelector('#medium').value
    populateBoard(value)
})

large.addEventListener("click", () => {
    value = document.querySelector("#large").value
    populateBoard(value)
})
    
    //event listener for integer to set amount of squares
boardUpdater.addEventListener("click", () => {
    let value = boardUpdater = document.querySelector('input').value
    if (value <= 2 || value >= 100) {
        alert('Error, enter a number between 2 and 100')
        } else {
            populateBoard(value)
        }
    })
    
    //Generate random number for mouseover event.
function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
return `rgb(${r}, ${g}, ${b})`
}

//this is what generates the divs for the baord


let amount = size * size;
for (let i = 0; i < amount; i++) {
    let square = document.createElement('div')
    function event() {
        square.addEventListener('mousedown', () => square.style.backgroundColor = 'black')
    }
    square.addEventListener('mouseover', () => square.style.backgroundColor = randomRGB())
    square.addEventListener('mousedown', event(), {

    })
    square.style.backgroundColor = "black"
    board.insertAdjacentElement('beforeend', square)
    square.setAttribute('id', 'divSquares')

}

}



populateBoard(16)

