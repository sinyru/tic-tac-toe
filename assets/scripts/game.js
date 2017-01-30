'use strict';

const api = require('./auth/api');
// const store = require('./store');
const gameData = require('./gameData');
// const ui = require('./auth/ui');
const ui = require('./auth/ui');
let board = ['','','','','','','','',''],
    currentPlayer = 'x',
    cells = $('.cells'),
    resultTag = $('h2'),
    resetBtn = $('#create-game');


const gameStatus = function () {
    return board.includes("");
};

let gameOver = false;

const winner = function() {
  if(
      board[0]==="x" && board[1]==="x" && board[2]==="x" ||
      board[3]==="x" && board[4]==="x" && board[5]==="x" ||
      board[6]==="x" && board[7]==="x" && board[8]==="x" ||
      board[0]==="x" && board[3]==="x" && board[6]==="x" ||
      board[1]==="x" && board[4]==="x" && board[7]==="x" ||
      board[2]==="x" && board[5]==="x" && board[8]==="x" ||
      board[0]==="x" && board[4]==="x" && board[8]==="x" ||
      board[2]==="x" && board[4]==="x" && board[6]==="x"
  ) {
     console.log("Winner: X");
     resultTag.text("Winner: X");
     return true;
  } else if (
      board[0]==="o" && board[1]==="o" && board[2]==="o" ||
      board[3]==="o" && board[4]==="o" && board[5]==="o" ||
      board[6]==="o" && board[7]==="o" && board[8]==="o" ||
      board[0]==="o" && board[3]==="o" && board[6]==="o" ||
      board[1]==="o" && board[4]==="o" && board[7]==="o" ||
      board[2]==="o" && board[5]==="o" && board[8]==="o" ||
      board[0]==="o" && board[4]==="o" && board[8]==="o" ||
      board[2]==="o" && board[4]==="o" && board[6]==="o"
  ) {
     console.log("winner: O");
     resultTag.text("Winner: O");
     return true;
  } else if (gameStatus()===false) {
     console.log("draw game");
     resultTag.text("Game Draw!!!");
     return true;
  } else {
    return false;
  }
};



const addMove = function (index){
  if (board[index]===""){
    board[index] = currentPlayer;
    gameOver = winner();
    api.updateGame(gameData.game.id, index, currentPlayer, gameOver);
    if (gameOver){
      cells.unbind('click');
    }
    if (currentPlayer==='x'){
      currentPlayer='o';
    } else {
      currentPlayer='x';
    }
  } else {
    console.log("pick another place");
  }

};




const reset = function (event){
  event.preventDefault();
  for(let i=0; i<board.length; i++){
    board[i] = '';
    $('.cells').text('');
    resultTag.text('');
    currentPlayer = 'x';
  }
  api.createBoard()
  .then((response) => {
    gameData.game = response.game;
  })
  .then(ui.success)
  .catch(ui.failure)
  ;
  cells.on('click', (event)=>{
    event.preventDefault();
    if($(event.target).text()===""){
      $(event.target).text(currentPlayer);
      console.log(board);
      addMove(parseInt(event.target.id));
    }
  });
};


const addHandlers =() => {
  resetBtn.on('click', reset);
};



module.exports = {
  board,
  winner,
  addMove,
  reset,
  currentPlayer,
  addHandlers,
};
