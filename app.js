const container = document.querySelector('#container')

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div')
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const number = document.createElement('span')
    number.innerText = `#${i}`
    container.appendChild(pokemon)
    pokemon.appendChild(newImg)
    pokemon.appendChild(number)
    pokemon.classList.add('pokemon')
}