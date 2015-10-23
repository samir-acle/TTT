var squares = $('.square');
var resetButton = $('.reset');

squares.on('click', function() {
  // $(this).css('background', 'MediumSpringGreen');
  $(this).addClass('clicked');
});

resetButton.on('click', resetBoard);

function resetBoard() {
  squares.removeClass('clicked');
  console.log('running');
}
