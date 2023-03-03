# numero=1
# contador=0
# while numero>0:
#     numero=float(input('Digite los números: '))
#     contador+=numero
#     print(f'La suma total es {contador}')

#################################################################

# import random
# num=1
# while num!=0:
#     num=(random.randint(0,10))
#     print(num)

###############################################################

# import random
# for n in range (1,21):
#     print(random.randint (1,1001))

###############################################################

# numero=int(input('Digite un número: '))
# contador=0
# for i in range (numero+1):
#     contador+=1
#     if contador %2 == 1:
#         print(contador)

#############################################################

#muestreo=0
#contadorn=0
#contadorj=0
#contadorad=0
#contadorab=0
#muestreo=int(input('Digite el número de personas del muestreo: '))
#while muestreo==20:
#    niños=int(input('Cuantos niños participan?: '))
#    jóvenes=int(input('Cuantos jóvenes participan?: '))
#    adultos=int(input('Cuantos adultos participan?: '))
#    abuelos=int(input('Cuantos abuelos participan?: '))
#    print('')
#    if niños+jóvenes+adultos+abuelos==20:
#        for niños in range (1,niños+1):
#            pniño=float(input(f'Digite el peso del niño {niños}: '))
#            contadorn+=pniño
#        print('')
#        for jóvenes in range (1,jóvenes+1):
#            pjoven=float(input(f'Digite el peso del jóven {jóvenes}: '))
#             contadorj+=pjoven
#        print('')
#        for adultos in range (1, adultos+1):    
#            padulto=float(input(f'Digite el peso del adulto {adultos}: '))
#            contadorad+=padulto
#        print('')
#        for abuelos in range (1,abuelos+1):
#            pabuelo=float(input(f'Digite el peso del adulto mayor {abuelos}: '))
#            contadorab+=pabuelo
#        print('')
#        promn=contadorn/niños
#        print(f'El peso promedio de los niños es: {promn}')
#
#        promj=contadorj/jóvenes
#        print(f'El peso promedio de los jóvenes es: {promj}')
#
#        promad=contadorad/adultos
#        print(f'El peso promedio de los adultos es: {promad}')
#
#        promab=contadorab/abuelos
#        print(f'El peso promedio de los adultos mayores es: {promab}')
#        break
#    else:
#        print('Digite el número correcto del muestreo.')
#print('Digite el número correcto') 

########################################################################################

#muestreo=0
#contadorn=0
#contadorj=0
#contadorad=0
#contadorab=0
#muestreo=int(input('Digite el número de personas del muestreo: '))
#while muestreo == 20:
#    categoria=int(input('Digite su edad: '))
#    if categoria>=0 and categoria<=12:
#        contadorn+=1
#    if categoria>=13 and categoria<=29:
#        contadorj+=1
#    if categoria>=30 and categoria<=59:
#        contadorad+=1
#    if categoria>=60:
#        contadorab+=1
#        if contadorab+contadorad+contadorn+contadorj == 20:
#            break

#print('Digite el número correcto del muestreo.')    

###########################################################################33

#for a in range (1,2):
#    for b in range (1,6):
#        for c in range (1,5):
#            print(f'{a}.{b}.{c}', end='   ')
#        print('')

#####################################################################################

#nombres=[]
#notas=[]
#menu=0
#paso1,paso2=False,False
#while menu!=5:
#    print('')
#    menu=int(input('''-------Calificaciones------------

#1. Nombre de los estudiantes
#2. Notas de los estudiantes
#3. Mejor de la clase
#4. Todas las notas y estudiantes
#5. Salir
#---Seleccione una opcion:  '''))
#    print('')

#    match menu:
#        case 1:
#            for i in range(1,6):
#                nombre=input(f'Digite el nombre del estudiante {i}: ')
#                nombres.append(nombre)
#                paso1=True
#        case 2:
#            if paso1==True:
#                for i in nombres:
#                    nota=int(input(f'Digite la nota de {i}: '))
#                    if nota<0 or nota>5:
#                        while nota<0 or nota>5:
#                            nota=int(input(f'Digite la nota de {i} correctamente: '))
#                    if nota>=0 and nota<=5:
#                        notas.append(nota)
#                paso2=True
#            else:
#                print('Registre primero los nombres de los estudiantes (paso 1)')
#        case 3:
#            if paso1==True and paso2==True:
#                mejor=max(notas)
#                for n in range(5):
#                    if notas[n]==mejor:
#                        print(f'el mejor estudiante fue {nombres[n]}. Con una calificacion de: {notas[n]}')
#            elif paso1==True and paso2==False:
#                print('Registre las notas primero (paso2)')
#            elif paso1==False and paso2==True:
#                print('Registre primero los nombres de los estudiantes (paso 1)')
#            else:
#                print('Realice los pasos 1 y 2 primero')
#        case 4:
#            if paso1==True and paso2==True:
#                print('Las notas del curso fueron las siguientes:')
#                for j in range(5):
#                    print(f'{nombres[j]}:{notas[j]}')
#            elif paso1==True and paso2==False:
#                print('Registre las notas primero (paso2)')
#            elif paso1==False and paso2==True:
#                print('Registre primero los nombres de los estudiantes (paso 1)')
#            else:
#                print('Realice los pasos 1 y 2 primero')
#        case 5:
#            print('')
#            print('Hasta Luego')
#            print('')
#        case otro:
#            print('')
#            print('Digite una opcion correcta')

#########################################################################################################3

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
                    print('')

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
                    print(notas)