var priceElement = document.getElementById('price')
console.log(priceElement)

// var price = priceElement.textContent
// var price = priceElement.innerText
var price = priceElement.innerHTML
console.log(price)

var messageElement = document.getElementById('message')
messageElement.innerHTML = '<span style="color: red;">いらっしゃい</span>'
// messageElement.innerText = "<span>いらっしゃい</span>"
// messageElement.textContent = "<span>いらっしゃい</span>"

var titleElement = document.getElementById('title')
titleElement.innerHTML = "DICE"

document.getElementById("result").innerHTML = randomNumber(1, 6)

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}