var drinks = ['コーヒー', '紅茶', 'ほうじ茶']
console.log(drinks)
console.log(drinks.length)

var drink = drinks[1]
console.log(drink)

// 最後に値（要素）追加
drinks.push('炭酸水')
console.log(drinks)
console.log(drinks.length)

// 最後の値（要素）削除
drinks.pop()
console.log(drinks)
console.log(drinks.length)

// 最初の値（要素）削除
drinks.shift()
console.log(drinks)
console.log(drinks.length)

// 最初に値（要素）追加
drinks.unshift('オレンジジュース')
console.log(drinks)
console.log(drinks.length)

// Index = 1 の前に（要素）追加、配列削除なし = 0
drinks.splice(1, 0, 'コーヒー')
console.log(drinks)
console.log(drinks.length)


