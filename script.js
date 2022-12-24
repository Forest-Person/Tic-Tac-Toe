/******Tic Tac Toe Game******/


 let mainDiv = document.createElement('div')  
 document.body.appendChild(mainDiv)
 mainDiv.classList.add('mainContainer')
 

 


const gameBoardObject = () => {

  const board = [{p1:'X'}, {p2:''}, {p3:''},
                 
                 {p4:''}, {p5:''}, {p6:''},
                 
                 {p7:''}, {p8:''}, {p9:''}];

  return {board} //should probably be a module IIFE that adds itself to the dom

}; 

const board1 = gameBoardObject() /* next two lines are just accessing the gameboard object and displaying 
* them to div created above************* */

mainDiv.textContent = [board1.board[0].p1,board1.board[0].p1].join('')//used join method to remove comma between these from the array display


  

const playerObject = () => {

  const name = ''; //the name object will be filled byt a html form
  
  let playerSymbol = ''; // will be chosen by the game flow
  
  let scoreCount = 0;  // score is when a game is won
  let tieCount = 0 ;   // tie is when no one wins a game

    
  }


  const gameFLow = (player1, player2) => {

  /*step1 - choose first player at random, each player receives either x or o at random as their player symbol


    step2 - a.) first player moves by placing either x or o on the board - choose a square and check it
            
            b.) check for win - look through array for winning moves

            c.) 1.) if win - congrats to player confetti animation, increment score

                2.) if tie - yay both win, increment tie count

                3.) if lose - next player go


            d.) 

            

*/

  }