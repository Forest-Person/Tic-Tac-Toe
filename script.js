/******Tic Tac Toe Game******/


 
 


const gameBoardObject = () => {

  const board = [{p1:''}, {p2:''}, {p3:''},
                 
                 {p4:''}, {p5:''}, {p6:''},
                 
                 {p7:''}, {p8:''}, {p9:''}];

  return {board} //should probably be a module IIFE that adds itself to the dom

}; 

/*
let mainDiv = document.createElement('div')  
 document.body.appendChild(mainDiv)
 mainDiv.classList.add('mainContainer')

const board1 = gameBoardObject() /* next two lines are just accessing the gameboard object and displaying 
                                 //* them to div created above************* 

mainDiv.textContent = [board1.board[0].p1,board1.board[0].p1].join('')//used join method to remove comma between these from the array display

*/

const startButton = document.querySelector('.startGameButton')




const newGameConfig = (event) => {

    event.preventDefault()
    
    const numberOfGames = document.querySelector('.numberOfRoundsChoice').value;

    const player1Name = document.querySelector('.p1Name').value;

    const player2Name = document.querySelector('.p2Name').value;

    const p1Symbol = document.querySelector('input[name="p1xOrO"]:checked').value;

    const p2Symbol = document.querySelector('input[name="p2xOrO"]:checked').value;

    if (p1Symbol === p2Symbol) {

        return alert('Players cannot choose same symbol')
    }

    document.querySelector('.player1Inputs').reset()
    document.querySelector('.player2Inputs').reset()

    return console.log(numberOfGames,player1Name,player2Name,p1Symbol,p2Symbol);

};


startButton.addEventListener('click' , newGameConfig)


const playerObject = () => {

    const name = ''; //the name object will be filled by an html form
    
    let playerSymbol = ''; // will be chosen by the game flow
    
    let scoreCount = 0;  // score is when a game is won
    let tieCount = 0 ;   // tie is when no one wins a game
  
      
    }




  const gameFlow = (player1, player2) => {

  /*step1 - choose first player at random, each player receives either x or o at random as their player symbol


    step2 - a.) first player moves by placing either x or o on the board - choose a square and check it
            
            b.) check for win - look through array for winning moves

            c.) 1.) if win - congrats to player confetti animation, increment score

                2.) if tie - yay both win, increment tie count

                3.) if lose - next player go


            d.) 

            

*/

  }