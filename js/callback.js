var drinks = ["コーヒー", "紅茶", "ほうじ茶"]


drinks.forEach(function(drink) {
    console.log(drink)
})

var scores = [80, 74, 63, 71, 68]

// score を２倍
var new_scores = scores.map(function(score) {
    return score * 2
})
console.log(new_scores)

//70以上のデータのみ作成
new_scores = scores.filter(function(score) {
    return score >= 70
})
console.log(new_scores)

// 合計値
var sum = scores.reduce(function(prev, current) {
    return prev + current 
})
console.log(sum)


//70以上80未満のデータのみ作成
new_scores = scores.filter((score) => score >= 70)
                   .filter((score) => score < 80)
console.log(new_scores)