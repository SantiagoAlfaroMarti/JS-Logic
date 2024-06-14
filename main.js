// El planteamiento sería juntar las empanadas para que así disminuya 
//el gasto total.

export const fn = (a, b, c) => {

   const precioA = 12;     /*precio empanada pollo*/
   const precioB = 14;     /*precio empanada ternera*/
   const precioC = 16;     /*precio empanada verdura*/

   if (a < 0 || b < 0 || c < 0) {                                         
      throw new Error("Introduzca una cantidad de empanadas válida");
   }

   else if ((a + b + c) >= 40) {                                               
      throw new Error("Excede la cantidad máxima de empanadas");
   }
