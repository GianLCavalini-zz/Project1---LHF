// Este arquivo é aonde vou usar DOM para fazer meus outros arquivos js conversarem entre si e dar vida ao projeto.

const quiz = new Game()





// Elementos da primeira questão:
const instructionOne = document.getElementById('instructions');
const order1 = document.getElementById('ordens');
const opcao1 = document.getElementById('btnOpt1');
const opcao2 = document.getElementById('btnOpt2');
const opcao3 = document.getElementById('btnOpt3');
const respostaCerta = document.getElementById('btnOpt2');
const bntOptionOne = document.getElementById('btnOpt1');
const bntOptionTwo = document.getElementById('btnOpt2');
const bntOptionThree = document.getElementById('btnOpt3');
const btnNextQuestion = document.getElementById('btn-next-alternative');



// Primeira alternativa
instructionOne.innerText = quiz.imprimirPergunta().conceptDescription;
order1.innerText = quiz.imprimirPergunta().order;
opcao1.innerText = quiz.imprimirPergunta().options[0].opt1;
opcao2.innerText = quiz.imprimirPergunta().options[1].opt2;
opcao3.innerText = quiz.imprimirPergunta().options[2].opt3;

 
bntOptionOne.addEventListener('click', () => {
    console.log(bntOptionOne.innerText)
if(bntOptionOne === respostaCerta){
    alert(quiz.imprimirPergunta().options[0].explanation1)
    } else {
        alert(quiz.imprimirPergunta().options[0].explanation1)
    }

})


bntOptionTwo.addEventListener('click', () => {
    console.log(bntOptionTwo.innerText)
 if(bntOptionTwo === respostaCerta){
        alert(quiz.imprimirPergunta().options[1].explanation2)
       } else {
            alert(quiz.imprimirPergunta().options[1].explanation2)
        } 
})
 
bntOptionThree.addEventListener('click', () => {
    console.log(bntOptionThree.innerText)
    if(bntOptionThree === respostaCerta){
        alert(quiz.imprimirPergunta().options[2].explanation3)
       } else {
            alert(quiz.imprimirPergunta().options[2].explanation3)
        } 
})

btnNextQuestion.addEventListener('click', () => {
   proximaPergunta();
})  
