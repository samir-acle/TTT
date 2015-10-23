// //TODO: implement board var/array?
'use strict';
//
// var squares = $('.square');
var resetButton = $('.reset');
var xToPlay = true;
// var player = $('p');
//
// squares.on('click', function() {
//   // $(this).css('background', 'MediumSpringGreen');
//   if (!$(this).hasClass('clicked')) {
//     $(this).addClass('clicked');
//     $(this).text(xToPlay ? 'X' : 'O');
//     var winner = checkWin();
//
//     if(winner[0]) {
//       console.log('player', winner[1], 'wins');
//       resetBoard();
//     } else {
//       xToPlay = !xToPlay;
//       console.log('clcikiy');
//       player.text(xToPlay ? 'X to Play' : 'O to Play');
//     }
//   }
// });
//
resetButton.on('click', resetBoard);
//
// function resetBoard() {
//   squares.removeClass('clicked');
//   squares.text('');
//   xToPlay = true;
//   player.text('X to Play');
// }
//
//
// // function checkWin() {
// //
// // }
// // var x = $('<div/>');
// //
// // console.log(x);
//
// // //winning combinations
// // r1c1 r1c2 r1c3
// // r2c1 r2c2 r2c3
// // r3c1 r3c2 r3c3
//
// function checkWin() {
//   var lastPlayer = xToPlay ? 'X' : 'O';
//   var win = false;
//   console.log(lastPlayer);
//
//   if ($('#r1c1').text() === lastPlayer) {
//     if ($('#r1c2').text() === lastPlayer) {
//       if ($('#r1c3').text() === lastPlayer) {
//         win = true;
//       }
//     }
//
//     if ($('#r2c1').text() === lastPlayer){
//       if ($('#r3c1').text() === lastPlayer){
//         win = true;
//       }
//     }
//
//     if ($('#r2c2').text() === lastPlayer){
//       if ($('#r3c3').text() === lastPlayer){
//         win = true;
//       }
//     }
//   } else if ($('#r1c2').text() === lastPlayer) {
//     if($('#r2c2').text() === lastPlayer){
//       if($('#r3c2').text() === lastPlayer){
//         win = true;
//       }
//     }
//   } else if($('#r1c3').text() === lastPlayer){
//     if($('#r2c2').text() === lastPlayer){
//       if($('#r3c3').text() === lastPlayer){
//         win = true;
//       }
//     }
//
//     if($('#r2c3').text() === lastPlayer){
//       if($('#r3c3').text() === lastPlayer){
//         win = true;
//       }
//     }
//   } else if($('#r2c1').text() === lastPlayer){
//     if($('#r2c2').text() === lastPlayer){
//       if($('#r2c3').text() === lastPlayer){
//         win = true;
//       }
//     }
//   } else if($('#r3c1').text() === lastPlayer){
//     if($('#r3c2').text() === lastPlayer){
//       if($('#r3c3').text() === lastPlayer){
//         win = true;
//       }
//     }
//   }
//
//   return [win, lastPlayer];
// }


var board = [];
var boardElements = [];

function generateBoard(rows, columns) {
  for (var i = 0; i < rows; i++) {
    var row = [];

    for (var j =0; j < columns; j++) {
      row[j] = 0;
      var div = $('<div/>');
      div.addClass('square');
      div.attr('id','r' + i + 'c' + j);
      var percent = 100 / rows;
      div.css({'width' : percent + '%'});
      div.on('click', squareClicked);
      $('.container').append(div);
    }
    board[i] = row;
  }
}

function updateDisplay() {
  for (var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[0].length; j++) {
      var square = $('#r' + i + 'c' + j);
      switch (board[i][j]) {
        case 1:
          square.text('X');
          break;
        case -1:
          square.text('O');
          break;
        default:
          square.text('');
          break;
      }
    }
  }
}

function squareClicked(evt) {
  // if(!$(this).hasClass('clicked')){
    updateArray.bind(this)();
    updateDisplay();
    xToPlay = !xToPlay;
  //   $(this).addClass('clicked');
  // }
}

function updateArray() {
  var id = $(this).attr('id');
  var row = id[1];
  var col = id[3];

  if(xToPlay){
    board[row][col] = 1;
  } else {
    board[row][col] = -1;
  }
}

generateBoard(3,3);
console.log(board);

function resetBoard() {
  for (var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[0].length; j++) {
      board[i][j] = 0;
    }
  }
  updateDisplay();
}
// function generateBoardElements(board) {
//   for (var i = 0; i < board.length; i++) {
//     var row = [];
//
//     for (var j = 0; j < board[0].length; j++) {
//       var div = $('</div>');
//       // var row = 'r' + i;
//       // var col = 'c' + j;
//       // div.addClass(row +' ' + col);
//       // console.log(div);
//       div.addClass('square');
//       row[j] = div;
//       console.log(row);
//     }
//     boardElements[i] = row;
//   }
// }
//
// console.log(boardElements);
