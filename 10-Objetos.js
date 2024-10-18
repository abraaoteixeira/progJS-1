//Criação de objetos de forma leitral (sem JSON)
//um par de chaves representa um objeto.
//const prod1 = {}
const produto1 = {}
//diferentemente de Java, novos atributos podem ser criados dinamicamente
produto1.id = 1554
produto1.nome = 'Burguer Classic'
console.log('produto1: ', produto1)
console.log('produto1.entrega: ', produto1.entrega)

//ou assim
const produto2 = 
{
    id: 1555,
    nome: 'Australian Burguer'
}
console.log('produto2: ', produto2)
//pode-se trambém alinhar objetos
const produto3 =
{
        id: 1556,
        nome: 'Italian Burguer',
        acompanhamento:
        {
            salada: 'tomate',
            tempero: 'vinagre'
        }
}
console.log(produto3)
//acessando valores de um objeto
console.log('Exibindo o id', produto3['id'])

let campo = 'id'
console.log(produto3[campo])

const estudante1 = {
    name: 'Dalila',
    notas: [7.5, 8, 9],
    status: 'aprovada'
}

console.log(estudante1)
console.log('Nota primeiro Trimestre: ', estudante1.notas[0])
console.log('Nota segundo trimestre: ', estudante1.notas[1])
console.log('Nota segundo trimestre: ', estudante1.notas[2])
