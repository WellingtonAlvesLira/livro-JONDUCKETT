/*Um array é um tipo de variável especial. Ele não armazena somente um único valor, mas uma lista de valores. */

/*Você deve considerar o uso de um array sempre que estiver
trabalhando com uma LISTA ou CONJUNTO de valores que estão relacionados*/

/*Arrays são especialmente úteis quando você não sabe quantos itens na lista conterá.
ao invés de criar um número suficiente de variáveis, USA-SE ARRAY. */

//CRIANDO UM ARRAY
var tipo_cores = [];
tipo_cores = ["Amarelo ", 
"Azul ", 
"Branco", 
" Rosa"];

//ACESSANDO UM ÍNDICE DO ARRAY
tipo_cores

document.getElementById("imprimindo_array").textContent = tipo_cores;
document.getElementById("acessando_array").textContent = tipo_cores[2];
document.getElementById("atualizando_array").textContent = tipo_cores[1] = "Verde";
