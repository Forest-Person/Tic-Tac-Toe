/******Tic Tac Toe Game******/


"use strict"


const PlayerObject = (playerName,symbol) => {
    let scoreCount = 0; // score is when a game is won
    let tieCount = 0;    // tie is when no one wins a game
    
    return{
     
    playerName, //the name object will be filled by an html form
    
    symbol, // will be chosen by the game flow
    
    scoreCount,

    tieCount
    };
}

(()=>{

    //document.querySelector('.playerNamesConfigContainer').style.display = 'none' //make player config section 'none'
    document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'none'
    document.querySelector('.playerTurnIndicator').style.display = 'none'
    document.querySelector('.finalGameWinner').style.display = 'none'; //final game winner and tournament winner will be displayed at end of game
    document.querySelector('.lastGameResults').style.display = 'none';
    document.querySelector('.restartGameButton').style.display = 'none';
    document.querySelector('.playerNamesConfigContainer').style.display = 'none';
    document.querySelector('.startGameButton').style.display = 'none'
    

    ///*****EVENT LISTNER***** for new game button///
    document.querySelector('.newGameButton').addEventListener('click', ()=>{ //event listener for the new game button that adds player config section and removes new game button on click of new game start button
        
        document.querySelector('.playerNamesConfigContainer').style.display = 'flex';
        document.querySelector('.newGameButton').style.display = 'none';
    
    })
})();       //IIFE that upon click will create the player config seciton. when startnewgame button is clicked the section and new game button go away.
    

/********EVENT LISTENER **********/ //Tracks inputs into the playerconfig container and wont let start game button appear until all forms filled out.

document.querySelectorAll("input").forEach((item)=>item.addEventListener('input', (e)=>{


    let  player1Name =document.querySelector('.p1Name').value;

    let  player2Name = document.querySelector('.p2Name').value;

    let numberOfGames = document.querySelector('.numberOfRoundsChoice').value;
    

if (numberOfGames === '' || player1Name === '' || player2Name === ''){
    document.querySelector('.startGameButton').style.display = 'none'
    
}else{document.querySelector('.startGameButton').style.display = 'flex'};

}))

//********* GLOBALS ***********//

let player1, player2 //player1 and two objects storing chosen names and scores

let numberOfGames // number of games global object to tell the user how many games left they have to play
let playAgainNumberOfGamesCounter
let ticTacToeContainer = document.querySelector('.ticTacToeGridContainer'); //for adding event listener to tic tact toe board
let ticTacToeArray = document.querySelectorAll('.ticTacToeGridContainer p');//for accessing the values of the board and relating them to the symbols to check for win conditions
let player1TurnIndicator = document.querySelector('.player1TurnIndicator'); //classes to show which player turn to light up in html
let player2TurnIndicator = document.querySelector('.player2TurnIndicator');
let firstPlayer,secondPlayer

function newGameConfig()  {

    //need to handle condition for if forms are lefft blank
    
    

    let  player1Name =document.querySelector('.p1Name').value;

    let  player2Name = document.querySelector('.p2Name').value;

    let  p1Symbol = document.querySelector('input[name="p1xOrO"]:checked').value; //these check for the checked radio button plater inputs

    let  p2Symbol = document.querySelector('input[name="p2xOrO"]:checked').value;

    numberOfGames = document.querySelector('.numberOfRoundsChoice').value;
    playAgainNumberOfGamesCounter = document.querySelector('.numberOfRoundsChoice').value;
    
    
    player1 = PlayerObject(player1Name,p1Symbol);
    player2 = PlayerObject(player2Name,p2Symbol);

    if (player1.symbol === player2.symbol){ 
        
        alert('Each player must choose their own symbol.')
        
        return }else{

    document.querySelector('.player1Inputs').reset();
    document.querySelector('.player2Inputs').reset();//reset form values on press of start button
    document.querySelector('.gameNumberChoiceContainer').reset() ;//make gameNumbersChoice form reset
    
    
    document.querySelector('.playerNamesConfigContainer').style.display = 'none' //remove player names config container from dom

    document.querySelector('.playerScoreBoard').style.display = 'flex'
    document.querySelector('.playerTurnIndicator').style.display = 'flex'
    

    
   //the loop below makes the text content of the board in html the same as the content of boardObject.board array

    let boardContainer = document.querySelectorAll('.ticTacToeGridContainer > p');
    for (let i=0; i < boardContainer.length; i++) {
        boardContainer[i].textContent = '';
    }
    restartButton.style.display = 'block'
    gameFlow();}
}

let restartButton = document.querySelector('.restartGameButton');
//********** EVENT LISTENER for start game button***********//

const startButton = document.querySelector('.startGameButton') // button that starts the whole game and gets player input values

startButton.addEventListener('click' , (event)=>{
event.preventDefault();

    newGameConfig();
    
    //start new game function goes here
    
    

}) // adds all the form info into objects


//**********EVENT LISTENER for restart game button**********// removes all player config information like name,score,tie, and symbol
//and will reset the whole game back to beginning again. with new game button appearing.



restartButton.addEventListener('click', 

()=>{


    startAgain()
    
    
})



  const gameFlow = () => {

   
        
    
    
  //Below is an IIFE to choose which player goes first and assigns the player1 or player2 objets to either first player or second player
  (()=>{let choosePlayer = Math.floor(Math.random() *2); //player1 goes if 0 and player2 goes if 1
  
  player1TurnIndicator = document.querySelector('.player1TurnIndicator') //html classes to show which player turn to light up in html
  player2TurnIndicator = document.querySelector('.player2TurnIndicator')
  let player1ScoreBoardName = document.querySelector('.player1ScoreBoardNameDisplay')
  let player2ScoreBoardName = document.querySelector('.player2ScoreBoardNameDisplay')
  if (choosePlayer === 0) { firstPlayer = player1; secondPlayer = player2;
    let firstNameLetterCapitalized = firstPlayer.playerName.charAt(0).toUpperCase() + firstPlayer.playerName.slice(1)
    let secondNameLetterCapitalized = secondPlayer.playerName.charAt(0).toUpperCase() + secondPlayer.playerName.slice(1)
    firstPlayer.playerName = firstNameLetterCapitalized
    secondPlayer.playerName = secondNameLetterCapitalized
    player1TurnIndicator.style.cssText = "box-shadow:0 0 10px 6px #f0f;"
    player1TurnIndicator.textContent = `${firstPlayer.playerName} You are ${firstPlayer.symbol} GO!` //determines which player turn it is
    player2TurnIndicator.textContent = `${secondPlayer.playerName} You are ${secondPlayer.symbol} GO!`
    player1ScoreBoardName.textContent = `${firstPlayer.playerName}` //make score board name display the names of players
    player2ScoreBoardName.textContent = `${secondPlayer.playerName}`

}else if (choosePlayer === 1){ firstPlayer = player2; secondPlayer = player1;
    let firstNameLetterCapitalized = firstPlayer.playerName.charAt(0).toUpperCase() + firstPlayer.playerName.slice(1)
    let secondNameLetterCapitalized = secondPlayer.playerName.charAt(0).toUpperCase() + secondPlayer.playerName.slice(1)
    firstPlayer.playerName = firstNameLetterCapitalized
    secondPlayer.playerName = secondNameLetterCapitalized
    player1TurnIndicator.style.cssText = "box-shadow:0 0 10px 6px #f0f;"
    player1TurnIndicator.textContent = `${firstPlayer.playerName} You are ${firstPlayer.symbol} GO!` //which player turn
    player2TurnIndicator.textContent = `${secondPlayer.playerName} You are ${secondPlayer.symbol} GO!`
    player1ScoreBoardName.textContent = `${firstPlayer.playerName}` //update player name display on score board
    player2ScoreBoardName.textContent = `${secondPlayer.playerName}`}


 })();

        let player1ScoreDisplay = document.querySelector('.player1ScoreDisplay')
        player1ScoreDisplay.textContent = `Score: ${firstPlayer.scoreCount}`
        let player1TieCountDisplay = document.querySelector('.player1TieDisplay')
        player1TieCountDisplay.textContent = `Tie: ${firstPlayer.tieCount}`

        let player2ScoreDisplay = document.querySelector('.player2ScoreDisplay')
        player2ScoreDisplay.textContent = `Score: ${secondPlayer.scoreCount}`
        let player2TieCountDisplay = document.querySelector('.player2TieDisplay')
        player2TieCountDisplay.textContent = `Tie: ${secondPlayer.tieCount}`

        let gamesLeftToPlayCounter = document.querySelector('.gamesLeftCounter')
        gamesLeftToPlayCounter.textContent = numberOfGames
        let player1Turn = true //flag to tell whether its player 1 turn or not
        let slotsLeft = 9 // number to track how many slots have been played

//player1TurnIndicator.style.cssText = "box-shadow:0 0 10px 6px #f0f;"
     //light up player1 turn indicator
    
     const winChecker = () => {

        let ticArray = Array.from(ticTacToeArray)//makes array from the node list of the tictacttoe class of <p>'s
        
        let boardArray = ticArray.map((content)=>{return content.textContent}) //returns an array where the text content is the elements of the array
    
        slotsLeft = slotsLeft-1 //minus slotsleft each time the win checker is run
        let winFlag  //initialize winflag so that if the conditions below become true the win flag is used by the tie checking conditional
        let tieGameIndicator //tie game indicator flag changes in the condition below in the for each if no wins are detected
       
        let winConditions = [ //all pokssible winning conditions
       
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
        [0,3,6],
        [1,4,7],
        [2,5,8],
    
        [0,4,8],
        [2,4,6],
    
        ]
    
        function checkWinner(whichPlayer,playerSymbol) {//This function uses index access below in first foreach I found on odin project examples it checks every 3 item element of the winconditions array and then uses that as the map to check the board array for any sequences of wins
            winConditions.forEach((item) => { 
                

                if (boardArray[item[0]] === playerSymbol && boardArray[item[1]] === playerSymbol && boardArray[item[2]] === playerSymbol) {
                    winFlag = true

                    let boardContainer = document.querySelectorAll('.ticTacToeGridContainer > p')
                    for (let i=0; i < boardContainer.length; i++) {
                        boardContainer[i].textContent = '';} //reset container back to blank again for next game
                    
                   // ticArray = [] //reset the tic array again so that the above boardArray has a fresh pallette
                    slotsLeft = 9 //make slots back to 9 again for counter tos tart fresh
                    numberOfGames = numberOfGames - 1 //reduce number of games left to play
                    gamesLeftToPlayCounter.textContent = numberOfGames //update the numberofgames score display
                    document.querySelector('.lastGameResults').style.display = 'block'
                    document.querySelector('.lastGameResults').textContent
                    document.querySelector('.lastGameResults').textContent = `${whichPlayer.playerName} Won last game!`         
                            return whichPlayer.scoreCount += 1 //increase playerObject.scoreCount
                };
                
                
            });

            winConditions.forEach(() => { //this for each uses winflag and slotsleft to tell if a tie condition has been met by making sure no slots are left to play and win condition hjasnt been met its make a tieindicator return true is this is so
                
                if (boardArray.some((item)=>{return item != ''}) === true && slotsLeft === 0 && winFlag !== true){ //Tie checking conditional returns tie when no more slots are fillable and no win condition is fulfilled.
                    
                    return tieGameIndicator = true
                };
                
            });
                if (tieGameIndicator === true){
                    let boardContainer = document.querySelectorAll('.ticTacToeGridContainer > p')
                    for (let i=0; i < boardContainer.length; i++) {
                        boardContainer[i].textContent = '';}//reset container back to blank again for next game
                    
                    //ticArray = []//reset the tic array again so that the above boardArray has a fresh pallette
                    slotsLeft = 9//make slots back to 9 again for the counter to start fresh
                    numberOfGames = numberOfGames - .5   //reduce number of games counter by .5 because each player will reduce the count by one if a tie condition is met
                    gamesLeftToPlayCounter.textContent = numberOfGames //update number of games display on the scoreboard
                    document.querySelector('.lastGameResults').style.display = 'block'
                    document.querySelector('.lastGameResults').textContent = 'Both Players TIE!'
                    
                        return whichPlayer.tieCount += 1}; //tie game returns as true due to conditions above. increase playerObject tieCount for both players
        }
    
     checkWinner(firstPlayer, firstPlayer.symbol) 
    
     checkWinner(secondPlayer, secondPlayer.symbol) 
     
     


        if (numberOfGames === 0){ //logic for displaying final game results in .finalgameresults class element in html
            if(firstPlayer.scoreCount === secondPlayer.scoreCount){
                
                document.querySelector('.finalGameWinner').style.display = 'block';
                document.querySelector('.finalGameWinner').textContent = `You Both TIED in the The Tournament!`
                document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'none'
                document.querySelector('.playerTurnIndicator').style.display = 'none'
                document.querySelector('.ticTacToeGridContainer').style.display = 'none'
            }else if(firstPlayer.scoreCount > secondPlayer.scoreCount) {
                document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'none'
                document.querySelector('.playerTurnIndicator').style.display = 'none'
                document.querySelector('.finalGameWinner').style.display = 'block';
                document.querySelector('.finalGameWinner').textContent = `${firstPlayer.playerName} WON The Tournament!`
                document.querySelector('.ticTacToeGridContainer').style.display = 'none'
            }else if(firstPlayer.scoreCount < secondPlayer.scoreCount) {
                
                document.querySelector('.finalGameWinner').style.display = 'block';
                document.querySelector('.finalGameWinner').textContent = `${secondPlayer.playerName} WON The Tournament!`
                document.querySelector('.playerScoreBoard').style.display = 'none' //make points display 'none'
                document.querySelector('.playerTurnIndicator').style.display = 'none'
                document.querySelector('.ticTacToeGridContainer').style.display = 'none'
        
        }
    };  
};


//********** EVENT LISTENER ***********//


//need to restart game with player1Turn as true?
    

ticTacToeContainer.addEventListener('click', //adds player symbol to tictactoegridcontainer and changes which player turn indicator is lit up with box shadow
    //

    (event)=>{
        
        if (event.target.nodeName === 'ARTICLE'){return}
if (event.target.textContent === firstPlayer.symbol || event.target.textContent === secondPlayer.symbol){return}
                
        if (player1Turn === true && event.target.nodeName === 'P' && event.target.textContent !== secondPlayer.symbol && event.target.textContent == ''){
            
            
            event.target.textContent = firstPlayer.symbol
            player1Turn = false
            
        
        }else if (player1Turn === false && event.target.nodeName === 'P' && event.target.textContent !== firstPlayer.symbol && event.target.textContent == ''){

            
            event.target.textContent = secondPlayer.symbol
            player1Turn = true};
            

        if(player1Turn === true){
            
            player2TurnIndicator.style.cssText = "box-shadow:unset;";
            player1TurnIndicator.style.cssText = "box-shadow:0 0 10px 6px #f0f;";
        
        }else{ player2TurnIndicator.style.cssText = "box-shadow:0 0 10px 6px #f0f;";
        
            player1TurnIndicator.style.cssText = "box-shadow:unset;"};
        
        
        winChecker()


        
        
        
        //update all player info displays
        
        player1ScoreDisplay = document.querySelector('.player1ScoreDisplay')
        player1ScoreDisplay.textContent = `Score = ${firstPlayer.scoreCount}`
        player1TieCountDisplay = document.querySelector('.player1TieDisplay')
        player1TieCountDisplay.textContent = `Tie = ${firstPlayer.tieCount}`

        player2ScoreDisplay = document.querySelector('.player2ScoreDisplay')
        player2ScoreDisplay.textContent = `Score = ${secondPlayer.scoreCount}`
        player2TieCountDisplay = document.querySelector('.player2TieDisplay')
        player2TieCountDisplay.textContent = `Tie = ${secondPlayer.tieCount}`
       

        })
        
    }

    const startAgain = ()=>{
        document.querySelector('.lastGameResults').style.display = 'none'
        document.querySelector('.finalGameWinner').style.display = 'none'
        document.querySelector('.ticTacToeGridContainer').style.display = 'grid'
        numberOfGames = playAgainNumberOfGamesCounter
        let gamesLeftToPlayCounter = document.querySelector('.gamesLeftCounter')
        gamesLeftToPlayCounter.textContent = numberOfGames

        let boardContainer = document.querySelectorAll('.ticTacToeGridContainer > p')
        for (let i=0; i < boardContainer.length; i++) {
            boardContainer[i].textContent = '';} //reset container for next game
    
  
        firstPlayer.scoreCount = 0
        secondPlayer.scoreCount = 0
        firstPlayer.tieCount = 0
        secondPlayer.scoreCount = 0
        document.querySelector('.playerScoreBoard').style.display = 'flex' 
        document.querySelector('.playerTurnIndicator').style.display = 'flex'
 

        let player1ScoreDisplay = document.querySelector('.player1ScoreDisplay')
        player1ScoreDisplay.textContent = `Score: ${firstPlayer.scoreCount}`
        let player1TieCountDisplay = document.querySelector('.player1TieDisplay')
        player1TieCountDisplay.textContent = `Tie: ${firstPlayer.tieCount}`

        let player2ScoreDisplay = document.querySelector('.player2ScoreDisplay')
        player2ScoreDisplay.textContent = `Score: ${secondPlayer.scoreCount}`
        let player2TieCountDisplay = document.querySelector('.player2TieDisplay')
        player2TieCountDisplay.textContent = `Tie: ${secondPlayer.tieCount}`




};


        
    