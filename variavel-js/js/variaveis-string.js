/*O que é Variável ? Um lugar guardado para armazenamento de dados temporários*/

//No javaScript, você não precisa específicar o tipo de dado, e sim a palavra chave 'VAR';

//Declaração de uma variável:
//Nota: Podem ser usadas com aspas simples ou dulpas; 
var nome = "Wellington Alves";

//EXEMPLO

//Declarando as variáveis;
var titulo;
var observacao;
var fonte = '<a href="https://www.google.com/search?q=goo&oq=goo&aqs=chrome..69i57j46i131i199i433i465i512j0i131i433i512l3j69i60l3.649j0j7&sourceid=chrome&ie=UTF-8">Google</a>'

titulo = "Ofertas"
observacao = "Fique por dentro das Ofertas!!!"

var _titulo = document.getElementById('titulo');
    _titulo.textContent = titulo;
var _observacao = document.getElementById('observacao');
    _observacao.textContent =  observacao;
var _fonte = document.getElementById('fonte');
    _fonte.innerHTML = fonte;
/*Este exemplo usa uma propriedade chamada 'INNERHTML', para adicionar 'HTML' à página principal
Em certos casos essa propriedade pode apresentar um risco*/



