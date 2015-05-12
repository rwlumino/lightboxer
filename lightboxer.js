$(document).ready(function(){
//	//	//	//	//	//	//	//	//	//	//	//	//	//
//													//
//	Lightbox-Custom Plugin by Reuben @dalegroup		//
//													//
//	//	//	//	//	//	//	//	//	//	//	//	//	//

	$(function() {	// Gets the height of the header and moves the lighbox downwards
		var $headerHeight = $('header');
				$('.lightbox-container').css({'padding-top': $headerHeight.innerHeight()});
	});
	
	$(function() {	// Gets the width of the sidebar and moves the lighbox right
		var $sidebarWidth = $('.sidebar');
				$('.lightbox-container').css({'padding-left': $sidebarWidth.innerWidth()});
	});
	
	$('.lightbox-container').prepend( $( '<span class="cross" title="Click to cancel">X</span>' ) );	// Adds the cross with class .close to the lightbox
	$('.lightbox-open').attr( "title", "Click to see more");	// Adds instructions to open button
	$('.lightbox-open').click(function(){	// .lightbox-open class opens the lightbox
		$(this).closest('div').find(".lightbox-element").toggle();
	});
	$('.cross').click(function(){	// .cross closes the lightbox
		$(this).parent().parent().toggle();
	});
	$(document).keyup(function(e) {	// Hides the lightbox when escape is pressed
	  if (e.keyCode == 27) {
		$('.lightbox-element').hide() 
		} 
	});
});
