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
    const imagen=datos.results[0].image.url
    console.log(imagen);
    let superhero=document.getElementById('superhero')
    superhero.innerHTML=`<img src=${imagen}>`
}

// const url = 'https://gateway.marvel.com/'

// async function conseguir(){
//     const fecha = new Date()
//     const respuesta= await fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=95416e15ca0dc02c4ef450b15ce7d473', {
//         method: 'GET',
//         headers: {
//             "Accept": "*/*" 
//         }
//     })
//     const datos= await respuesta.json()
//     console.log(datos);
//     // const foto=datos.sprites.front_default
//     // let pokemon=document.getElementById('pokemon')
//     // pokemon.innerHTML=`<img src=${foto}>`
// }


// conseguir()