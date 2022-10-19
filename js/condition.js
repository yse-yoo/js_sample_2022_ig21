
var hp = 10
var attack = 10
var message = ""

hp -= attack

if (hp > 0) {
    message = "モンスターの攻撃"
} else {
    message = "モンスターを倒した"
}
document.getElementById("message").innerHTML = message