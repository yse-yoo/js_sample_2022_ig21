
/**
 * 関数定義（メソッド）
 * @param number x 
 * @returns number
 */
function calculate(x) {
    var y = x + 5
    return y
}

// 関数（メソッド）の実行
var answer = calculate(3)
console.log(answer)


//税率
const TAX = 0.1

//メソッド定義
function totalPrice(price, amount) {
    var total_price = price * amount * (1 + TAX)
    return total_price.toFixed()
}

//メソッド実行
var total_price = totalPrice(300, 5)
console.log(total_price)