//Exercicio de Laços



/*while (i < 10) {

    console.log(`O ciclista ja completou ${i} voltas.`)

    i++
}
*/
/*
for (let i = 0; i <= 10; i++) {
    console.log(`O ciclista ja completou ${i} voltas.`)
}
*/
/*
const num = [14, 67, 89, 15, 23]

for(let i = 0; i < 5; i++) {
    const elemento = num[i]
    console.log(elemento)
}
*/
/*
const num = [14, 67, 89, 15, 23]
for (let numero of num) {
    console.log(numero)
}
*/
//Exercicio 1
/*
let num = 0

while (num <= 10) { //Enquanto num for menor ou igual a 10 
    if(num % 2 === 0){ // Verifica se o numero é par
        console.log(num)
    }
    num++;
}
*/

//Exercico 2

let tempo = 10
while (tempo >= 0) {
    if(tempo === 0){
        console.log("Booooom!!!")
    }else if(tempo % 2 === 0) {
        console.log("Tic")
    }else {
        console.log("Tac")
    }

    tempo --;

}

