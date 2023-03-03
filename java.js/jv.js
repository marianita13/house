const personas=[
{nombre:'Tasha', edad:21, genero:'f', fecha:{dia:01,mes:09,year:2002}},
{nombre:'Tyrone', edad:19, genero:'m', fecha:{dia:01,mes:07,year:2004}},
{nombre:'Uniqua', edad:60, genero:'f', fecha:{dia:01,mes:04,year:1963}},
{nombre:'Austin', edad:13, genero:'m', fecha:{dia:01,mes:01,year:2009}},
{nombre:'Pablo', edad:09, genero:'m', fecha:{dia:01,mes:06,year:2014}}]

const nombre=document.getElementById('nombre')
const edad=document.getElementById('edad')
const genero=document.getElementById('genero')
const fecha=document.getElementById('fecha')
const agregar=document.getElementById('agregar')
const mostrarnombres=document.getElementById('mNombres')
const mostraredades=document.getElementById('mEdades')
const porcentajegenero=document.getElementById('mporcentajes')
const meselegido=document.getElementById('mes')

agregar.addEventListener('click',()=>{
    let name=nombre.value
    let age=edad.value
    let gender=genero.value
    var date=fecha.value
    if (name=='' || age=='' || gender=='' || date==''){
        alert('Existen campos vacios')
    }else{
    date=date.split('-')
    let day=Number(date[0])
    let month=Number(date[1])
    let year=Number(date[2])
    personas.push({nombre:name, edad:age, genero:gender, fecha:{dia:day, mes:month, anio:year}})
    nombre.value=''
    edad.value=''
    genero.value=''
    fecha.value=''
    console.log(personas);
    }
})

mostrarnombres.addEventListener('click',function(){
   let contenido='' 
   contenido=`<table><th>Nombres</th>`
   let nombres=personas.map(el=>el.nombre)
   nombres.forEach(nombre=>{
    contenido+=`<tr><td>${nombre}</td></tr>`
   })
   contenido+=`</table>`
   document.getElementById('pantalla').innerHTML=contenido
})

mostraredades.addEventListener('click',ages)
function ages(){
    let adultosMayores=personas.filter(el=>el.edad>=50).map(el=>el.nombre)
    let adultos=personas.filter(el=>el.edad>18 && el.edad<50).map(el=>el.nombre)
    let kids=personas.filter(el=>el.edad<18).map(el=>el.nombre)

    let contenido=''
    contenido+=`<table><th>Adultos Mayores</th><th>Adultos</th><th>Kids</th>`
    let total=[adultosMayores.length,adultos.length,kids.length]
    total=Math.max(...total)

    for(i=0;i<total;i++){
        let Tadultosmayores=''
        let Tadultos=''
        let Tkids=''
        if (adultosMayores[i]==null){
            Tadultosmayores=' '
        }else{
            Tadultosmayores=adultosMayores[i]
        }
        if (adultos[i]==null){
            Tadultos=' '
        }else{
            Tadultos=adultos[i]
        }
        if (kids[i]==null){
            Tkids=' '
        }else{
            Tkids=kids[i]
        }
        contenido+=`<tr><td>${Tadultosmayores}</td><td>${Tadultos}</td><td>${Tkids}</td></tr>`
    }
contenido+=`</table>`
document.getElementById('pantalla').innerHTML=contenido
}

porcentajegenero.addEventListener('click',function(){
    let men=personas.filter(i=>i.genero=="m")
    let contm=men.length

    let woman=personas.filter(i=>i.genero=="f")
    let contw=woman.length

    let pm=(100/personas.length)*contm
    let pw=(100/personas.length)*contw
    
    let contenido=''
    contenido=`<table><th>Hombres</th><th>Mujeres</th>`
    contenido+=`<tr><td>${pm}</td><td>${pw}</td>`
document.getElementById('pantalla').innerHTML=contenido
})

meselegido.addEventListener('click',mes)
function mes(){
    let opciones=0
    opciones=+prompt(`Digite una opcion
    1. Enero
    2. Febrero
    3. Marzo
    4. Abril
    5. Mayo
    6. Junio
    7. Julio
    8. Agosto
    9. Septiembre
    10. Octubre
    11. Noviembre
    12. Diciembre
    13`)
    switch(opciones){
        case 1:
            let month=personas.filter(i=>i.fecha==01).map(el=>el.nombre)
            for (i=0;i<12;i++){
                if (fecha[1]==i)
                console.log(fecha[0],nombre)
            }
    }
}