var title = document.querySelector("h1")
console.log(title)

title = document.querySelector("#title")
console.log(title)

var cities = document.querySelectorAll('.city')
console.log(cities)

// 繰り返し表示
cities.forEach(function(city) {
    console.log(city.innerHTML)
})

for (const city of cities) {
    console.log(city.innerHTML)
}

//h2,h3を選択
var titles = document.querySelectorAll('h2, h3')
console.log(titles)

// class=item_list
var items = document.querySelectorAll('ul.item_list > li')
console.log(items)
items.forEach(function(item) {
    console.log(item.innerHTML)
})