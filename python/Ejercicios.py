#Parcial1=float(input('Digite la nota del primer exámen: '))
#parcial2=float(input('Digite la nota del segundo exámen: '))

#promedio=(Parcial1+parcial2)/2

#if Parcial1>=0 and Parcial1<=5 and parcial2>=0 and parcial2<=5:
#    if promedio>=2.0:
#        Examenfinal=float(input('Digite la nota de su exámen final: '))
#       if Examenfinal>=2.0:
#            np1=Parcial1*0.3
#            np2=parcial2*0.3
#            nef=Examenfinal*0.4
#            notad=np1+np2+nef
#            if notad<3.0:
#                print('Puedes habiitar')
#                print('')
#                habilitación=float(input('Digite la nota de su habilitación: '))
#                if habilitación>=3.0:
#                    print('Has aprobado la materia')
#                elif habilitación<3.0:
#                    print('Has reprobado la materia\nIntentalo de nuevo')
#            elif notad>3.0:
#                print(f'Has aprobado la materia con una nota de {notad}')
#        elif Examenfinal<2.0:
#            print(f'Has reprobado la materia con una nota de {Examenfinal}')
#    elif promedio<2.0:
#        print(f'Has reprobado la materia con una nota de {promedio}')
#else:
#    print('Existe una nota fuera del rango establecido')

#ahorro=int(input('Cuantos dólares quiere ahorrar?: '))
#suma=0
#contador=0
#while ahorro>0:
#    total=int(input('Cuantos dólares quiere poner en la cuenta?: '))
#    suma=suma+total
#    if suma==ahorro:
#        print(f'Objetivo conseguido. Haz logrado ahorrar {ahorro} dólares.')
#        break

#pregunta=str(input('¿Desea continuar con el programa?: '))
#while pregunta=='Sí':
#    pregunta=str(input('¿Desea continuar con el programa?: '))

#print('Hasta la vista')


#contraseña=str(input('Digite su contraseña: '))
#while contraseña=='mxviestar2030':
#    contraseña=str(input('Digite su contraseña de nuevo: '))
#    if contraseña=='mxviestar2030':
#        print('Contraseña confirmada.')
#        break
#    if contraseña!='mxviestar2030':3}
#        print('Las contraseñas no coinciden.')


#contraseña=str(input('Digite su contraseña: '))
#intentos=3
#while contraseña!='mxviestar2030':
#    intentos=intentos-1
#    print(f'Le quedan {intentos} intentos. Intentelo de nuevo.')
#    if intentos==0:
#        print('No tiene más intentos.')
#        break
#    contraseña=str(input('Digite su contraseña: '))

#if contraseña=='mxviestar2030':
#    print('Contraseña correcta')


############################################################################

#menu=0
#nombres=[]
#notas=[]
#paso1,paso2=False,False

#while menu !=5:
#    menu=int(input('''1. Nombre de los 5 estudiantes: 
#2. Nota de cada estudiante: 
#3. Mayor nota y a quien le pertenece: 
#4. Visualizar estudiantes y sus notas: 
#5. Salir
#Digita una opción: '''))

#    match menu:
#        case 1:
#            print('')
#            for e in range (5):
#                nombre=str(input('Digite el nombre del estudiante: '))
#                nombres.append(nombre)
#            print('')
#            paso1=True
#        case 2:
#            if paso1==True:
#                for n in (nombres):
#                    nota=float(input(f'Digite la nota de {n}: '))
#                    if nota<0 or nota>5:
#                        while nota<0 or nota>5:
#                            nota=int(input(f'Digite la nota de {n} correctamente: '))
#                    elif nota >=0 and nota<=5.0:
#                        notas.append(nota)
#            else:
#                print('Debes realizar el paso 1 primero.')
#        case 3:
#            if paso1==True and paso2==True:
#                mayor=notas[0]
#                for x in (5):
#                    if notas[x]>mayor:
#                        mayor=notas[x]
#                    for m,t in zip(nombres,notas):
#                        if t == mayor:
#                            print(f'La mayor nota le pertenece a {m}, y es de {mayor}')
#                            print('')
#            else:
#                print('Debes realizar el paso 1 y 2 primero.')
#        case 4:
#            if paso1==True and paso2==True:
#                for m,t in zip(nombres,notas):
#                    print('')
#                    print(m,t)
#                    print('')
#            else:
#                print('Debes realizar el paso 1 y 2 primero.')
#        case 5:
#            print('')
#            print('Gracias por usar nuestro servicio.')
#            print('')
#        case otro:
#            print('registra un número correcto del menú.')

#matriz=[]
#lista1=[]
#lista2=[]
#lista3=[]
#lista4=[]
#lista5=[]
#for a in range (1,11):
#    lista1.append(a)
#for b in range (11,21):
#    lista2.append(b)
#for c in range (21,31):
#    lista3.append(c)
#for d in range (31,41):
#    lista4.append(d)
#for e in range (41,51):
#    lista5.append(e)

#print(lista1)
#print(lista2)
#print(lista3)
#print(lista4)
#print(lista5)

#matriz=[]  
#cont=0 
#for fila in range (5): 
#    matriz.append([]) 
#    for columna in range(10):
#        matriz[fila].append((columna+1)+(fila*10))

#for fila in range(len(matriz)):
#    print('[',end='') 
#    for columna in range(len(matriz[fila])):
#        if columna<len(matriz[fila])-1: 
#            print(matriz[fila][columna],end='\t ')
#        else:
#            print(matriz[fila][columna],end='') 
#    print(']',end='') 
#    print('') 

#usuarios=['pepito89','supermongui','espernancacion']
#contrasenas=['123456','password','querty123']
#oportunidades=3 
#while oportunidades>0: 
#    user=input('Digite usuario: ').lower() 
#    password=input('Digita el password: ')
#    if user in usuarios: 
#        if password in contrasenas:
#            if usuarios.index(user)==contrasenas.index(password):
#                print('Bienvenido')
#                oportunidades=0
#            else:
#                print('Error de usuario o contraseña')
#        else:
#            print('Error de usuario o contraseña')
#    else: print('Error de usuario o contraseña')
#    oportunidades-=1

##########################################################################################

#matriz=[]
#sumacol=[]
#sumafila=[]

#for fila in range (4):
#    matriz.append([])
#    for columna in range (6):
#        matriz[fila].append(columna+1+(fila*6))


#for f in range(4):
#    suma=0
#    for c in range (6):
#        suma+=matriz[f][c]
#    sumafila.append(suma)

#for co in range(6):
#    suma2=0
#    for fi in range(4):
#        suma2+=matriz[fi][co]
#    sumacol.append(suma2)

#for i in matriz:
#    print(i, end='\t')
#    for x in sumafila:
#        print(x)
#print(sumacol)

#for fila in range(len(matriz)):
#    print('[',end='') 
#    for columna in range(len(matriz[fila])):
#        if columna<len(matriz[fila])-1: 
#            print(matriz[fila][columna],sumafila,end='\t ',)
#        else:
#           print(matriz[fila][columna]) 
#    print(']',end='')
#    print('')

###################################################################################

Todo=[[],[],[],[],[],[],[],[]]

nombresT=int(input('Digite el número de estudiantes a calcular: '))

for i in range(nombresT):
    nombre=str(input(f'Digite el NOMBRE del estudiante N°{i+1}: '))
    Todo[0].append(nombre)

    genero=str(input(f'Digite el GÉNERO [F(femenino) o M(masculino)] del estudiante N°{i+1}: ')).lower()
    while genero!='f' and genero!='m':
        print('Digite el género correctamente.')
        genero=str(input(f'Digite el GÉNERO [F(femenino) o M(masculino)] del estudiante N°{i+1}: ')).lower()
    else:
        Todo[1].append(genero)

    curso=int(input(f'Digite el CURSO del estudiante N°{i+1}: '))
    while curso<1 or curso>11:
        print('Digita el curso correctamente.')
        curso=int(input(f'Digite el CURSO del estudiante N°{i+1}: '))
    else:
        Todo[2].append(curso)


for x in Todo[0]:
    notam=float(input(f'Digite la nota final de matematicas de {x}: '))
    while notam<0 or notam>5:
        print('Digite la nota correctamente')
        notam=float(input(f'Digite la nota final de matematicas de {x}: '))
    else:
        Todo[3].append(notam)

    notai=float(input(f'Digite la nota final de inglés de {x}: '))
    while notai<0 or notai>5:
        print('Digite la nota correctamente')
        notai=float(input(f'Digite la nota final de inglés de {x}: '))
    else:
        Todo[4].append(notai)

    notaq=float(input(f'Digite la nota final de química de {x}: '))
    while notaq<0 or notaq>5:
        print('Digite la nota correctamente')
        notaq=float(input(f'Digite la nota final de química de {x}: '))
    else:
        Todo[5].append(notaq)


for co in range(nombresT):
    suma2=0
    for fi in range(3,6):
        suma2+=Todo[fi][co]
    suma2=suma2/3
    Todo[6].append(suma2)

for m in Todo[6]:
    if m>=3.5:
        Todo[7].append('Aprobó')
    else:
        Todo[7].append('reprobó')

for fila in range(len(Todo)):
    print('[',end='') 
    for columna in range(len(Todo[fila])):
        if columna<len(Todo[fila])-1: 
            print(Todo[fila][columna],end='\t ')
        else:
            print(Todo[fila][columna],end='') 
    print(']',end='') 
    print('')