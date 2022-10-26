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