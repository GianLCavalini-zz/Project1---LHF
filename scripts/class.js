// Neste arquivo é aonde funciona a lógica do Jogo LHF


class Game {
    constructor(){
        this.todasAsPerguntas = [...questions];
        this.perguntaAtual = 0;

    }

    imprimirPergunta(){

    return this.todasAsPerguntas[this.perguntaAtual];

    }

    proximaPergunta(){

        this.perguntaAtual++;
    }

    // metodo start game  btn

    // metodo game over

    



   // metodo verificar primeira questão
   
   // metodo verificar segunda questão

   // verificar terceira questão


}


/* 
 const orientações = document.getElementById('instructions');

const ordens = document.getElementById('ordens');

const opcoes = document.getElementsByClassName('btn');

const questions = [];


function firstQuestion(currenteQuestion){

    orientações.innerText = questions[currenteQuestion].conceptDescription;
    ordens.innerText = questions[currenteQuestion].order;


    for(let i = 0; i < opcoes.length; i++) ;{
        opcoes[i].innerText = questions[currenteQuestion][`opt${i + 1}`];
    }
} */
 
 

