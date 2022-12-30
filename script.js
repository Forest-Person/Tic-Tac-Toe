/******Tic Tac Toe Game******/


const gameBoardObject = () => {

  const board = [{p1:''}, {p2:''}, {p3:''},
                 
                 {p4:''}, {p5:''}, {p6:''},
                 
                 {p7:''}, {p8:''}, {p9:''}];

  return {board} //should probably be a module IIFE that adds itself to the dom

}; 


(           //IIFE that upon click will create the player config seciton. when startnewgame button is clicked the section and new game button go away.
    ()=>{

        document.querySelector('.playerNamesConfigContainer').style.display = 'none' //make player config section 'none'
        document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'non'


        ///*****EVENT LISTNER*****///
        document.querySelector('.newGameButton').addEventListener('click', ()=>{ //event listener for the new game button that adds player config section and removes new game button on click of new game start button
            document.querySelector('.playerNamesConfigContainer').style.display = 'block';
            document.querySelector('.newGameButton').style.display = 'none';
        })
    }
)()



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

//as per "Barmars" advice on stackoverflow it is okay to create playerobject varibales
//using let but leave them un initizliized until the newgame config function call//
//where they become the actual playerobject.

let player1, player2 //player1 and two objects storing chosen names and scores

let numberOfGames = document.querySelector('.numberOfRoundsChoice').value


function newGameConfig()  {

    //need to handle condition for if forms are lefft blank
    

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
    
    
    document.querySelector('.playerNamesConfigContainer').style.display = 'none' //remove player names config container from dom

    document.querySelector('.playerScoreBoard').style.display = 'flex'
    
    
}


//********** EVENT LISTENER ***********//

const startButton = document.querySelector('.startGameButton') // button that starts the whole game and gets player input values

startButton.addEventListener('click' , (event)=>{
event.preventDefault()

    newGameConfig()
    
    //start new game function goes here
    
    

}) // adds all the form info into objects


//**********EVENT LISTENER**********// removes all player config information like name,score,tie, and symbol
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
//remove all the form information to save for later reconfig if wanted at end of the game.
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