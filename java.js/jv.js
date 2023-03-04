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
    12. Diciembre`)
    switch(opciones){
        case 1:
            var contenido1=''
            let month1=personas.filter(i=>i.fecha.mes==01).map(el=>el.nombre)
            console.log(month1);
            if (month1==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month1.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Enero</th>`
                    contenido1+=`<tr><td>${month1}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break

        case 2:
            contenido1=''
            let month2=personas.filter(i=>i.fecha.mes==02).map(el=>el.nombre)
            console.log(month2);
            if (month2==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month2.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Febrero</th>`
                    contenido1+=`<tr><td>${month2}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break

        case 3:
            contenido1=''
            let month3=personas.filter(i=>i.fecha.mes==03).map(el=>el.nombre)
            console.log(month3);
            if (month3==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month3.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Marzo</th>`
                    contenido1+=`<tr><td>${month3}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 4:
            contenido1=''
            let month4=personas.filter(i=>i.fecha.mes==04).map(el=>el.nombre)
            console.log(month4);
            if (month4==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month4.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Abril</th>`
                    contenido1+=`<tr><td>${month4}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 5:
            contenido1=''
            let month5=personas.filter(i=>i.fecha.mes==05).map(el=>el.nombre)
            console.log(month5);
            if (month5==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month5.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Mayo</th>`
                    contenido1+=`<tr><td>${month5}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 6:
            contenido1=''
            let month6=personas.filter(i=>i.fecha.mes==06).map(el=>el.nombre)
            console.log(month6);
            if (month6==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month6.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Junio</th>`
                    contenido1+=`<tr><td>${month6}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 7:
            contenido1=''
            let month7=personas.filter(i=>i.fecha.mes==07).map(el=>el.nombre)
            console.log(month7);
            if (month7==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month7.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Julio</th>`
                    contenido1+=`<tr><td>${month7}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 8:
            contenido1=''
            let month8=personas.filter(i=>i.fecha.mes==08).map(el=>el.nombre)
            console.log(month8);
            if (month8==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month8.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Agosto</th>`
                    contenido1+=`<tr><td>${month8}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 9:
            contenido1=''
            let month9=personas.filter(i=>i.fecha.mes==09).map(el=>el.nombre)
            console.log(month9);
            if (month9==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month9.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Septiembre</th>`
                    contenido1+=`<tr><td>${month9}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 10:
            contenido1=''
            let month10=personas.filter(i=>i.fecha.mes==10).map(el=>el.nombre)
            console.log(month10);
            if (month10==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month10.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Octubre</th>`
                    contenido1+=`<tr><td>${month10}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 11:
            contenido1=''
            let month11=personas.filter(i=>i.fecha.mes==11).map(el=>el.nombre)
            console.log(month11);
            if (month11==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month11.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Noviembre</th>`
                    contenido1+=`<tr><td>${month11}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
        case 12:
            contenido1=''
            let month12=personas.filter(i=>i.fecha.mes==12).map(el=>el.nombre)
            console.log(month12);
            if (month12==""){
                contenido1+='No hay personas nacidas en este mes'
            }else{
                for (a=0;a<month12.length;a++){
                    contenido1+=`<table>`
                    contenido1+=`<th>Diciembre</th>`
                    contenido1+=`<tr><td>${month12}</td></tr>`
                    contenido1+=`</table>`
                }
            }
            document.getElementById('pantalla').innerHTML=contenido1
            break
    }
}