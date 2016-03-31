<<<<<<< Updated upstream
$(document).ready(function(){
	$(".button-projects").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
	});

	$(".button-home").click(goToSplash);
	$(".button-about").click(goToAbout);
	$(".button-contact").click(goToContact);
});

function goToSplash (event) {
	event.preventDefault();
	var goTopPosition = $(".splash").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

function goToAbout (event) {
	event.preventDefault();
	var goTopPosition = $(".about").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}
function goToContact (event) {
	event.preventDefault();
	var goTopPosition = $(".contact").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}









=======
$(document).ready(function () {
	
	window.sr = ScrollReveal( { reset: true });
	sr.reveal('.splash');
	sr.reveal('.header', { duration:2500});
	sr.reveal('.description', { duration: 3200});
	sr.reveal('projects .header');
	sr.reveal('projects .projects-item', 
		{   duration:2000,
			origin:"top",
		    scale: 1
		 }
		)

});

>>>>>>> Stashed changes
