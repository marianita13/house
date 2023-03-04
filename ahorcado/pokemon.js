// const url="https://pokeapi.co/api/v2/pokemon/"

// async function conseguir(){
//     const respuesta= await fetch(url+nombre.value)
//     const datos= await respuesta.json()
//     const foto=datos.sprites.front_default
//     let pokemon=document.getElementById('pokemon')
//     pokemon.innerHTML=`<img src=${foto}>`
// }

const url="https://www.superheroapi.com/api.php/10220996770587654/search/"

async function encontrar(){
    const name = document.querySelector('#nombre').value
    console.log(name);
    const respuesta=await fetch(url+name)
    const datos=await respuesta.json()
    let superhero=document.getElementById('superhero')
    for (i=0;i<6;i++){
        let imagen=datos.results[i].image.url
        console.log(imagen);
        superhero.innerHTML=`<img src=${imagen}>`
    }
}