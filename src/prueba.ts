let numero1: number = Number(prompt("ingresar primer numero"));
let numero2: number = Number(prompt("Ingresar segundo numero"));
let suma: number = 0;
if (numero1 <= numero2) {
  for (let indice: number = numero1; indice <= numero2; indice++) {
    suma = suma + indice;
    console.log("RESULTADO", suma);
  }
} else {
  for (let indice2: number = numero2; indice2 <= numero1; indice2++) {
    suma = suma + indice2;
    console.log("RESULTADO", suma);
  }
}
