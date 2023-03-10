//Exercício 1
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
    return invertido.join("");
}
//texto = 123;
//console.log(invertArray(texto));


//Exercício 2
function combinationArray(texto){
    var i, acr;
    var imp = '';
    for (i=0; i<texto.length; i++){
        imp=texto[i];
            console.log(imp);
                for(j=i+1; j<texto.length; j++){
                    imp = imp+texto[j];
                    console.log(imp);
                }
            imp = '';
    }

}
//combinaArray('doga');

//Exercício 3
function sortArray(entrada){
    alphabet = ['A', 'B', 'C', 'D'];
    entrada_aux = [];
    var i;
    for(i=0; i<entrada.length; i++){
        entrada_aux[i] = entrada[i]; 
    }
    console.log(entrada_aux.sort());
}
sortArray('Entrada')

//Exercício 4
function copyArray(entrada){
    copia = [];
    var i;
    for (i=0; i<entrada.length; i++){
        copia[i] = entrada[i];
    }
    return copia;
}

