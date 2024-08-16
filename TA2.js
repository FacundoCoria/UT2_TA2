function reverseString(texto){
    let separarTexto = texto.split("");
    let invertirTexto = separarTexto.reverse();
    let unirTexto = invertirTexto.join("");
    console.log(unirTexto);
}

reverseString("Hola");