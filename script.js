/******Tic Tac Toe Game******/
'use strict mode'

const boardObject = (() => {

    const board = ['1' ,'' ,'' 
                   
                   ,'' ,'4' ,''
                   
                   ,'' ,'','' ];
  
    return {board} //should probably be a module IIFE that adds itself to the dom
  
  })();

  //boardObject.board.splice(4,1,'o'); example using splice method to remove element and replace with 'O'
  //the first argument is the index, the second argument is how many elements to remove the third optional argument is the item to add
  //splice(start, deleteCount, item1, item2, itemN)
  


(    ()=>{

    document.querySelector('.playerNamesConfigContainer').style.display = 'none' //make player config section 'none'
    document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'non'


    ///*****EVENT LISTNER***** for new game button///
    document.querySelector('.newGameButton').addEventListener('click', ()=>{ //event listener for the new game button that adds player config section and removes new game button on click of new game start button
        document.querySelector('.playerNamesConfigContainer').style.display = 'block';
        document.querySelector('.newGameButton').style.display = 'none';
    })
})();       //IIFE that upon click will create the player config seciton. when startnewgame button is clicked the section and new game button go away.
    



const PlayerObject = (playerName,symbol) => {
    scoreCount = 0 // score is when a game is won
    tieCount = 0    // tie is when no one wins a game
    
    return{
     
    playerName, //the name object will be filled by an html form
    
    symbol, // will be chosen by the game flow
    
    scoreCount,

    tieCount
    };
}

//as per "Barmars" advice on stackoverflow it is okay to create playerobject varibales
//using let but leave them un initizliized until the newgame config function call//
//where they become the actual playerobject.

let player1, player2 //player1 and two objects storing chosen names and scores

let numberOfGames // number of games global object to tell the user how many games left they have to play


function newGameConfig()  {

    //need to handle condition for if forms are lefft blank
    

    let  player1Name =document.querySelector('.p1Name').value

    let  player2Name = document.querySelector('.p2Name').value

    let  p1Symbol = document.querySelector('input[name="p1xOrO"]:checked').value  //these check for the checked radio button plater inputs

    let  p2Symbol = document.querySelector('input[name="p2xOrO"]:checked').value

    numberOfGames = document.querySelector('.numberOfRoundsChoice').value

    //Condition below checks if any of the forms are blank and creates alert if they are
      if (numberOfGames === '' || player1Name === '' || player2Name === '' || p1Symbol === '' || p2Symbol === '') {return alert('Form must be filled out to start game.')};
    
    player1 = PlayerObject(player1Name,p1Symbol)
    player2 = PlayerObject(player2Name,p2Symbol)

    if (player1.symbol === player2.symbol){ return alert('Each player must choose their own symbol.')}

    document.querySelector('.player1Inputs').reset();
    document.querySelector('.player2Inputs').reset();//reset form values on press of start button
    document.querySelector('.gameNumberChoiceContainer').reset() ;//make gameNumbersChoice form reset
    
    
    document.querySelector('.playerNamesConfigContainer').style.display = 'none' //remove player names config container from dom

    document.querySelector('.playerScoreBoard').style.display = 'flex'
    

    
   //the loop below makes the text content of the board in html the same as the content of boardObject.board array

    let boardContainer = document.querySelectorAll('.ticTacToeGridContainer > p')
    for (let i=0; i < boardContainer.length; i++) {
        boardContainer[i].textContent = boardObject.board[i];
    }
    
}


//********** EVENT LISTENER for start game button***********//

const startButton = document.querySelector('.startGameButton') // button that starts the whole game and gets player input values

startButton.addEventListener('click' , (event)=>{
event.preventDefault()

    newGameConfig()
    
    //start new game function goes here
    
    

}) // adds all the form info into objects


//**********EVENT LISTENER for restart game button**********// removes all player config information like name,score,tie, and symbol
//and will reset the whole game back to beginning again. with new game button appearing.
restartButton = document.querySelector('.restartGameButton')
restartButton.addEventListener('click', 

()=>{

if(player1 && player2)
    {Object.keys(player1).forEach(key => player1[key]=null); //removes player properties to null
    Object.keys(player2).forEach(key => player2[key]=null);}
    document.querySelector('.playerNamesConfigContainer').style.display = 'block'; //displays the game config form again
    document.querySelector('.playerScoreBoard').style.display = 'none' //removes scoreboard
//need to reset score board back to zero

})



  const gameFlow = () => {

    let firstPlayer,secondPlayer
  //Below is an IIFE to choose which player goes first and assigns the player1 or player2 objets to either first player or second player
  (()=>{let choosePlayer = Math.floor(Math.random() *2); //player1 goes if 0 and player2 goes if 1
  

  if (choosePlayer === 0) { firstPlayer = player1; secondPlayer = player2
}else{firstPlayer = player2; secondPlayer = player1} })()
  
  
    /*step1 - choose first player at random, each player receives either x or o as their player symbol


    step2 - a.)display shows the player name its their turn first player moves by placing either x or o on the board - choose a square and check it
                1.)new game blank game board is displayed
            b.) check for win - look through array for winning moves

            c.) 1.) if win - congrats to player confetti animation, increment score

                2.) if tie - yay both win, increment tie count

                3.) if null result and more spaces are left to fill - next player go


            d.) next player goes their name is shown and its their turn repeat above steps until all spaces are filled or win condition is taken

            e.) if win remove game board and display winner's name and stats

            f.) show new fresh game board if there are more games to play and start whole process over again
            g.) display final results and show both player stats.
            

*/

  }