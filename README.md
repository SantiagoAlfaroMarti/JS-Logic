# Compra de empanadas :bread:



## Table of Contents 🗂️

- [Stack :hammer:](#stack)
- [Statement :book:](#statement)
- [Approach :memo:](#approach)
- [Author :black_nib:](#autor)

## <a id="stack">Stack 

<img src= "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>


## <a id="features">Problem :book:</a>

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los
participantes del bootcamp de programación. Dado que hoy es el Día de las
Empanadas, hay una oferta especial en la que te llevas hasta tres empanadas y
solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores
debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la
empanada más cara la tendrá que pagar de todas formas, la comprará junto a la
segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas
restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor
estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación
de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una
vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo
paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la
de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad
vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros,
cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar
el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro,
pagando por ella la media del costo de las dos empanadas enteras. Así, una
empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin
embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en
mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de
estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa
de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las
empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de
empanadas será múltiplo de 3.

## <a id="approach">Approach :memo:</a>

Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta
de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes,
respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que
a + b + c < 40. Además, el número de empanadas es divisible entre 3.

Salida

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros
que se puede pagar para llevarse todas las empanadas.

## <a id="autor">Author :black_nib:</a>

Santiago Juan Alfaro Martí [GitHub](https://github.com/SantiagoAlfaroMarti)
Student Full Stack Developer Web
