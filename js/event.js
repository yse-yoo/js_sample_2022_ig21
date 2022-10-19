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
    console.log('buy')
    var money = document.getElementById("money").innerText
    var item_name = itemNameElement.innerText
    var item_price = itemPriceElement.innerText
    var amount = amountElement.value
    var total_price = item_price * amount

    var message = item_name + "を" + amount + "個でいいですか？"
            + total_price + "Gになります"
    if (total_price > money) {
        message = "所持金がたりません"
    }
    messageElement.innerHTML = message
}