// Este arquivo é aonde vou usar DOM para fazer meus outros arquivos js conversarem entre si e dar vida ao projeto.


// Elementos da primeira questão:
const instructionOne = document.getElementById('instructions');
const order1 = document.getElementById('ordens');
const opcao1 = document.getElementById('opt1');
const opcao2 = document.getElementById('opt2');
const opcao3 = document.getElementById('opt3');


instructionOne.innerText = questions[0].conceptDescription;
order1.innerText = questions[0].order;
opcao1.innerText = questions[0].options1[0].opt1;
opcao2.innerText = questions[0].options1[1].opt2;
opcao3.innerText = questions[0].options1[2].opt3;













/* 

//console.log("Meu primeiro projeto começa aqui! :) ")



//Elementos da primeira questão: Descrição e ordem:

const description1 = questions[0].conceptDescription1;
const firstOrder = questions[0].order1;

// Opção e explicação da primeira alternativa:
const firstAlternativeOptionOne = questions[0].options1[0].opt1;
const firstExplanationAltOneOptOne = questions[0].options1[0].explanation1;

/* //Opção e explicação da segunda alternativa:
const secondAlternativeOptionOne = questions[0].options1[1].opt2;
const secondExplanationAltTwoOptOne = questions[0].options1[1].explanation2;

//Opção e explicação da terceira alternativa:
const thirdAlternativeOptionOne = questions[0].options1[2].opt3;
const thirdExplanationAltThreeOptOne = questions[0].options1[2].explanation3;

//Alternativa Correta
const correctAlternative1 = questions[0].correctAnwser1;




//Elementos da segunda questão: Descrição e ordem
 const description2 = questions[0].conceptDescription2;
 const secondOrder = questions[0].order2;

 //Opção e explicação da primeira alternativa
 const firstAlternativeOptionTwo = questions[0].options2[0].opt1;
 const firstExplanationAltOneOpttwo = questions[0].options2[0].explanation1;

/*  //Opção e explicação da segunda alternativa:
 const secondAlternativeOptiontwo = questions[0].options2[1].opt2;
 const secondExplanationAltTwoOptTwo = questions[0].options2[1].explanation2;
 */ 

 