var messageElement = document.getElementById('message')

const add = () => {
    console.log('Add!!!')
    messageElement.classList.add('active')
}
const remove = () => {
    console.log('remove!!!')
    messageElement.classList.remove('active')
}
const toggle = () => {
    console.log('toggle!!!')
    messageElement.classList.toggle('active')
}
const replace = () => {
    console.log('replace!!!')
    messageElement.classList.replace('message', 'frame')
}

function over(element) {
    console.log(element)
}
function out(element) {
    console.log(element)
}
