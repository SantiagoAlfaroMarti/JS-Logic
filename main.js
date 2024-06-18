// fn es el nombre de la constante que tiene la función.
export const fn = (a, b, c) => {

   // Validar las entradas. Se verifican si los valores a, b, c son negativos.
   if (a < 0 || b < 0 || c < 0) {
      throw new Error("El total de empanadas dará un número entero.");
   }

   // Calcular el resultado de empanadas sumando a, b, c.
   const resultadoEmpanadas = a + b + c;
   
   // Comprobar que el resultado de empanadas es divisible entre 3, sino
   // dará un error.
   if (resultadoEmpanadas % 3 !== 0) {
      throw new Error("El total de empanadas será divisible entre 3.");
   }

   // Comprobar si el resultado de empanadas fuese mayor a 40,
   // entonces mostrar un error. 
   if (resultadoEmpanadas > 40) {
      throw new Error("El número de empanadas no puede pasar de 40.");
   }


   // Lista de precios de cada tipo de empanada. Se crea un array con los 
   // precios de cada empanada.
   const preciosEmpanadas = [
      ...Array(a).fill(12), // Array vacío con `a` posiciones, y se llena con valor 12.
      ...Array(b).fill(14), //Array vacío con `b` posiciones, y se llena con valor 14.
      ...Array(c).fill(16) //Array vacío con `c` posiciones, y se llena con valor 16.
   ];

   // Cálculo de la media de los precios, creando un array vacío para integrar
   // las medias de los precios.
   const mediaEmpanadas = [];

   // Ejecutamos while mientras preciosEmpanadas tenga más de un elemento.
   while (preciosEmpanadas.length > 1) {

      // Si preciosEmpanadas tienen más de un elemento, se calcula su media
      // y se añaden dos veces a mediaEmpanadas.
      const primerPrecio = preciosEmpanadas.shift(); // Elimina y devuelve el primer elemento.
      const ultimoPrecio = preciosEmpanadas.pop(); // Elimina y retorna el último elemento.
      const mediaPrecio = (primerPrecio + ultimoPrecio) / 2;
      mediaEmpanadas.push(mediaPrecio, mediaPrecio);
   }

   // Caso especial. Si quedara un elemento después de while, se añade a mediaEmpanadas.
   if (preciosEmpanadas.length === 1) {
      mediaEmpanadas.push(preciosEmpanadas.pop());
   }

   // Ordenar las medias en orden descendente utilizando sort.
   mediaEmpanadas.sort((a, b) => b - a);
   console.log(mediaEmpanadas);

   // Calcular el precio total sumando cada tercer elemento, utilizando 
   // reduce para sumar los precios de mediaEmpanadas
   const precioTotal = mediaEmpanadas.reduce((total, precio, index) => {
      // Los índices son múltiplos de 3, empezando por un total de 0.
      return (index % 3 === 0)
      ? total + precio
      : total;
   }, 0);

   //Por último, se obtiene el precioTotal.
   console.log(precioTotal);
   return precioTotal;
};