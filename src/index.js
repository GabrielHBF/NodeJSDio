class Personagem {

    constructor(NOME,VELOCIDADE,MANOBRABILIDADE,PODER){

    this.NOME = NOME,
    this.VELOCIDADE = VELOCIDADE,
    this.MANOBRABILIDADE = MANOBRABILIDADE,
    this.PODER = PODER,
    this.PONTOS = 0;
    }

}

const player1 = new Personagem("Mario",4,3,3);
const player2 = new Personagem("Luigi",3,4,4);
const player3 = new Personagem("Peach",3,4,2);
const player4 = new Personagem("Yoshi",2,4,3);
const player5 = new Personagem("Bowser",5,2,5);
const player6 = new Personagem("Donkey Kong",2,2,5);


async function rollDice(){

    return Math.floor(Math.random() * 6) + 1;

}

async function getRandonBlock() {

    let random = Math.random();
    let resut 

    switch(true){
        case random < 0.33 :
            resut = "RETA"
            break;
        
        case random < 0.66 :
            resut = "CURVA"
            break;

        default : 
            resut = "CONFRONTO"
            break;
    }

    return resut;
    
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playerRaceEngine(Personagem1, Personagem2) {

    for(let roud = 1; roud <=5; roud++){
            console.log(`🏁 Rodada ${roud}`);

            //Sortear bloco
            let block = await getRandonBlock();
            console.log(`Bloco ${block}`)
        

        //rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de skill
        let TotalTestSkill1 = 0; 
        let TotalTestSkill2 = 0; 

        if(block === "RETA"){
            TotalTestSkill1 = diceResult1 + Personagem1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + Personagem2.VELOCIDADE;

            console.log(`O ${player1.NOME} tem ${Personagem1.VELOCIDADE} e tirou ${diceResult1} no dado e ficou com o valor total de ${TotalTestSkill1}`);
            console.log(`O ${Personagem2.NOME} tem ${Personagem2.VELOCIDADE} e tirou ${diceResult2} no dado e ficou com o valor total de ${TotalTestSkill2}`);

            if (TotalTestSkill1 > TotalTestSkill2){

                console.log(`O vecedor e o ${Personagem1.NOME} e ganha 1 Ponto`);
                Personagem1.PONTOS +=1;
            }else if(TotalTestSkill1 < TotalTestSkill2){
                console.log(`O vencedor e o ${Personagem2.NOME} e ganha 1 Ponto`);
                Personagem1.PONTOS +=1;
            }else{
                Console.log("Ouve um Empate ninguem recebe Pontos")
            }
        }

        if(block === "CURVA"){
            TotalTestSkill1 = diceResult1 + Personagem1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + Personagem2.MANOBRABILIDADE;

            console.log(`O ${Personagem1.NOME} tem ${Personagem1.MANOBRABILIDADE} e tirou ${diceResult1} no dado e ficou com o valor total de ${TotalTestSkill1}`);
            console.log(`O ${Personagem2.NOME} tem ${Personagem2.MANOBRABILIDADE} e tirou ${diceResult2} no dado e ficou com o valor total de ${TotalTestSkill2}`);

            if (TotalTestSkill1 > TotalTestSkill2){

                console.log(`O vencedor e o ${Personagem1.NOME} e ganha 1 Ponto`);
                Personagem1.PONTOS +=1;
            }else if(TotalTestSkill2 > TotalTestSkill1){
                console.log(`O vencedor e o ${Personagem2.NOME} e ganha 1 Ponto`);
                Personagem1.PONTOS +=1;
            }else{
                console.log("Ouve um Empate ninguem recebe Pontos")
            };
        };

        if(block === "CONFRONTO"){
            
         let powerResult1 = diceResult1 + Personagem1.PODER;
         let powerResult2 = diceResult2 + Personagem2.PODER;

      console.log(`${Personagem1.NOME} confrontou com ${Personagem2.NOME}! 🥊`);

      await logRollResult(
        Personagem1.NOME,
        "poder",
        diceResult1,
        Personagem2.PODER
      );

      await logRollResult(
        Personagem2.NOME,
        "poder",
        diceResult2,
        Personagem2.PODER
      );

      if (powerResult1 > powerResult2 && Personagem2.PONTOS > 0) {
        console.log(
          `${Personagem1.NOME} venceu o confronto! ${Personagem2.NOME} perdeu 1 ponto 🐢`
        );
        Personagem2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && Personagem1.PONTOS > 0) {
        console.log(
          `${Personagem2.NOME} venceu o confronto! ${Personagem1.NOME} perdeu 1 ponto 🐢`
        );
        Personagem1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    

    if (powerResult1 > powerResult2) {
      console.log(`${Personagem1.NOME} marcou um ponto!`);
      Personagem1.PONTOS++;
    } else if (powerResult2 > powerResult1) {
      console.log(`${Personagem2.NOME} marcou um ponto!`);
      Personagem2.PONTOS++;
    }
        }

    }
}


async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

//Funcao auto invocavel entre dentro de parenteses e fecha e abre (funcao(){})();
(async function main() {
   console.log(`🏁🚥 Conrrida entre ${player1.NOME} E ${player2.NOME} esta comaçando`);
    //awaite serve para o codigo espera a funcao terminar para começar a outra
    await playerRaceEngine(player1,player2);
    await declareWinner(player1,player2);1
})();