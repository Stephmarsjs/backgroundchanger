const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['blue', 'green', "pink", "red", "orange", "purple", "yellow"]

body.style.backgroundColor = "violet"
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length+1)
    body.style.backgroundColor = colors[colorIndex]
}