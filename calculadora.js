
function calculadora (operacao, numeros){

    let resultado = 0;

switch(operacao){

    case'+':

        for(i=0; i<numeros.length; i++){
            resultado += numeros[i];
        };  
        return resultado

    case'-':
        resultado = 0
        for(i=0; i<numeros.length; i++){
            resultado -= numeros[i];
        };
        return resultado

    case'*':
        resultado = 0
        for(i=0; i<numeros.length; i++){
            resultado *= numeros[i];
        };
        return resultado
    default:
        console.log("Inválido")
}
}

module.exports = calculadora