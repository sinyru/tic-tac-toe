'use strict';


let board = ['','','','','','','','',''],
    player1 = "x",
    player2 = "o",
    currentPlayer = player1;
let cells = $('.cells'),
    resultTag = $('h2'),
    resetBtn = $('.reset');


const gameStatus = function () {
    return board.includes("");
};

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
  }
};


const addMove = function (index){
  if (board[index]===""){
    board[index] = currentPlayer;
    winner();
    if (winner()===true){
      cells.unbind('click');
    }
    if (currentPlayer===player1){
      currentPlayer=player2;
    } else {
      currentPlayer=player1;
    }
  } else {
    console.log("pick another place");
  }
};




const reset = function (){
  for(let i=0; i<board.length; i++){
    board[i] = '';
    $('.cells').text('');
    resultTag.text('');
    currentPlayer = 'x';
  }
  cells.on('click', (event)=>{
    if($(event.target).text()===""){
      $(event.target).text(currentPlayer);
      addMove(event.target.id);
      console.log(board);
    }
  });
};


cells.on('click', (event)=>{
  if($(event.target).text()===""){
    $(event.target).text(currentPlayer);
    addMove(event.target.id);
    console.log(board);

  }
});



resetBtn.on('click', ()=> {
  reset();
});



module.exports = {
  board,
  winner,
  addMove,
  reset,
  currentPlayer,
  resetBtn
};
