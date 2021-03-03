console.log("Welcome to My Portfolio! Enjoy!")

// Menu toggle for mobile to reduce menu size on mobile only
function menuToggle() {
	var x = document.getElementById('myNavtoggle');
	if (x.className === 'navtoggle') {
		x.className += ' responsive';
	} else {
		x.className = 'navtoggle';
	}
	
}

$(document).ready(function() {
	var scrollLink = $('.scroll')
	// Smooth scrolling for better user experience
	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500 );
	} )
} )