var stage = document.getElementById('stage')

// pタグ作成
// <p>スライム</p>
var monsterElement1 = document.createElement('p')
monsterElement1.innerHTML = 'スライム'

// pタグを親要素(stage)に追加
stage.appendChild(monsterElement1)

var monsterElement2 = document.createElement('p')
monsterElement2.innerHTML = 'キメラ'
stage.appendChild(monsterElement2)

stage.removeChild(monsterElement1)

// aリンク作成
// <a href="https://google.com/search?q=スライム" taget="_blank">スライム</a>

var a = document.createElement('a')
a.href = "https://google.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerHTML = monsterElement1.innerHTML

stage.appendChild(a)