let dato1: number = Number(prompt("Ingresar primer numero"));
let dato2: number = Number(prompt("Ingresar segundo numero"));
let suma: number = 0;
if (dato1 <= dato2) {
  for (let aux: number = dato1; aux <= dato2; aux++){
suma = suma + aux;
console.log ("El resultado obtenido es:", suma);
}
}else{
  for (let aux2: number = dato2; aux2 <= dato1; aux2++){
    suma = suma + aux2;
    console.log("El resultado obtenido es:", suma);
  }
}