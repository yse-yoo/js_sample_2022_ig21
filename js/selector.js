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
