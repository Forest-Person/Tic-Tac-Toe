/******Tic Tac Toe Game******/


 
 


const gameBoardObject = () => {

  const board = [{p1:''}, {p2:''}, {p3:''},
                 
                 {p4:''}, {p5:''}, {p6:''},
                 
                 {p7:''}, {p8:''}, {p9:''}];

  return {board} //should probably be a module IIFE that adds itself to the dom

}; 




const PlayerObject = (nameChoice,symbol) => {
    scoreCount = 0 // score is when a game is won
    tieCount = 0    // tie is when no one wins a game
    
    return{
     
    nameChoice, //the name object will be filled by an html form
    
    symbol, // will be chosen by the game flow
    
    scoreCount,

    tieCount
    };
}

//as per armars advice on stackoverflow it is okay to create playerobject varibales
//using let but leave them un initizliized until the newgame config function call//
//where they become the actual playerobject.

let player1, player2


function newGameConfig()  {

    let numberOfGames = document.querySelector('.numberOfRoundsChoice').value

    let  player1Name =document.querySelector('.p1Name').value

    let  player2Name = document.querySelector('.p2Name').value

    let  p1Symbol = document.querySelector('input[name="p1xOrO"]:checked').value  //these check for the checked radio button plater inputs

    let  p2Symbol = document.querySelector('input[name="p2xOrO"]:checked').value

      
    
    player1 = PlayerObject(player1Name,p1Symbol)
    player2 = PlayerObject(player2Name,p2Symbol)

    if (player1.symbol === player2.symbol){ return alert('Each player must choose their own symbol.')}

    document.querySelector('.player1Inputs').reset();
    document.querySelector('.player2Inputs').reset();//reset form values on press of start button
    document.querySelector('.gameNumberChoiceContainer').reset() ;//make gameNumbersChoice form reset
    
    
}


//********** EVENT LISTENER ***********//

const startButton = document.querySelector('.startGameButton') // button that starts the whole game and gets player input values

startButton.addEventListener('click' , (event)=>{
event.preventDefault()

    newGameConfig()
    

    
    

}

    ) // adds all the form info into objects





  const gameFlow = () => {

  /*step1 - choose first player at random, each player receives either x or o at random as their player symbol


    step2 - a.) first player moves by placing either x or o on the board - choose a square and check it
            
            b.) check for win - look through array for winning moves

            c.) 1.) if win - congrats to player confetti animation, increment score

                2.) if tie - yay both win, increment tie count

                3.) if lose - next player go


            d.) 

            

*/

  }