export const fn = (a, b, c) => {

  if (a + b + c > 40) {
     throw new Error("El número de empanadas no puede pasar de 40.")
  }

  if ((a + b + c) % 3 !== 0) {
     throw new Error("El número de empanadas tiene que ser divisible entre 3.")
  }

  if (a < 0 || b < 0 || c < 0) {
     throw new Error("El numero de empanadas tiene que ser un numero entero.")
  }

  let precioTotal = 0;

  
  const preciosEmpanadas = [];
  for (let i = 0; i < a; i++) {
     preciosEmpanadas.push(12);
  }
  for (let i = 0; i < b; i++) {
     preciosEmpanadas.push(14);
  }
  for (let i = 0; i < c; i++) {
     preciosEmpanadas.push(16);
  }

 
  const mediaEmpanadas = [];
  while (preciosEmpanadas.length > 1) {
     let primerPrecio = preciosEmpanadas.shift();
     let ultimoPrecio = preciosEmpanadas.pop();
     let mediaPrecio = (primerPrecio + ultimoPrecio) / 2;
     mediaEmpanadas.push(mediaPrecio);
     mediaEmpanadas.push(mediaPrecio);
  }

   
  if (preciosEmpanadas.length === 1) {
     mediaEmpanadas.push(preciosEmpanadas.pop());
  }

  
  mediaEmpanadas.sort((a, b) => b - a);
  console.log(mediaEmpanadas)

  
  for (let i = 0; i < mediaEmpanadas.length; i++) {
     if (i % 3 === 0) {
        precioTotal += mediaEmpanadas[i];
     }
  }

  console.log(precioTotal);
  return precioTotal;
};