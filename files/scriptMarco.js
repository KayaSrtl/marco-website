$( document ).ready(function() {



});


$(document).keydown(function(e){
    
    
});




$(window).scroll(function(event){
  
  
  
  
});


function beReadyPage () {
	window_height = parseInt($( window ).height());
	window_width = parseInt($( window ).width());
  
}



$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
	return;
});
