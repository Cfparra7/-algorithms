//Ejercicio 1 
//PALINDROMO
//function palindromo (number){
  //  let invertido = number
    //. split('')
    //.reverse()
    //.join('');
    
    //return (invertido ===number)
    
//}
//console.log("¿es palidromo?" + palindromo ('12'));

//EJERCICO 2 DEVOLVER EL NUMERO DE PALABRAS EN UNA FRASE

function coincidencia (frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!?¡.,{}´+}.,]/gi, '')
    let resultado = 0;
    
    if (texto_limpio.includes(busqueda)){ 
        
        let palabras = texto_limpio.split(" ");
        let mapa = {};
        for (let palabra of palabras ){
    }
        console.log(palabras)
        
    }else {
        return resultado =0;
    }
    return resultado;
}
coincidencia("hola, mi NOMBRe es!{}, Cristian")
