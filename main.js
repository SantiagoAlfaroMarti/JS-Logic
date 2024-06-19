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

   // Inicializar los precios de las empanadas
   let valorEmpanadas = '';
   
   for (let i = 0; i < a; i++) valorEmpanadas += '12,';
   for (let i = 0; i < b; i++) valorEmpanadas += '14,';
   for (let i = 0; i < c; i++) valorEmpanadas += '16,';
   
   valorEmpanadas = valorEmpanadas.slice(0, -1);
   
   // Convertir la cadena en una lista de números
   valorEmpanadas = valorEmpanadas.split(',').map(Number);
   
   // Cálculo de la media de los precios
   let mediaEmpanadas = '';
   
   while (valorEmpanadas.length > 1) {
      const valorInicial = valorEmpanadas.shift(); // Elimina y devuelve el primer elemento.
      const valorFinal = valorEmpanadas.pop(); // Elimina y retorna el último elemento.
      const valorMedio = (valorInicial + valorFinal) / 2;
      mediaEmpanadas += `${valorMedio},${valorMedio},`;
   }

   // Caso especial. Si quedara un elemento después de while, se añade a mediaEmpanadas.
   if (valorEmpanadas.length === 1) {
      mediaEmpanadas += `${valorEmpanadas.pop()},`;
   }

   mediaEmpanadas = mediaEmpanadas.slice(0, -1);
   
   // Convertir la cadena en una lista de números
   mediaEmpanadas = mediaEmpanadas.split(',').map(Number);
   
   // Ordenar las medias en orden descendente utilizando sort.
   mediaEmpanadas.sort((a, b) => b - a);
   console.log(mediaEmpanadas);

   // Calcular el precio total sumando cada tercer elemento
   let valorTotal = 0;
   for (let i = 0; i < mediaEmpanadas.length; i++) {
      if (i % 3 === 0) {
         valorTotal += mediaEmpanadas[i];
      }
   }

   // Por último, se obtiene el precioTotal.
   console.log(valorTotal);
   return valorTotal;
};