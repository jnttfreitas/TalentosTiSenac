/*

let num1 = 1
let num2 = 2


if (num1 > num2) {
        console.log(`${num1} é maior que o ${num2}`)   
} else if (num1 < num2){
        console.log(`${num1} é menor que o ${num2}`)  
} else {
        console.log(`${num1} é igual ao ${num2}`) 
}
*/
/*
let pokemon = "Charmander"

if (pokemon === "Bulbasauro") {
        console.log(`Seu Pokémon ${pokemon} é do tipo Planta e Veneno.`)
} else if (pokemon === "Charmander") {
        console.log(`Seu Pokémon ${pokemon} é do tipo Fogo.`)
} else {
        console.log(`Seu Pokémon ${pokemon} é do tipo Água.`)
}


const pokemon = "Charmander"

switch (pokemon) {
        case "Bulbasauro":
                console.log(`Seu Pokémon ${pokemon} é do tipo Planta e Veneno.`)
        break
        case "Charmander":
                console.log(`Seu Pokémon ${pokemon} é do tipo Fogo.`)
        break
        default:
                console.log(`Seu Pokémon ${pokemon} é do tipo Água.`)
        break        
}
*/
/*
const concluiuEnsinoMedio = "Sim"
const maioridade = 27 >= 18
const cursandoSuperior = "Sim"


if (concluiuEnsinoMedio === "Sim" && maioridade && cursandoSuperior === "Não") {
    console.log("Você está Apto a Cursar Faculdade!")
}else {
    console.log("Você nao esta Apto a Cursar Faculdade!")
}*/

const concluiuEnsinoMedio = prompt("Você já concluiu o ensino médio?")
const idade = prompt("Digite sua idade:") 
const maiorIdade = Number(idade) >= 18
const cursandoSuperior = prompt("Você ja cursa o ensino superior?")
/*

if (concluiuEnsinoMedio === "Sim" && maiorIdade && cursandoSuperior === "Não") {
    console.log("Você está Apto a Cursar Faculdade!")
}else {
    console.log("Você nao esta Apto a Cursar Faculdade!")
}*/

function verificaRequisitos(concluiuEnsinoMedio, maiorIdade, cursandoSuperior) {
    if (concluiuEnsinoMedio === "Sim" && maiorIdade && cursandoSuperior === "Não") {
        console.log("Você está Apto a Cursar Faculdade!")
    }else {
        console.log("Você nao esta Apto a Cursar Faculdade!")
    }

}
 
verificaRequisitos(concluiuEnsinoMedio, maiorIdade, cursandoSuperior)