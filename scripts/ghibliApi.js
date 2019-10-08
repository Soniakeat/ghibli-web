'use strict';

async function getUsers() {
    let res = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await res.json()
    console.log(data);
}
getUsers();
