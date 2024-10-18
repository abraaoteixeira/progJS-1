//JS (e diversas linguagens) trabalha com 
const a = {id:23}
console.log('a:', a)
const b = a
console.log('b: ', b)
//obs: abaixo seria errado, pois é uma atribuição
//b = {id:19}
// para altera um valor, acessa-se diretoamento o atributo do objeto
b.id = 19
// e agora o que imprimirá?
console.log('a.id, depois de alterar b.id:', a.id)
/*imprimiu o valor de b em a. Isso ocore porque ao dizer  */