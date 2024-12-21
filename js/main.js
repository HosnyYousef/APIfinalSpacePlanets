
// document.querySelector('button').addEventListener('click', getFetch)

window.onload = function getFetch() {
    const choice = (document.querySelector('input').value).toLowerCase()
    const url = 'https://finalspaceapi.com/api/v0/location/'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data[0].inhabitants[0])
            // document.querySelector('#planetId').src = data[0].id
            document.querySelector('h2').innerText = data[0].name
            document.querySelector('img').src = data[0].img_url
            document.querySelector('h3').innerText = data[0].inhabitants;
            data[0].name.forEach((item) => {
                displayList.push(item.name);
                let li = document.createElement("li");
                li.innerText = item.name;
                list.appendChild(li);
            })
            console.log(displayList)
            document.querySelector('h4').innerText = data[0].notable_residents
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}




