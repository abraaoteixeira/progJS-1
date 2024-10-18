function exibirSoma(x, y)
{
    console.log(x+y);
}

exibirSoma(1,4)

function exibirSomarComDefault(x=0, y=0)
{
    console.log(x+y);
}

exibirSomarComDefault(5)

//usar retornos para função!
function somar(x=0, y=0)
{
    return x+y
}

console.log(typeof somar);
console.log(somar(20,5)); //executa o codigo
console.log(somar.toString()); //imprime o codigo