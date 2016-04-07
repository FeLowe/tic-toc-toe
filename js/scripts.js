// BUSINESS LOGIC
function Player(mark) {
  this.mark = mark;
  this.spaces = [];
};


var row1 = [1,2,3];
var row2 = [4,5,6];
var row3 = [7,8,9];

Player.prototype.addSpace = function(space) {
  this.spaces.push(space);
}

// var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function = ticTacToe {
//   if (row1[0] === row2[1] === row1[2]) {
//     return true;
//   }
// }
function Game(playerOne) {
  this.currentPlayer = playerOne;
}






// USER INTERFACE LOGIC
$(document).ready(function() {
  var playerOne = new Player("X");
  var playerTwo = new Player("O");
  var newGame = new Game(playerOne);

  var turnCount = 0;

  $("#gameBoard td").on('click',function() {
    var positionId = $(this).attr('id');
    console.log(newGame.currentPlayer);
    playerOne.addSpace(positionId);
    console.log(playerOne.spaces);
});

  // $(".board").find('td').on('click', function()
  //   if (turnCount % 2 === 0) {
  //     $(this).text('X');
  //     ticTacToe();
  //   } else {
  //     $(this).text('O');
  //     ticTacToe();
  //   }
  //   turnCount++;
});
