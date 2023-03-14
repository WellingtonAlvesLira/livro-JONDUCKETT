//O QUE É UMA FUNÇÃO ?
/*Funções permitem agrupar uma série de instrunções para realizar uma tarefa específica
Se diferentes partes de um script repetirem a mesma tarefa, você pode reutilizar a função, chamando-a
Ao invés de repetir toda a base do código.
*/

//Um exemplo de uma função para atualizar uma menssagem;
var msg = "<h1>Este site contem um exemplo utilizando funcao basica!</h1>"

function atualizaMenssagem() {
    var _menssagem = document.getElementById('menssagem');
    _menssagem.innerHTML = msg;
}

//chamando a função para funcionar no browser;
atualizaMenssagem();

/*Funções podem RETORNAR MAIS DE UM VALOR USANDO UM ARRAY.
Por exemplo, esta função calcula a área e o volume de uma caixa*/
var altura = 3;
var largura = 2;
var profundidade = 3;

function obterTamanho() {
    var area = altura * largura;
    var volume = area * profundidade;
    //armazenando os dois calculos dentro de um array chamado tamanho;

    var tamanho = [area, volume];

    if (tamanho[0]) {

        document.getElementById('resultado').textContent = tamanho[0];

    } if (tamanho[1]) {
        document.getElementById('resultado2').textContent = tamanho[1];

    }

}

obterTamanho(altura, largura, profundidade);