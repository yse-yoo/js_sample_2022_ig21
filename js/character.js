var character = document.getElementById('character')
character.style.position = 'absolute'
character.style.left = 0
character.style.top = '100px'

var timer
const interval = 100
const step = 1

const start = () => { 
    console.log('Start')

    var count = 0
    clearInterval(timer)
    timer = setInterval(function() {
        count++
        console.log(count)
    }, interval)
}

const stop = () => { 
    console.log('Stop')
    clearInterval(timer)
}