var characterElement = document.getElementById("character_name")
var messageElement = document.getElementById("message")
var itemNameElement = document.getElementById("item_name")
var itemPriceElement = document.getElementById("item_price")
var amountElement = document.getElementById("amount")

// anfn
const inputCharacterName = () => { 
    console.log("変更されました")
    var message = characterElement.value + "さん、いらっしゃい"
    messageElement.innerHTML = message
}

const buy = () => { 
    var item_name = itemNameElement.innerText
    var item_price = itemPriceElement.innerText
    var amount = amountElement.value
    console.log('buy')
    console.log(item_name, item_price, amount)
}