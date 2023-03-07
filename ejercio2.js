//Ejercicio nº 2:
//- Crear una aplicacion que pida un numero y haga la succeción de Fibonacci.

function fibonacci (limit) {
    const fib =[0, 1];
    for (let i = 2; i <= limit; i++ ){
     fib.push (fib[i-1] + fib[i-2]);
    } 
    return fib;
}
const testFib =fibonacci(20);
console.log(testFib);