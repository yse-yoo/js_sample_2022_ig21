var counterElement = document.getElementById("counter")
var interval = 1000
var timer

const start = () => {
    console.log("start")
    var count = 0
    timer = setInterval(function () {
        count++
        counterElement.innerHTML = count
    }, interval)
}

const stop = () => {
    console.log("stop")
}