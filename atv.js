// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

// Exemplo de entrada:
// 72
// Exemplo de saída:
// GC$ 50,00 -> 1
// GC$ 10,00 -> 2
// GC$ 5,00 -> 0
// GC$ 1,00 -> 2

// Este desafio será realizado durante a aula com o Mentor e a resolução
// deverá ser postada na Class até o horário estipulado da tarefa na
// plataforma. Crie um arquivo compactado contendo os arquivos com 
// resolução do desafio e realize o upload no post da atividade no Class.

let valor = parseInt(prompt('Digite um valor de retirada:'));

const notasDisponiveis = {
    50: 0,
    10: 0,
    5: 0,
    1: 0,
}

while (valor > 0){
    valor = parseInt(valor);

    if (valor - 50 >= 0){
        notasDisponiveis[50] += 1;
        valor -= 50;
        continue;
    }

    if (valor - 10 >= 0){
        notasDisponiveis[10] += 1;
        valor -= 10;
        continue;
    }

    if (valor - 5 >= 0){
        notasDisponiveis[5] += 1;
        valor -= 5;
        continue;
    }

    if (valor - 1 >= 0){
        notasDisponiveis[1] += 1;
        valor -= 1;
        continue;
    }
}

document.write(`GC$ 50,00 &rsaquo; ${notasDisponiveis [50]}<br><br>`);
document.write(`GC$ 10,00 &rsaquo; ${notasDisponiveis [10]}<br><br>`);
document.write(`GC$ 5,00 &rsaquo; ${notasDisponiveis[5]}<br><br>`);
document.write(`GC$ 1,00 &rsaquo; ${notasDisponiveis[1]}<br><br>`);