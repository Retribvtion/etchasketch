$(document).ready(function(){

$('.startOver').on('click', function(){
  var side = prompt("How many pixels per side?", 10);

  if(side != null){
    if(side < 1 || side > 100){
      alert("Try 1-100.");
    }else{
      var pixelSize = (500 / side);
      gridCreate(side);
      $('.pixel').css({'height': pixelSize + 'px', 'width': pixelSize + 'px'});
    }
  }
$('.pixel').hover(scrape);

});



  function scrape(){
    var opac = +$(this).css('opacity');
    if (opac < 1) opac += .1;
    $(this).css({'opacity': opac});
  };


  function gridCreate(sq){
    var count = sq * sq;
    $('#container').empty();
    for (var i=1; i <= count; i++){
      $('#container').append('<div class="pixel"></div>');
    };

  };
gridCreate(10);
$('.pixel').hover(scrape);
});
