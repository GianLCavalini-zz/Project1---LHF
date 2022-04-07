// Neste arquivo é aonde funciona a lógica do Jogo LHF


class Game {
    constructor(questions) {

        this.todasAsPerguntas = [...questions];
        this.perguntaAtual = 0;        
        this.resposta = this.todasAsPerguntas;
        console.log(this.resposta)
        
    }



    imprimirPergunta(){

    return this.todasAsPerguntas[this.perguntaAtual];

    }

    proximaPergunta(){

        this.perguntaAtual++;

           
}

    retornoRepostaCerta(resposta){
        console.log(this.todasAsPerguntas[this.perguntaAtual].numeroCorreto);

                
       if((++resposta) == this.todasAsPerguntas[this.perguntaAtual].numeroCorreto ){
            return true;
        } else {
            console.log(`Poxa você errou! ${quiz.correctAnwser}`)
        } return false;
        

        
        
    }


    // metodo game over

    



   // metodo verificar primeira questão
   
   // metodo verificar segunda questão

   // verificar terceira questão


}


