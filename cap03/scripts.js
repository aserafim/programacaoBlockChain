function invertArray(entrada){
    let inverter = entrada.toString();
    var invertido = [];

    let j = inverter.length -1;
    let i = 0;

    console.log("length", j);
    for (i = 0; i<inverter.length; i++){
        //console.log(entrada[j]);
        invertido[i] = inverter[j];
        j--;
    }
    //console.log(invertido[0])
    return invertido.join("");
}
//texto = "Teste";
texto = 123;
console.log(invertArray(texto));
//inverso = invertArray(texto);
//console.log(inverso);
//document.write(inverso);