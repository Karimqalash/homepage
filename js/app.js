//get variables

var myVar;

function loaded() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  $("#loader").hide();
  $("#container").show();
}
    
$(document).ready(function(){


  $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1
  });
      
  $('.stickyMenu').smoothMenu({
    stickyMenu: true,
    slidingLine: true
  });

  $('#view-all').on('click', function() {
    $('#view-all').hide();
    $('.disapeard-cards').show();
  });

  if ( $( window ).width() < 600) {
    $("nav").removeClass("stickyMenu");
  }else{
    $("nav").addClass("stickyMenu");
  }
  
});
    