// Neste arquivo é o 'banco de dados' do meu projeto, aonde se encontra todods os dados das perguntas do game.


const questions = [ {
  

        // Question 1
    
          conceptDescription1:" No mundo da programação 'VARIÁVEL' é uma espécie de local aonde armazenamos informações. Essas variáveis são rotuladas por um nome, para que     quando formos acessar essas informações, possamos encontra-las mais rapido.",

          order1:"Selecione a opção correta e ajuda Pingo a entender o que é uma variavel.",
    

    
            options: [
        {
            opt1: "VARIÁVEL = Linguagem de programação aonde usamos para guardar dados, inforamações e etc!",
            explanation1: "Poxa vida, VARIÁVEL não é uma linguagem de programação..mas toda linguagem tem variavel!"
        },
        { 
            opt2: "VARIÁVEL = Um 'local' aonde guardamos algo(dados,números, informações, etc), e que quando referenciado por um nome facilita encontrarmos o que procuramos", 
            explanation2: "Perfeito, você entendeu o conceito de VARIÁVEL!!" 
        },
        {
            opt3:"VARIÁVEL = Comando na programação usado para armazenar números e informações apenas",
            explanation3: "Quase.. Em uma variavel você pode receber varios tipos de informações com valores diferentes, mas esse tema vamos ver no proximo passo."
        }
      ],
        correctAnwser: 1,
    
        //Question 2

    

     
        conceptDescription1:" Ja que sabemos que podemos guardar informações dentro de uma variavel, agora precisamos entender que tipo de informações são essas(ou seja o tipo de VALORES). Em JavaScript temos dois grupos de valores(PRIMITIVOS E NÃO-PRIMITIVOS), vamos ajudar pingo a entender somente o primeiro grupo (PRIMITIVO). Uma variavel do tipo Primitivo pode receber como valor: 'String', números e Boolenos (verdadeiro ou falso)",

        order2:"Pingo guardou a chave da porta da frente dentro de uma gaveta na cozinha de sua casa. Selecione a opção correta e ajude pingo a encontrar chave e chegar na Ironhack. DICA: const gaveta = nome do local aonde a chave se encontra && chave da porta da frente = 'String' (nao se preocupe com CONST, você vai entender logo logo)",
    
        
        options: [
          {
              opt1: "const gaveta = ('chave da porta da frente')",
              explanation1: "CHAMAA!! Agora pingo sabe os tipos primitivos de valores que uma variável pode receber e consegue sair de casa!!"
          },
          { 
              opt2: "const cozinha = ('chave da porta da frente')", 
              explanation2: "poxa vida..cozinha não é o nome da nossa variavel, tente ler o enununciado com mais calma, eu confio em você!" 
          },
          {
              opt3:"let gaveta = ('chave da porta da frente')",
              explanation3: "Foi por pouco, mas nossa variavel é uma CONST e não uma LET. Bora ver a diferença das duas?"
          }
        ],
          correctAnwser: 0,
      
    

        //Question 3
         
        
           conceptDescription3:" Na linguagem de programção JavaScript ao declarar uma variavel, ou seja criar um local aonde vamos armazenar algum tipo de dado, podemos usar três keywords (plavras-chaves) para fazer isso: Let, Const e Var. Vamos nos concentrar somente nas duas primeiras. LET é uma 'keyword' para declarar uma variavel que você PODE alterar seu valor no futuro, ja a CONST é uma forma de declarar uma variavel aonde você não consegue alterar seu valor, uma vez que ja foi definido.",
        
           order3:"Hoje é o primeiro dia de curso Web Dev de pingo, mas ele precisa levar o material correto. Pingo precisa levar: sua chave da porta da frente (variavel const), pois ele nao quer ficar pra fora quando voltar da IronHack, seu notebook( uma variavel let declarada com o nome dell recebendo valor de true(verdadeiro)) e seu estojo( uma variavel let com nome estojo recebendo o numero: 5).Encontre a opção certa e ajuda pingo a chegar bem preparado para a aula  de hoje ",
         
           
           options: [
             {
                 opt1:"[let cozinha = 'chave da porta da frente' , const dell = true, let estojo = 5];",
                 explanation1: "NÃO! Preste atenção a keyword usada ao declarar as variaveis "
             },
             { 
                 opt2:"[const cozinha = 'chave da porta da frente' , let dell = false, let estojo = 5];",
                 explanation2: "Será que um notebook dell é falso?" 
             },
             {
                 opt3:"[const cozinha = 'chave da porta da frente' , let dell = true, let estojo = 5];",
                 explanation3: "PERFEITO MEU AMIGO! Pingo e você estão prontos para ao primeiro dia de aula na Ironhack!"
             }
           ],
             correctAnwser: 2,
        }]
  