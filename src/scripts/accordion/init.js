document.addEventListener("DOMContentLoaded", function() { 

	var accordions = document.getElementsByClassName('js-accordion');
	console.log('accordion');
	for (var i = 0; i < accordions.length; i++) {
		var accordion = new Accordion( accordions[i], {
			allowMultipleOpen : false
		} );
	}
});


