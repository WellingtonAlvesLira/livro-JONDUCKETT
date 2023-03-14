
let dia = new Date();
let tempo_atual = dia.getHours();
var msg_saudacao = '';

console.log(tempo_atual)


if(tempo_atual >= 6 || tempo_atual <= 12){
    msg_saudacao = "Bom dia !!";
}
else if(tempo_atual >= 12 || tempo_atual < 18 ){
    msg_saudacao = "Boa tarde !!";
}
else if(tempo_atual >= 18 || tempo_atual <= 6){
    msg_saudacao = 'Boa noite !!';
}
else{
    msg_saudacao = 'Bem-Vindo !!'
}
 
 document.write(msg_saudacao);

 //O Objeto 'DOCUMENT' tem vários métodos e propriedades.
 /* O Método 'WRITE()' do Objeto 'DOCUMENT' permite que novo conteúdo seja escrito na página onde
 está o elemento '<script>'
 */

 