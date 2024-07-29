const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");

const perguntas = [
    {
        enunciado:"Todos os lugares do mundo tem acesso a cuidados para a saúde?",
        alternativas:[
           "pois em cidades pequenas normalmente tem menos acesso aos medicamentos e atendimentos necessários.",
           "a tribo entende que a reprodução é necessario e nao deve ser contida.",
            
        ]
    },
]
const perguntas = [
    {
        enunciado:"Usar roupas enfeitadas na festa junina é necessário?",
        alternativas:[
            "Depende da festa e oque ela esta pedindo como traje.",
            "a maioria das  festas é sim necessário ir com roupas enfeitadas",
        ]
    }
]
const perguntas = [
    {
        enunciado:"Todos os lixos recicláveis devem ser reciclados corretamente?",
        alternativas:[
            "Sim, para ter um meio ambiente mais limpo.",
            "se for reciclável devemos sim reciclar para ajudar o lixeiros na coleta.",
        ]
    }
];

let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas [0].enunciado;
}

 function  mostraPerguntas(){
    if(atual >=perguntas.length){
        mostraResultado();
        return;
    }
 }
