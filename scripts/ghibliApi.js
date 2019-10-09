'use strict';

async function getUsers() {
    let res = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await res.json()
    let div = document.querySelector("#card-deck");
    for (let i = 0; i<data.length; i++){
        let card =document.createElement("div")
        card.setAttribute("class", "card")
        card.innerHTML = `<img src="images/images/le-tombeau-des-lucioles.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].description}</p>
            <p class="card-text"><small class="text-muted">${data[i].release_date}</small></p>
            <p class="card-text"><small class="text-muted">${data[i].director}</small></p>
        </div>`
        div.appendChild(card)
        console.log(card);
    }
   
    console.log(data);
}
getUsers();
