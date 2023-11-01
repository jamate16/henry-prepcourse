/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   return Math.max(x, y)
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   return (edad < 18) ? "Not allowed" : "Allowed"; 
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   const statusMap = {
      1: "Online",
      2: "Away",
      default: "Offline"
   };
   return statusMap[status] || statusMap.default;
}  

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   const greetingsMap = {
      "aleman": "Guten Tag!",
      "mandarin": "Ni Hao!",
      "ingles": "Hello!",
   }
   return greetingsMap[idioma] ?? "Hola!";
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   const COLORS = [
      "blue",
      "red",
      "green",
      "orange"
   ]
   if (!COLORS.includes(color)) {
      return "Color not found";
   }
   return `This is ${color}`;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   const NUMS = [5, 10];
   return NUMS.includes(num);
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   return 50 > num && num > 20;
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   return Number.isInteger(num);
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   var return_str = "";
   if (num % 3 === 0) {
      return_str += "fizz"
   }
   if (num % 5 === 0) {
      return_str += "buzz"
   }
   return (return_str.length === 0) ? false : return_str;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo". tick
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos". tick
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor. tick
   // Si todos los argumentos son cero, retornar ---> "Error". tick
   // Si no se cumple ninguna de las condiciones anteriores, retornar false. tick
   // Tu código:
   var nums = [num1, num2, num3];

   if (num1 > 0 && Math.max(...nums) === num1) {
      return "Numero 1 es mayor y positivo"
   }
   if (nums.some((num) => num < 0)) {
      return "Hay negativos";
   }
   if (nums.every((num) => num === 0)) {
      return "Error";
   }
   if (Math.max(...nums) === num3) {
      return ++num3;
   }

   return false;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   // Check for divisors from 2 up to num - 1.
   num = Math.abs(num)
   if (num < 2) {
      return false;
   }
   for (let i = num-1; i > 1; --i) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   return (valor) ? "Soy verdadero" : "Soy falso";
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   let num_100 = num/100;
   return 10 > num_100 && num_100 >= 1;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let limit = 8;
   const INCREMENT = 5;
   do {
      num += INCREMENT;
      --limit;
   } while (limit > 0)
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
