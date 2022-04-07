
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
            console.log("Poxa você errou!")
        } return false;
        
    }


    
}


