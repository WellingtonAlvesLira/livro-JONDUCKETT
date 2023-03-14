/*O que é Variável ? Um lugar guardado para armazenamento de dados temporários*/

//No javaScript, você não precisa específicar o tipo de dado, e sim a palavra chave 'VAR';

//Declaração de uma variável : 
var quantidade_pessoas;
//Atribuição de valores para a variável;
quantidade_pessoas = 10;

//Tipos de dados : 
//Numérico
var inteiro = 10;
var float = 4.5;

//Booleano
var tem_produto = true;

//EXEMPLO
//DECLARANDO AS VARIÁVEIS E ATRIBUINDO VALORES À ELAS;
var preco;
var quantidade;
var total;

preco = 5;
quantidade = 14;
total = preco * quantidade;

//A variável custo, contém armazenada o caminho do nó custo localizado no DOM; 
var custo = document.getElementById('custo');
/*A varivável custo está sendo atrelada junto ao método TextContent para subistiuir o valor armazenado na 
variável total*/
custo.textContent = 'TOTAL$ ' + total;







