var hp = 3
//2項演算
console.log(hp + 1)
console.log(hp - 2)
console.log(hp * 3)
console.log(hp / 2)
console.log(hp % 2)

// 単項演算
hp = 3
hp++
console.log(hp)
hp--
console.log(hp)

// 複合演算
console.log('複合演算')
hp = 5 
hp += 3
console.log(hp)

hp -= 2
console.log(hp)

hp *= 3
console.log(hp)

hp /= 2
console.log(hp)

// 文字列の連結
hp = 10
var monster_name = "スライム"
var status_message = monster_name + "があらわれた！"
console.log(status_message)

status_message = monster_name + "のHPは" + hp
console.log(status_message)

// リテラルテンプレート
status_message = `${monster_name}のHPは${hp}`
console.log(status_message)

