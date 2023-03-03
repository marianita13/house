#matriz=[]
#equipos=[1,2,3]

#for f in range (3):
#    matriz.append([])
#    cont=1
#    for c in range (3):
#        goles=int(input(f'Cuantos goles marcó el equipo {f+1} contra el equipo {cont}: '))
#        cont+=1
#        if goles>=0:
#            matriz[f].append(goles)
#    print('')

#for fila in range(len(equipos)):
#    print('[',end='')
#    for columna in range(len(matriz[fila])):
#        if columna<len(matriz[fila])-1: 
#            print(matriz[fila][columna],end='\t ')
#        else:
#           print(matriz[fila][columna],end='')
#    print(']',end='') 
#    print('')

#sumacol=[]
#sumafila=[]
#for f in range(4):
#    suma=0
#    for c in range (6):
#        suma+=matriz[fila][columna]
#        sumafila.append(suma)

#for c in range(6):
#    suma2=0
#    for f in range(4):
#        suma2+=matriz[columna][fila]
#        sumacol.append(suma2)

#######################################################################3

#grupo1=[]
#grupo2=[]
#genero1=[]
#genero2=[]
#listac=[]
#total=0

#for n in range(1,3):
#    for i in range(2):
#        total+=1
#        nombre=str(input(f'Digite los nombres del integrante N°{i} del equipo {n}: '))
#        genero=str(input('Femenino o masculino: '))
#        if total<=2:
#            grupo1.append(nombre)
#            genero1.append(genero)
#        elif total>2:
#            grupo2.append(nombre)
#            genero2.append(genero)
#    print('')

#for a,b in zip(grupo1,genero1):
#    print(f'{a}, {b}')
#print('')
#for c,d in zip(grupo2,genero2):
#    print(f'{c}, {d}')
#print('')
#listac.extend(grupo1)
#listac.extend(grupo2)
#print(listac)

###########################################################################################

opciones=0
guardar=[]
codigos=[]
paso1,paso2=False,False

while opciones!=7:
    opciones=int(input('''1. Digite la cantidad de estudiantes.
2. Registre los datos de los estudiantes.
3. Mostrar listado de estudiantes.
4. Registrar notas estudiantes.
5. Imprimir notas estudiantes.
6. Acerca del autor.
7. Salir
Digita una opción: '''))

    match opciones:
        case 1:
            cantidad=(int(input('Digite la cantidad de estudiantes a registrar: ')))
            print('')
            paso1=True
        case 2:
            if paso1==True:
                for a in range(cantidad):
                    name=str(input(f'Digita el nombre del estudiante N°{a+1}: '))
                    codigo=int(input(f'Digita el código del estudiante N°{a+1}: '))
                    while codigo in codigos:
                        print('El código no se puede repetir. Digite uno nuevo.')
                        codigo=int(input('Digite el nuevo código: '))
                    codigos.append(codigo)
                    nivel=int(input(f'Elija el nivel del estudiante N°{a+1}: 1.Begginer\n2.Junior\n3.Senior\nDigite una opción: '))
                    while nivel<1 or nivel>3:
                        nivel=int(input(f'Elija correctamente el nivel del estudiante N°{a+1}: 1.Begginer\n2.Junior\n3.Senior\nDigite una opción: '))
                    if nivel==1:
                        nivel="begginer"
                    elif nivel==2:
                        nivel= "Junior"
                    elif nivel==3:
                        nivel = "Senior"

                    guardar.append({
                        "nombre":name,
                        "codigo":codigo,
                        "nivel":nivel
                    })
                    paso2=True
        case 3:
            if paso1==True and paso2==True:
                for i in guardar:
                    print(i)
                print('')
        case 4:
            if paso1==True and paso2==True:
                for x in guardar:
                    for a in range(3):
                        notas=int(input(f'Digite la nota N°{a+1} de {x["nombre"]} con el código {x["codigo"]}: '))
                        while notas<0 or notas>5:
                            notas=int(input(f'Digite correctamente la nota N°{a+1} de {x["nombre"]} con el código {x["codigo"]}: '))
                        else:
                            guardar.append({
                                "notas" : [notas] 
                            })
        case 5:
            print('')

        case 6:
            print('')
            print('Realizado por Mariana Acero.')
            print('')

        case 7:
            print('')
            print('Gracias por usar nuestros servicios')