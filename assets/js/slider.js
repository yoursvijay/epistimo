(function() {
    
  function controls() {
    $('.slideDiv').animate({
      top: -$('.container').height() * $(this).index()
    }, 450);
  }
  runCode();
  
})();