
document.write('<h1>プロフィール</h1>')
document.write('<h2>名前</h2>')
document.write('<p>東京　太郎</p>')

var outputP = function (message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

outputP("旅行")
outputP("ゲーム")
outputP("スポーツ")

document.title = "プロフィール"
document.body.style.color = "#808080"
document.body.style.background = "#fffaf0"