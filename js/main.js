
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = (document.querySelector('input').value).toLowerCase()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + choice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.sprites.front_shiny
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}