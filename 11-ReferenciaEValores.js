//JS (e diversas linguagens) trabalha com 
const a = {id:23}
console.log('a:', a)
const b = a
console.log('b: ', b)
//obs: abaixo seria errado, pois é uma atribuição
//b = {id:19}
// para altera um valor, acessa-se diretamente o atributo do objeto
b.id = 19
// e agora o que imprimirá?
console.log('a.id, depois de alterar b.id:', a.id)
/*imprimiu o valor de b em a. Isso ocore porque ao dizer  */

const imprimirSubtracao = function (a,b)
{
    console.log(a - b)
}
imprimirSubtracao(5,2)

const subtracao = (a,b) =>
{
    return a-b
}
console.log('Arrow Function subtração', subtracao(7,8));

const multiplicacao = (x,y) => x*y;
multiplicacao(3,4);

const saudacao = texto => console.log(texto);
saudacao('Por hoje é só pessoal')

const maioridade2 = idade =>
console.log(idade>=18?'Pode dirigir':
'Espere pela maioridade'); 
maioridade2(19)
