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

// 問題
const createMonster = (monsterName, imageName) => { 
    var monsterFrame = document.createElement('div')
    var monsterElement = document.createElement('p')
    var monsterImage = document.createElement('img')
    // <p>xxxxx</p>
    monsterElement.innerHTML = monsterName
    // <img src="./images/xxxxx.jpg"/>
    monsterImage.src = "./images/" + imageName + '.png'
    // div に p と img を追加
    monsterFrame.appendChild(monsterElement)
    monsterFrame.appendChild(monsterImage)
    // stage に div を追加
    stage.appendChild(monsterFrame)
}

createMonster('モンスター1', 'monster_006')
createMonster('モンスター2', 'monster_022')
createMonster('モンスター3', 'monster_040')
