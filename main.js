// Main JS for JS6 Hide a Form

//$('form').hide()


$(document).on('ready', function() {

// // shows form
 	$('button').on('click',function() {
 		//console.log(this);
 		$('button').toggleClass("button_hide");
 		//console.log($('button').hasClass("button_hide"));
 		 if ($('button').hasClass("button_hide")) { 
 		 	$('button').text("Show Form");	
 		// 	console.log(this);
 		 	} else {
 		 		$('button').text("Hide Form");
 		};
 		$('form').toggleClass('form_toggle');
 	});



// //  create listener just for form update

 	$('form').on('submit',function(e) {
 		//console.log($('form'));	
 		var storeClass = $('input.name').class;
 		//console.log(storeClass);
 		var storeText = $('input.name').val();
  		//console.log(storeText);
  	 	//update profile to text from form
  		$('.profile.storeClass').val(storeText);
  		e.preventDefault();
 	});

// // toggle form class on hide button only
// 	$('.button_show').on('click', function(){
// 		$('form').toggleClass('form_toggle');
// 	});


// // to handle form submission
// 	$('input').on('blur',function() {
// 		console.log("working");
// 		//return false;
// 	var storeText = $('.name').val();
// 		console.log(storeText);
	
// 	var storeClass = $(this).class();
// 		console.log(storeClass);
// 	//update profile to text from form
// 	$('.profile.storeClass').val(storeText);



// 	});



// page close DO NOT DELETE  
});