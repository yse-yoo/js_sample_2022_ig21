// 1 - 100 の数字で 17の倍数を３個表示
var max = 100
var number = 1
var count = 0
while (number <= 100) {
   if (number % 17 == 0) {
        console.log(number)
        count++
   }
   if (count == 3) {
        break;
   }
   number++ 
}

// rarities
var rarities = [
    { type: 'N', name: 'ノーマル', probability: 70 },
    { type: 'NP', name: 'ノーマル+', probability: 20 },
    { type: 'R', name: 'レア', probability: 6 },
    { type: 'SR', name: 'スーパーレア', probability: 3 },
    { type: 'LR', name: 'レジエンド', probability: 1 },
]