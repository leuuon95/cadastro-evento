//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
//Listar participantes e palestrantes por evento.

const rs = require ("readline-sync");
let nome = rs.question ("Informe seu nome: ");
let idade = rs.question ("Informe sua idade: ");
let dataevento = rs.question ("Informe data no modelo dd/mm/aaaa: ");
let Qtdparticipantes = rs.question ("informe numero do ingresso: ");

// idade:

if (idade =>18){
    console.log ("Permitir cadastro");
} else {
    console.log ("acesso negado");
}

// data do evento:

if (dataevento < 22/06/2022){
    console.log ("data indisponível");
} else {
    console.log ("data disponível");
}

// aréa de ingressos:

if (Qtdparticipantes <= 100){
    console.log ("disponível");
} else {
    console.log ("esgotado");
}

// participantes:

var c = 1;
while (c <=100){
    console.log ("nome " + c++);
}

// palestrantes:

var c = 1;
while (c <=3){
    console.log ("nome " + c++);
}