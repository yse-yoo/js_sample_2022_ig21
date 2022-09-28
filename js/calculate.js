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

var message = "この物語は"
message += "フィクションです"
console.log(message)

message += 2020
console.log(message)

var attack = 10
hp = 50
hp = hp - attack
console.log(hp)

var is_bool
hp = 10
is_bool = (hp == 20)
console.log(is_bool)

hp = 0
is_bool = (hp < -10)
console.log(is_bool)

hp = 0
is_bool = (hp > -10)
console.log(is_bool)

hp = 10
is_bool = (hp >= 10)
console.log(is_bool)