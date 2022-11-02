var character = {
    id: 1,
    name: 'Alice',
    job: 'wizard',
    level: 1,
    hp: 10,
    mp: 10,
    exp: 0,
}

console.log(character)
console.log(character.id)

document.getElementById('name').innerHTML = character.name
document.getElementById('job').innerHTML = character.job
document.getElementById('level').innerHTML = character.level
document.getElementById('hp').innerHTML = character.hp
document.getElementById('mp').innerHTML = character.mp
document.getElementById('exp').innerHTML = character.exp