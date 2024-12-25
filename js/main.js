
// document.querySelector('button').addEventListener('click', getFetch)

window.onload = function getFetch() {
    const choice = (document.querySelector('input').value).toLowerCase()
    const url = 'https://finalspaceapi.com'

    fetch(`${url}/api/v0/location/`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            const notableResId = data.character;
            console.log(notableResId, '\n')
            console.log(data[0])
            document.querySelector('#planetId').innerText = data[0].id
            document.querySelector('h2').innerText = data[0].name
            document.querySelector('img').src = data[0].img_url
            document.querySelector('h5').innerText = data[0].inhabitants.join("\n")
        //     return fetch(`${url}/character/${notableResId}`); // make a 2nd request and return a promise
        // })
        // .then(response => response.json())
        // .then(data => {
        //     document.querySelector('h4').innerText = data[0].notable_residents
        //     .join("\n")
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// trying to work notiable characters

// window.onload = function getFetch() {
//     const choice = (document.querySelector('input').value).toLowerCase()
//     const url = 'https://finalspaceapi.com/api/v0/character/'

//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             document.querySelector('h4').innerText = data[0].notable_residents
//             .join("\n")
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }

//

// https://finalspaceapi.com/api/v0/character/


