// Este arquivo é aonde vou usar DOM para fazer meus outros arquivos js conversarem entre si e dar vida ao projeto.

const quiz = new Game(questions);



//Botões
const botoes = document.getElementsByClassName('btn');
const btnNextQuestion = document.getElementById('btn-next-alternative');
const btnModal = document.getElementById('modalBtn');



// Elementos usados via DOM
const instructionOne = document.getElementById('instructions');
const order1 = document.getElementById('ordens');
const opcao1 = document.getElementById('btnOpt1');
const opcao2 = document.getElementById('btnOpt2');
const opcao3 = document.getElementById('btnOpt3');
const information = document.getElementById('info');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const respostaCerta = quiz.imprimirPergunta().correctAnwser;





// Função que imprime na tela todas as informações para o jogador
function currentQuenstion(){

instructionOne.innerText = quiz.imprimirPergunta().conceptDescription;
order1.innerText = quiz.imprimirPergunta().order;
opcao1.innerText = quiz.imprimirPergunta().options[0].opt;
opcao2.innerText = quiz.imprimirPergunta().options[1].opt;
opcao3.innerText = quiz.imprimirPergunta().options[2].opt;
}

currentQuenstion();


// Evento do botão próxima pergunta e suas funções
btnNextQuestion.addEventListener('click', () => {

    btnNextQuestion.classList.add("hidden");
    quiz.proximaPergunta();
    currentQuenstion();
    information.innerText = "";

    
})



//Loop For indexado para os botões
for(let i = 0; i < 3; i++) {
    console.log("essa é a resposta do " ,i);
    botoes[i].addEventListener('click', () => {
        botoes[i].setAttribute("value", i)
        

        const acertou = quiz.retornoRepostaCerta(botoes[i].value)
        

        if(acertou === true && i <= 1) {
            information.innerText = quiz.imprimirPergunta().correctAnwser.explanation;
            btnNextQuestion.classList.remove("hidden");
         /*    if(botoes[i] === 3) {
                modal.classList.remove("hidden");
            } */

            

        } else if (acertou === true && i === 2){
            information.innerText = quiz.imprimirPergunta().correctAnwser.explanation;
            modal.classList.remove("hidden");
            modal.classList.add("show");

        }
         else {

            information.innerText = quiz.imprimirPergunta().options[i].explanation;
        }  if(botoes[i] === 3) {
            modal.classList.remove("hidden");
        }
    })


}



// Função apra abrir o modal
function openModal(){
    btnModal.onclick = function() {
        modal.style.display = "block";
    }


}
openModal();


//Função para fechar o modal no botão
function closeModalBySpanButton(){
    span.onclick = function() {
        modal.style.display = "none";
    }
}
closeModalBySpanButton();



// Função para fechar o modal em cliando em qualquer lugar da tela
function closeModalClickanywhere(){
    window.onclick = function(click) {
        if(click.target == modal) {
            modal.style.display = "none";
        }
    }
}
closeModalClickanywhere();



