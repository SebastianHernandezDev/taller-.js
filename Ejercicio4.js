console.log("///////// CALCULAR PROMEDIO DE NOTAS//////////");


function calcularPromedio(nota1, nota2){
   const n1 = parseFloat(nota1.toFixed(2)); // parse float para que lea los decimales hasta encontrar un caracter 
   const n2 = parseFloat(nota2.toFixed(2)); // no deseado y tofixed para parar en dos decimales 

   const final_nota = [n1, n2];

   const notasS = final_nota.join(', ');


  const promedio = (final_nota[0] + final_nota[1]) / 2;
  console.log("Notas:", notasS);
  console.log("Promedio:", promedio.toFixed(2));

  return promedio;
}

console.log(calcularPromedio(3.14159, 4.95678));

