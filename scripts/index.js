// Este arquivo é aonde vou usar DOM para fazer meus outros arquivos js conversarem entre si e dar vida ao projeto.

const quiz = new Game(questions);



//Botões
const botoes = document.getElementsByClassName('btn');
const btnNextQuestion = document.getElementById('btn-next-alternative');



// Elementos da primeira questão:
const instructionOne = document.getElementById('instructions');
const order1 = document.getElementById('ordens');
const opcao1 = document.getElementById('btnOpt1');
const opcao2 = document.getElementById('btnOpt2');
const opcao3 = document.getElementById('btnOpt3');
const information = document.getElementById('info');

const respostaCerta = quiz.imprimirPergunta().correctAnwser;
console.log(respostaCerta);





//function currentQuenstion(){

instructionOne.innerText = quiz.imprimirPergunta().conceptDescription;
order1.innerText = quiz.imprimirPergunta().order;
opcao1.innerText = quiz.imprimirPergunta().options[0].opt;
opcao2.innerText = quiz.imprimirPergunta().options[1].opt;
opcao3.innerText = quiz.imprimirPergunta().options[2].opt;





/*  
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

 */

btnNextQuestion.addEventListener('click', () => {
    
    
    quiz.proximaPergunta();

instructionOne.innerText = quiz.imprimirPergunta().conceptDescription;
order1.innerText = quiz.imprimirPergunta().order;
opcao1.innerText = quiz.imprimirPergunta().options[0].opt;
opcao2.innerText = quiz.imprimirPergunta().options[1].opt;
opcao3.innerText = quiz.imprimirPergunta().options[2].opt;

information.innerText = "";

      
})   

for(let i = 0; i < 3; i++) {
    botoes[i].addEventListener('click', () => {
        botoes[i].setAttribute("value", i)
        

        const acertou = quiz.retornoRepostaCerta(botoes[i].value)
        

        if(acertou === true) {
            information.innerText = quiz.imprimirPergunta().correctAnwser.explanation;
        } else {
            information.innerText = quiz.imprimirPergunta().options[i].explanation;

            
        }

    })

    console.log(botoes[i].value);


}