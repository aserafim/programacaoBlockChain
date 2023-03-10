console.log("Testando script JS...");

//Exercício 1
//Primeiro modo
console.log("Exercicio 1 - Modo 1");
console.log("#");
console.log("##");
console.log("###");
console.log("####");
console.log("#####");
console.log("######");
console.log("#######");

//Segundo modo
//pula linha
console.log("\n");
console.log("Exercício 1 - Modo 2");
let text = "#";
let text2 = "#";
for(var j=0; j<7; j++){
    console.log(text);
    text = text.concat(text2);
}

//Exercício 2
console.log("\n");
console.log("Exercício 2");
for(var i=1; i<=100; i++){    
    if(i%3==0){
        if(i%5==0){
            console.log("Fizz");
        }else console.log("FizzBuzz");
    } else{
        if(i%5==0){
            console.log("Buzz");
        } else{console.log(i)}
    }
}

//Exercício 3
console.log("\n");
console.log("Exercício 3 - Modo 1");
var row1 = "# # # #";
var row2 = " # # # # ";
for(var i=0; i<4; i++){
    console.log(row1);
    console.log(row2);
}

//Modo 2
console.log("\n");
console.log("Exercício 3 - Modo 2");

//Constroi o tabuleiro
var black = "#";
var white = " ";
var row1 = "";
var row2 = "";
var size = 16;

//Constroi primeira linha
for(var i=1; i<=size/2; i++){
    row1 = row1.concat(black);
    row1 = row1.concat(white);
}

//Constroi segunda linha
for(var i=1; i<=size/2; i++){
    row2 = row2.concat(white);
    row2 = row2.concat(black);
}

//Imprime o tabuleiro final
for(var i=1; i<=size/2; i++){
    console.log(row1);
    console.log(row2);
}