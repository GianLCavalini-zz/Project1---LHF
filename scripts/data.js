// Neste arquivo é o 'banco de dados' do meu projeto, aonde se encontra todods os dados das perguntas do game.


const questions = [ 
        {// Question 1
    
        conceptDescription:" No mundo da programação 'VARIÁVEL' é uma espécie de local aonde armazenamos informações. Essas variáveis são rotuladas por um nome, para que     quando formos acessar essas informações, possamos encontra-las mais rapido.",

        order:"Selecione a opção correta e ajude Pingo a entender o que é uma variável.",
  
        options: [
        {
          opt: "VARIÁVEL = Linguagem de programação aonde usamos para guardar dados, inforamações e etc!",
          explanation: "Poxa vida, VARIÁVEL não é uma linguagem de programação mas toda linguagem tem variável!"
        },
        { 
          opt: "VARIÁVEL = Um 'local' aonde guardamos algo (dados,números, informações, etc), e que quando referenciado por um nome facilita encontrarmos o que procuramos.", 
          explanation: "Perfeito, você entendeu o conceito de VARIÁVEL!!" 
        },
        {
          opt:"VARIÁVEL = Comando na programação usado para armazenar números e informações apenas.",
          explanation: "Quase.. Em uma variável você pode receber varios tipos de valores diferentes, mas esse tema vamos ver no próximo passo."
        }
      ],
      numeroCorreto: 2,
    correctAnwser:{ 
          opt: "VARIÁVEL = Um 'local' aonde guardamos algo (dados,números, informações, etc), e que quando referenciado por um nome facilita encontrarmos o que procuramos.", 
          explanation: "Perfeito, você entendeu o conceito de VARIÁVEL!!" 
        }
      },

    
        {//Question 2
        conceptDescription:" Ja que sabemos que podemos guardar informações dentro de uma variável, agora precisamos entender que tipo de informações são essas(ou seja o tipo de VALORES). Em JavaScript temos dois grupos de valores (PRIMITIVOS E NÃO-PRIMITIVOS), vamos ajudar pingo a entender somente o primeiro grupo (PRIMITIVO). Uma variável do tipo Primitivo pode receber como valor: 'String', números e Boolenos (verdadeiro ou falso)",

        order:"Pingo guardou a chave da porta da frente dentro de uma gaveta na cozinha de sua casa. Selecione a opção correta e ajude pingo a encontrar chave e chegar na Ironhack. DICA: const gaveta = nome do local aonde a chave se encontra && chave da porta da frente = 'String' (nao se preocupe com CONST, você vai entender logo logo)",
    
        
        options: [
          {
              opt: "const gaveta = ('chave da porta da frente')",
              explanation: "CHAMAA!! Agora pingo sabe os tipos primitivos de valores que uma variável pode receber e consegue sair de casa!!"
          },
          { 
              opt: "const cozinha = ('chave da porta da frente')", 
              explanation: "poxa vida..cozinha não é o nome da nossa variável, tente ler o enununciado com mais calma, eu confio em você!" 
          },
          {
              opt:"let gaveta = ('chave da porta da frente')",
              explanation: "Foi por pouco, mas nossa variável é uma CONST e não uma LET. Bora ver a diferença das duas?"
          }
        ],

        numeroCorreto: 1,

        correctAnwser: {
            opt: "const gaveta = ('chave da porta da frente')",
            explanation: "CHAMAA!! Agora pingo sabe os tipos primitivos de valores que uma variável pode receber e consegue sair de casa!!"
          }
        },
      
  

          {//Question 3
          conceptDescription:" Na linguagem de programção JavaScript ao declarar uma variável, ou seja criar um local aonde vamos armazenar algum tipo de dado, podemos usar três keywords (plavras-chaves) para fazer isso: Let, Const e Var. Vamos nos concentrar somente nas duas primeiras. LET é uma 'keyword' para declarar uma variável que você PODE alterar seu valor no futuro, ja a CONST é uma forma de declarar uma variável aonde você não consegue alterar seu valor, uma vez que ja foi definido.",
        
           order:"Hoje é o primeiro dia de curso Web Dev de pingo, mas ele precisa levar o material correto. Pingo precisa levar: sua chave da porta da frente (variável const), pois ele nao quer ficar pra fora quando voltar da IronHack, seu notebook( uma variável let declarada com o nome dell recebendo valor de true(verdadeiro)) e seu estojo( uma variável let com nome estojo recebendo o numero: 5).Encontre a opção certa e ajuda pingo a chegar bem preparado para a aula de hoje ",
         
           
           options: [
             {
                 opt:"[let cozinha = 'chave da porta da frente' , const dell = true, let estojo = 5];",
                 explanation: "NÃO! Preste atenção a keyword usada ao declarar as variáveis "
             },
             { 
                 opt:"[const cozinha = 'chave da porta da frente' , let dell = false, let estojo = 5];",
                 explanation: "Será que um notebook dell é falso?" 
             },
             {
                 opt:"[const cozinha = 'chave da porta da frente' , let dell = true, let estojo = 5];",
                 explanation: "PERFEITO MEU AMIGO! Pingo e você estão prontos para o primeiro dia de aula na Ironhack!"
             }
           ],
           numeroCorreto: 3,

             correctAnwser: {
              opt:"[const cozinha = 'chave da porta da frente' , let dell = true, let estojo = 5];",
              explanation: "PERFEITO MEU AMIGO! Pingo e você estão prontos para o primeiro dia de aula na Ironhack!"
             }
             ,}
        ]

