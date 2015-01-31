// Main JS for JS6 Hide a Form


$(document).on('ready', function() {

// // show/hide form via toggling some classes 
 	$('button').on('click',function() {
 		//console.log(this);
 		$(this).toggleClass("button_hide");
 		//console.log($(this).hasClass("button_hide"),"buttonHide");
 		 if ($(this).hasClass("button_hide")) { 
 		 	$(this).text("Hide Form");	
 		// 	console.log(this);
 		 	} else {
 		 		$(this).text("Show Form");
 		}
 		$('form').toggleClass('form_toggle');
 		//console.log("past show/hide form")
 	});
 

// //  create listener just for form update
 	$('form').on('submit',function(e) {
 		e.preventDefault();
 		//console.log("starting form listener")
		 		
 		var childrenList=$(this).children('input').not('.submit_button');
 		//console.log(childrenList);
 		childrenList.each(function(){
 			var childClass = $(this).attr('class');
			var childVal = $(this).val();
			$('.form_pair .'+childClass).text(childVal);
			//console.log("child:",childClass);
 		});
 		//clear form submission fields when written away
 		 childrenList.each(function(){
 		 	childrenList.val('');
 		 })
 	});

 


// page close DO NOT DELETE  
});