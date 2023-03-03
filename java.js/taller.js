// Ejercicio 1

// const animales=['jirafa','venado','gato','elefante','lobo','pajaro','perro','oso','ballena','puercoespin']
// let opciones=0

// while (opciones != 5){
//     opciones=+prompt(`
//     1. Agregar animales
//     2. Ordenarlos alfabeticamente
//     3. Animales dentro de la lista
//     4. Saber si un animal está en la lista
//     5. Salir
//     Digite una opcion: `)
//     switch(opciones){
//         case 1:
//             for (i=0; i<20; i++){
//                 let animal=prompt('Digite el animal: ')
//                 animales.push(animal)
//             }break;
//         case 2:
//             let contenido=animales.sort()
//             console.log(contenido)
//             break;
//         case 3:
//             let numero=+prompt('Digite un número del 1 al 10: ')
//             let orden=animales.slice(numero)
//             console.log(orden)
//             break;
//         case 4:
//             let pets=prompt('Digite el animal: ').toLowerCase()
//             let contener=animales.includes(pets)
//             if (contener==true){
//                 console.log('El animal si está')
//             }else{
//                 console.log('El animal no se encuentra');
//             }break;
//         case 5:
//             console.log('Hasta luego')
//             break;
//         default:
//             ('Número no dentro del menú')
// }}

///////////////////////////////////////////////////////////

// Ejercicio 2 

// let arreglo=[1,0,4,8,5,7,6,8,7,5,6,4,3,1,9,2]
// let repetidos=[]
// let contador=[]

// let numero=+prompt('Digite el número a buscar: ')

// if (arreglo.includes(numero)){
//     let posicion=arreglo.indexOf(numero)
//     let Uposicion=arreglo.lastIndexOf(numero)
//     console.log(`El número se encuentra en la posición ${posicion} y en la posición ${Uposicion}`)
// }else{
//     console.log('EL número no se encuentra en el arreglo.')
// }

///////////////////////////////////////////////////////////

// Ejercicio 3 

// let arreglo=[1,0,4,8,5,7,6,8]

// let numero=+prompt('Digite el número que desea añadir:')
// let posicion=+prompt('Digite la posición del nuevo número: ')

// arreglo.splice(posicion,0,numero);

// console.log(arreglo)

///////////////////////////////////////////////////////////

// Ejercicio 4

// let nombres=[]

// let cantidad=+prompt('Digite la cantidad de nombres a ingresar')
// for (i=0; i<cantidad; i++){
//     let nombre=prompt('Digite el nombre')
//     nombres.push(nombre)
// }
// console.log(nombres)
// let alfabeto=nombres.sort()
// console.log(alfabeto);


// Ejercicio 5

// let arreglo=[]
// let sumas=[]
// let prom=[]

// let cantidad=+prompt('Digite cuantos estudiantes desea registrar')

// for (i=0;i<cantidad;i++){
//     arreglo.push({})
//     var nombre=prompt('Digite el nombre del estudiante')
//     while (nombre==''){
//         alert('Digite correctamete el nombre')
//         nombre=prompt('Digite el nombre del estudiante')
//     }
//     arreglo[i].nombre = nombre
//     var curso=+prompt('Digite el curso del estudiante')
//     while (curso<0 || curso>11 || curso==''){
//         alert('El curso esta fuera del rango')
//         curso=+prompt('Digite el curso del estudiante')
//     }
//     arreglo[i].curso = curso
//     var genero=prompt('Digite el genero del estudiante')
//     while (genero !="f" && genero!="m"){
//         alert('Digite f o m para definir el genero')
//         genero=prompt('Digite el genero del estudiante')
//     }
//     arreglo[i].genero = genero
//     var nota1=parseFloat(prompt('Digite la nota 1 del estudiante'))
//     var nota2=parseFloat(prompt('Digite la nota 2 del estudiante'))
//     var nota3=parseFloat(prompt('Digite la nota 3 del estudiante'))
//     while ((nota1<0 || nota1>5)||(nota2<0 || nota2>5)||(nota3<0 || nota3>5)){
//         alert('Alguna nota está fuera del rango')
//         nota1=parseFloat(prompt('Digite la nota 1 del estudiante'))
//         nota2=parseFloat(prompt('Digite la nota 2 del estudiante'))
//         nota3=parseFloat(prompt('Digite la nota 3 del estudiante'))
//     }
//     arreglo[i].nota1 = nota1
//     arreglo[i].nota2 = nota2
//     arreglo[i].nota3 = nota3

// }
// console.log(arreglo)

// for (i=0;i<arreglo.length;i++){
//     var suma=(arreglo[i].nota1+arreglo[i].nota2+arreglo[i].nota3)/3
//     prom.push(suma)
//     sumas.push({})
//     sumas[i].suma = suma
// };
// const zip = (a,b) => a.map((el,i) => {
//     return{
//         nombre: el.nombre, 
//         suma: b[i].suma
//     }
// })
// console.log(zip(arreglo, sumas));
// // console.log(sumas,arreglo);

// for (i=0;i<prom.length;i++){
//     if (prom[i]>3.5){
//         console.log(`Aprobo`)
//     }else{
//         console.log(`Reprobo`)
//     }
// }

///////////////////////////////////////////////////////////

// Ejercicio 6

// const Agregar=document.getElementById('agregar')
// const notaMayor=document.getElementById('notaMayor')
// const listado=document.getElementById('listado')
// const nombres=document.getElementById('nombres')
// const notas=document.getElementById('notas')
// var list1=[]
// var list2=[]
// var numeros=[]
// var mayores=[]

// Agregar.addEventListener('click', ()=>{
//     let name=nombres.value
//     let note=notas.value
//     if ((note<0 || note>5 || note=='') || (name=='')){
//         alert('Introduce la informacion correctamente')
//         nombres.value=''
//         notas.value=''
//     }else{
//         list1.push({name})
//         list2.push({note})
//         numeros.push(note)
//         nombres.value=''
//         notas.value=''
//     }
// let mayor=Math.max(...numeros).toString()
// mayores.push({mayor})
// console.log(mayores);
// // console.log(list1);
// // console.log(list2);

// })

// notaMayor.addEventListener('click', ()=>{
//     const zip1 = (c,d) => c.map((elemento,m) =>{
//         return{
//             nombre: elemento.name,
//             nota: d[m].mayor
//         }
//     })
//     console.log(zip1(list1,mayores))
// })

// listado.addEventListener('click', ()=>{
//     const zip2 = (a,b) => a.map((el,x) =>{
//         return{
//             nombre: el.name, 
//             nota: b[x].note
//         }
//     })
//     console.log(zip2(list1,list2))
// })

////////////////////////////////////////////////////////

// Ejercicio 7

const nombres=document.getElementById('nombres')
const municipio=document.getElementById('municipio')
const agregar=document.getElementById('agregar')
const buscar=document.getElementById('buscar')
const determinado=document.getElementById('saber')
var arreglo=[]
var next=[]

agregar.addEventListener('click',()=>{
    let nombre=nombres.value
    let city=municipio.value
    arreglo.push({nombre,city})
    nombres.value=''
    municipio.value=''
console.log(arreglo)
})

buscar.addEventListener('click', ()=>{
    let saber=determinado.value
    next.push(saber)
    let contenido=''
    next.forEach(element => {
        for (i=0;i<next.length;i++){
            if (element==saber){
                contenido+=`${arreglo[i].nombre}`
                determinado.value=''
            }
        }
    document.getElementById('pantalla').innerHTML=contenido
    });
})



var nuevo=[{nombre:"Yanires",puntos:93},{nombre:"Leidy",puntos:80},{nombre:"Gustavo",puntos:77},{nombre:"Jamile",puntos:77},{nombre:"Andrea",puntos:63},{nombre:"Sergio",puntos:56},{nombre:"Valentina",puntos:55},{nombre:"Ronald",puntos:38}]