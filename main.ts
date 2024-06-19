// fn es el nombre de la constante que tiene la función.
export const fn = (a: number, b: number, c: number): number => {

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
    
    // Eliminar la última coma
    valorEmpanadas = valorEmpanadas.slice(0, -1);
    
    // Convertir la cadena en una lista de números
    let valorEmpanadasArray: number[] = valorEmpanadas.split(',').map(Number);
    
    // Cálculo de la media de los precios
    let mediaEmpanadas = '';
    
    while (valorEmpanadasArray.length > 1) {
       const valorInicial = valorEmpanadasArray.shift(); // Elimina y devuelve el primer elemento.
       const valorFinal = valorEmpanadasArray.pop(); // Elimina y retorna el último elemento.
       if (valorInicial !== undefined && valorFinal !== undefined) {
          const valorMedio = (valorInicial + valorFinal) / 2;
          mediaEmpanadas += `${valorMedio},${valorMedio},`;
       }
    }
 
    // Caso especial. Si quedara un elemento después de while, se añade a mediaEmpanadas.
    if (valorEmpanadasArray.length === 1) {
       mediaEmpanadas += `${valorEmpanadasArray.pop()},`;
    }
 
    // Eliminar la última coma
    mediaEmpanadas = mediaEmpanadas.slice(0, -1);
    
    // Convertir la cadena en una lista de números
    let mediaEmpanadasArray: number[] = mediaEmpanadas.split(',').map(Number);
    
    // Ordenar las medias en orden descendente utilizando sort.
    mediaEmpanadasArray.sort((a, b) => b - a);
    console.log(mediaEmpanadasArray);
 
    // Calcular el precio total sumando cada tercer elemento
    let valorTotal = 0;
    for (let i = 0; i < mediaEmpanadasArray.length; i++) {
       if (i % 3 === 0) {
          valorTotal += mediaEmpanadasArray[i];
       }
    }
 
    // Por último, se obtiene el precioTotal.
    console.log(valorTotal);
    return valorTotal;
 };