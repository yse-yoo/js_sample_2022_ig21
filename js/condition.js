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

var weekday = "水"
var type = ""

switch (weekday) {
    case "水":
        type = "燃えるゴミ" 
        break;

    case "金":
        type = "燃えないゴミ" 
        break;

    default:
        type = "回収なし" 
        break;
}
document.getElementById("message").innerHTML = type