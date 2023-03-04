const url="https://pokeapi.co/api/v2/pokemon/"

async function conseguir(){
    const respuesta= await fetch(url+nombre.value)
    const datos= await respuesta.json()
    const foto=datos.sprites.front_default
    let pokemon=document.getElementById('pokemon')
    pokemon.innerHTML=`<img src=${foto}>`
}