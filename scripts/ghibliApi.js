'use strict';

let photos = [{
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    url: `https://image.tmdb.org/t/p/original/cowaxROnzr0yrnUpKrbvtRYrHBX.jpg`
},
{
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    url: `https://image.tmdb.org/t/p/original/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg`
},
{
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    url: `https://image.tmdb.org/t/p/original/p2yfO8o9lpegOu3w3gXMljPGGkP.jpg`
},
{
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    url: `https://image.tmdb.org/t/p/original/evpiRk1EQz4sk2WQZnD37m3hDdf.jpg`
},
{
    id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    url: `https://image.tmdb.org/t/p/original/mn4NHCptzaKgnHIu45aGcHCgEF.jpg`
},
{
    id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    url: `https://image.tmdb.org/t/p/original/ufgDvLOfckVd0gpfzDiWt79n7xR.jpg`
},
{
    id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    url: `https://image.tmdb.org/t/p/original/o02LN17iRmUKmJhFe5l5RxAUVZ1.jpg`
},
{
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    url: `https://image.tmdb.org/t/p/original/vpgvV8pVPNGWUUdE2xFUFf4VeMJ.jpg`
},
{
    id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    url: `https://image.tmdb.org/t/p/original/fV27iSj7EDz7W3ud0JyfTnzz58R.jpg`
},
{
    id: "45204234-adfd-45cb-a505-a8e7a676b114",
    url: `https://image.tmdb.org/t/p/original/l3aaz7SB1Qm3JSkEqulv18aKriV.jpg`
},
{
    id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    url: `https://image.tmdb.org/t/p/original/i7XIqVb1rfdaHOnVofoCwpBITlt.jpg`
},
{
    id: "90b72513-afd4-4570-84de-a56c312fdf81",
    url: `https://image.tmdb.org/t/p/original/z59Ea0TitkjTKU8WWmYyKqK7SGC.jpg`
},
{
    id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    url: `https://image.tmdb.org/t/p/original/fnMzL4G6HYilH1w1leFXOY5b29m.jpg`
},
{
    id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
    url: `https://image.tmdb.org/t/p/original/8gmaCfkQVDh45apYJvOxDZlz6gV.jpg`
},
{
    id: "758bf02e-3122-46e0-884e-67cf83df1786",
    url: `http://40.media.tumblr.com/tumblr_m8cy4oXBKJ1rdnwxgo2_1280.png`
},
{
    id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    url: `https://image.tmdb.org/t/p/original/7UfW01brClXNFNNMCwjbuISbVEO.jpg`
},
{
    id: "45db04e4-304a-4933-9823-33f389e8d74d",
    url: `https://image.tmdb.org/t/p/original/wrTiDOnDjmMJETVVSdlSg3CP4Uq.jpg`
},
{
    id: "67405111-37a5-438f-81cc-4666af60c800",
    url: `https://image.tmdb.org/t/p/original/cWKZVEiagJF0Rlnw2GdyiKn55Pz.jpg`
},
{
    id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    url: `https://image.tmdb.org/t/p/original/upGM9LaHQGM2nc4RWWn4YJ7bYcz.jpg`
},
{
    id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    url: `https://image.tmdb.org/t/p/original/xdUt4AFfn4mMgCPg4FEsQxhoV11.jpg`
},
];

async function getUsers() {
    let res = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await res.json()
    data = data.reverse()
    let div = document.querySelector("#card-deck");
    for (let i = 0; i<data.length; i++){
        let image = photos.find(photo => photo.id === data[i].id).url

        let card = document.createElement("div")
        card.setAttribute("class", "card")
        card.innerHTML = `<img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title font-weight-bold"> ${data[i].title}</h5>
            <p class="card-text font-weight-light">${data[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><small class="text-muted font-weight-bold">RELEASE DATE : ${data[i].release_date}</small></li>
            <li class="list-group-item"><small class="text-muted font-weight-bold">DIRECTOR : ${data[i].director}</small></li>
            <li class="list-group-item"><small class="text-muted font-weight-bold">PRODUCER : ${data[i].producer}</small></li>
            <li class="list-group-item"><small class="text-muted font-weight-bold">RATE SCORE : ${data[i].rt_score}</small></li>
        </ul>`
        div.appendChild(card)
    }
}

getUsers();

