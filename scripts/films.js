
'use strict';

const connectToApi = () => { //hacemos función para poder llamarla en otro momento.
  const section = document.querySelector('.pokemon-list');

  for (let i = 1; i < 22; i++) { //4 - hacemos un loop para hacer las llamadas a la api para conseguir los primeros 21 pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {//1 - nos llega una string de la response de la request, con un header y un body
        return response.json()//2- .json coge el body de la response, donde está la data, y la convierte a un json, devolviendo una promise
      })
      .then(function (pokemon) {// 3- encadenamos otro then para manejar la segunda promise
        //5 - con el resultado de la promise, recibimos cada uno de los pokemon, y se van añadiendo al HTML según se van resolviendo (desordenados)
        console.log(pokemon)
        // 6 - 
        const article = document.createElement('article')
        console.log(article)
        // 7 - uso map porque quiero iterar por un array y obtener un array del mismo numero de elementos, modificados
        article.innerHTML = `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
          <div>${pokemon.types.map(type => `<p class="pokemon-type-label">${type.type.name}`).join('')}<div>
        `
        section.appendChild(article);
      })
      .catch(function (error) {
        return error;
      })
  }
}

connectToApi();