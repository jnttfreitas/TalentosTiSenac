//EXERCÍCIO 1

/*
VARIÁVEIS

A) Crie uma variável chamada anoDeNascimento e atribua a ela o ano em que você nasceu.
B )Crie uma variável chamada anoAtual e atribua a ela o ano atual.
C) Crie uma variável chamada idade e calcule a sua idade subtraindo anoDeNascimento de anoAtual.
D) Exiba a sua idade no console.

let anoNascimento = 1995
let anoAtual = 2023
let idade = anoAtual- anoNascimento

console.log(idade)*/

//EXERCÍCIO 2
/*
OPERADORES ARITMÉTICOS

A) Crie quatro variáveis: numero1, numero2, soma, subtracao, multiplicacao, divisao e modulo.
B) Atribua valores numéricos às variáveis numero1 e numero2.
C) Use os operadores aritméticos para realizar as seguintes operações e atribuir os resultados às variáveis correspondentes:
D) Calcule a soma dos dois números e atribua o resultado à variável soma.
E) Calcule a subtração do numero1 pelo numero2 e atribua o resultado à variável subtracao.
F) Calcule a multiplicação dos dois números e atribua o resultado à variável multiplicacao.
G) Calcule a divisão do numero1 pelo numero2 e atribua o resultado à variável divisao.
H) Calcule o módulo (resto da divisão) do numero1 pelo numero2 e atribua o resultado à variável modulo.
I) Exiba os resultados de todas as operações no console. 

let numUm = 28
let numDois = 12
let soma = numUm + numDois
let subtracao = numUm - numDois
let multiplicacao = numUm * numDois
let divisao = numUm / numDois
let modulo = numUm % numDois

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo) 

*/

//EXERCÍCIO 3
/*
COMPARADORES

A) Crie duas variáveis: numero1 e numero2.
B) Atribua valores numéricos às variáveis numero1 e numero2.
C) Use os operadores de comparação para realizar as seguintes comparações e exibir os resultados no console:
D) Verifique se numero1 é igual estritamente a numero2 e exiba o resultado.
E) Verifique se numero1 é diferente estritamente de numero2 e exiba o resultado.
F) Verifique se numero1 é maior que numero2 e exiba o resultado.
G) Verifique se numero1 é maior ou igual a numero2 e exiba o resultado.
H) Verifique se numero1 é menor que numero2 e exiba o resultado.
I) Verifique se numero1 é menor ou igual a numero2 e exiba o resultado.

let numUm = 28
let numDois = 12
let igual = numUm === numDois
let diferente = numUm !== numDois
let maior = numUm > numDois
let maiorIgual = numUm >= numDois
let menor = numUm < numDois
let menorIgual = numUm <= numDois


console.log(igual)
console.log(diferente)
console.log(maior)
console.log(maiorIgual)
console.log(menor) 
console.log(menorIgual)
*/

//EXERCÍCIO 4
/*
OPERADORES LÓGICOS

A) Crie três variáveis booleanas: temIdadeParaDirigir, temCarteiraDeMotorista e temCarroProprio.
B) Atribua valores true ou false às variáveis para representar a situação de uma pessoa em relação à possibilidade de dirigir.
D) Se a pessoa tiver idade para dirigir e tiver carteira de motorista, qual o resultado?
E) Se a pessoa tiver um carro próprio ou tiver carteira de motorista, qual o resultado?
F) Se pessoa não tiver idade para dirigir ou não tiver carteira de motorista, qual o resultado?


const temIdadeParaDirigir = true
const temCarteiraDeMotorista = true 
const temCarroProprio = false

console.log(temIdadeParaDirigir && temCarteiraDeMotorista)
console.log(!temCarroProprio || temCarteiraDeMotorista)
console.log(!temIdadeParaDirigir || !temCarteiraDeMotorista)
*/



//EXERCÍCIO 5
/*
ARRAYS

A) Crie um array chamado nomes que contenha pelo menos três nomes em formato de strings, incluindo espaços em branco no início e/ou no final, e letras maiúsculas e minúsculas misturadas.

B) Transforme todos os nomes em letras minúsculas usando o método toLowerCase().
C) Transforme todos os nomes em letras maiúsculas usando o método toUpperCase().
D) Remova espaços em branco no início e no final de todos os nomes usando o método trim().
E) Verifique se cada nome contém a letra 'a' usando o método includes(caracteres).
F) Substitua todas as ocorrências da letra 'a' pelo símbolo '#' usando o método replaceAll(chars1, chars2).

let nomes = [" Jonathan ", " Guilherme ", " Gustavo "]

console.log(nomes[0].toLowerCase())
console.log(nomes[1].toLowerCase())
console.log(nomes[2].toLowerCase())
console.log(nomes[0].toUpperCase())
console.log(nomes[1].toUpperCase())
console.log(nomes[2].toUpperCase())
console.log(nomes[0].trim())
console.log(nomes[1].trim())
console.log(nomes[2].trim())
console.log(nomes[0].includes("a"))
console.log(nomes[1].includes("a"))
console.log(nomes[2].includes("a"))
console.log(nomes[0].replaceAll("a", "#"))
console.log(nomes[1].replaceAll("a", "#")) 
console.log(nomes[2].replaceAll("a", "#"))
*/

//EXERCÍCIO 6
/*
STRINGS

A) Crie três variáveis: nome, idade e cidade.
B) Atribua valores a essas variáveis com seu nome, idade e cidade.
C) Crie uma variável chamada mensagem e utilize uma template string para criar uma mensagem personalizada que inclua seu nome, idade e cidade. A mensagem deve seguir o seguinte formato: "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]."
D) Exiba a mensagem no console.
E) Refaça o item C utilizando o método de concatenação.
F) Exiba a mensagem no console.

const nome = "Jonathan"
const idade = 27
const cidade = "São Leopoldo"

const mensagem = (`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

console.log(mensagem)

const mensagemConca = "Olá, meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + "."

console.log(mensagemConca)
*/


//EXERCÍCIO 7
/*
OBJETOS

A) Crie um objeto chamado aluno com as seguintes propriedades:
nome (string): O nome do aluno.
idade (number): A idade do aluno.
curso (string): O curso que o aluno está frequentando.
B) Atribua valores fictícios para essas propriedades do objeto.
C) Exiba as informações do aluno no console, incluindo seu nome, idade e curso.*/
/*
const aluno = {
        nome: "Jonathan",
        idade: 27,
        curso: "JavaScript",
       
}
aluno.notas = []

aluno.notas.push(8.5, 9.5, 7.8)


console.log(aluno)

const mediaNotas = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2])/3

console.log(mediaNotas)

aluno.endereco = {
        pais: "Brasil",
        anoEscola: 3,
        cidade: "São Leopoldo",
}


console.log(aluno)


OBJETOS PARTE 2

A) Crie uma nova propriedade chamada 'notas', um array vazio que será usado para registrar as notas do aluno (para criar um array vazio é só não colocar nada dentro de [])
B) Adicione pelo menos três notas fictícias ao array notas.
C) Calcule a média das notas do aluno (para calcular a média, fazemos a soma das notas divida
pelo quantidade de itens no array)
D) Exiba as informações do aluno no console, incluindo seu nome, idade, curso, notas e média.*/





/*
OBJETOS PARTE 3

A) Atualize o objeto aluno adicionando uma nova propriedade chamada endereco, que será um objeto com as seguintes propriedades:
B) país (string): O nome do país onde o aluno mora
C) anoNaEscola: O ano (ou série) em que o aluno está na escola
D) cidade (string): A cidade onde o aluno mora.
e) Exiba as informações completas do aluno, incluindo seu nome, idade, curso e todas as propriedades do objeto endereco (rua, número, cidade e CEP) no console.
*/
