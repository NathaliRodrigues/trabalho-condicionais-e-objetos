//Nathali Rodrigues

/*  //exercicio 1
a. ele vai dizer se a Alice pode dirigir ou não

b. quando ela tiver 18 ou mais 
quando ela tiver menos que 18 

//exercicio 2
a . ele vai dizer se o leão é um animal carnivoro 
b .  Leão é um animal carnivoro

//exercico 3
a. ele vai dizer se o numero 10 é maior que 5 ou menor igual a 5 
b.  o numero é maior que 5
o numero é par 

// exercico 4 (escrita de codigo)

function recebeTextoeNumero(nome,idade){
    if (idade >= 18){
    return nome + " voce é maior de idade";
    }else{ 
    return nome + " voce é menor de idade";
}
}
 console.log(recebeTextoeNumero(prompt("Qual seu nome?"), Number(prompt("Qual sua idade?"))))
 
 
 //exercicio 2 escrita de codigo

function turnoUsuario(turno){
    if (turno === "M"){
        return "bom dia"; }
        else if(turno === "T"){
         return "boa tarde";} 
        else if (turno === "N"){
         return "boa noite"; }
        }
console.log(turnoUsuario(prompt("Qual turno voce trabalha? M = matutino, T = tarde, N = noite")));

//exercicio 3 escrita de codigo

let turnos = 
function (turno){
    switch (turno){
    case 'M':
        return 'bom dia'
    break
    case 'T':
        return 'boa tarde'
    break
    case 'N':
        return'boa noite' 
    break
default:
    return 'turno nao encontrado'
}}
console.log(turnos(prompt("Qual turno voce trabalha? M = matutino, T = tarde, N = noite")))

//exercicio 4 escrita de codigo

const aluno = {
    nome: prompt('Qual seu nome'),
    idade: Number(prompt("Qual sua idade?")),
    tipoDeCurso:Boolean (prompt('Voce fez algum curso(true/false):')),
    temBolsa:Boolean( prompt('voce tem bolsa de estudos?'))
}

function candidatar(aluno){
    
    if (aluno.idade < 30){
        if(aluno.tipoDeCurso === true){
            if(aluno.temBolsa === false){

            }
        }
    return 'voce pode se candidatar a uma bolsa de estudos!'

    }else{
         return 'desculpe, voce nao atende os requisitos da bolsa '
        }
    }
console.log(candidatar(aluno)); 

//exercicio 5 escrita de codigo
const produtoobj = {
    nome: "bolsa",
    preco: 200,
    desconto: 10,
    freteGratis:true
}
function precofinal(produto){

    let precoComDesconto = (produto.preco -((produto.preco * produto.desconto)/100));
    if(produto.freteGratis){
        if(produto.desconto > o){
            return precoComDesconto + 'freteGratis'
        }else{
            return 'sem desconto com frete';
        }
    }else{
        if(produto.desconto > 0){
            return 'sem frete com desconto';
        }
        else{
            return 'sem frete sem desconto';}
    }

}
console.log(precofinal(produtoobj));
*/
