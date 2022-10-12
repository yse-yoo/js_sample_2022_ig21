var characterElement = document.getElementById("character_name")
var messageElement = document.getElementById("message")

// anfn
const inputCharacterName = () => { 
    console.log("変更されました")
    var message = characterElement.value + "さん、いらっしゃい"
    messageElement.innerHTML = message
}