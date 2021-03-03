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
