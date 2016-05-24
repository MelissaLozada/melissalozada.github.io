$(document).ready(function(){


	});
	
	


	$(".button-home").click(goTohome);
	$(".button-projects").click(goToprojects);
	$(".button-about").click(goToabout);
	$(".button-contacts").click(goTocontact);





function goTohome (event){
	event.preventDefault();
	var goTopposition = $(".chocolate").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goToabout (event){
	event.preventDefault();
	var goTopposition = $(".about").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goToprojects (event){
	event.preventDefault();
	var goTopposition = $(".projects").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");

}

function goTocontacts (event){
	event.preventDefault();
	var goTopposition = $(".contact").offset().top;
		$("html,body").animate({scrollTop:goTopposition},1000,"easeInOutQuart");
}



