/*Você foi contratado para desenvolver um sistema de reservas de voos para uma companhia aérea. 
O sistema deve ser capaz de realizar as seguintes operações:

Cadastro de Voos:

Permitir que a companhia aérea cadastre voos informando o número do voo, origem, destino, data e 
horário de partida, número de assentos disponíveis e preço por assento.
*/


/*
Reserva de Assentos:

Permitir que os passageiros pesquisem voos disponíveis informando origem, destino e data de partida.
Exibir uma lista de voos disponíveis que correspondam aos critérios de pesquisa.
Permitir que os passageiros escolham um voo e façam uma reserva, informando o número do voo e a 
quantidade de assentos desejados.
Verificar se há assentos disponíveis no voo escolhido. Se não houver assentos suficientes, informar 
ao passageiro que a reserva não pode ser concluída.
Calcular o preço total da reserva com base no número de assentos escolhidos e no preço por assento.
Armazenar a reserva no sistema, atualizando o número de assentos disponíveis no voo.

Cancelamento de Reservas:

Permitir que os passageiros cancelem suas reservas informando o número do voo e o número da reserva.
Liberar os assentos reservados, tornando-os disponíveis novamente.
Atualizar o sistema de reservas para refletir o cancelamento.
Relatórios:

Gerar relatórios que mostrem o número de assentos disponíveis em cada voo, bem como a receita total 
da companhia aérea com base nas reservas realizadas.

Segurança:

Garantir que o sistema seja seguro, evitando vulnerabilidades como reservas duplicadas, cancelamentos 
não autorizados e acesso não autorizado aos dados.
Você deve implementar este sistema de reservas de voos em JavaScript. Certifique-se de que o sistema 
seja robusto e seguro, e que todas as funcionalidades sejam adequadamente testadas.*/
/*
let voos = []

let banco = [ Voo {
    numeroVoo = 0,
    origem = 0,
    destino = 0,
    data = 0,
    hora = 0,
    assentosLivre = 0,
    preço = 0
    } 
]

linha = prompt("Voo:")
if (banco [linha] === 0 )
banco [linha] 

console.log(novoVoo);
*/

//Exercicio javascript
let voos = [];

function cadastrarVoo(voo, origem, destino, data, hora, assentosLivres, preco) {
    voos.push({
        voo: voo,
        origem: origem,
        destino: destino,
        data: data,
        hora: hora,
        assentosLivres: assentosLivres,
        preco: preco
    });
}

// Exemplo de uso:
cadastrarVoo("V002", "Porto Alegre", "Balneario Camburiu", "2023-09-15", "08:00", 150, 685.75);

console.log(voos)