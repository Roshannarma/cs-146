//Test code to check if Javascript is working
		//Reminder to Ctrl+Shift+I -> Console for debug
		
		jQuery(document).ready(function($) {
			alert("js is working");
		});

		function reserve(){

			var washer = $("#washers").val();
			var time = $("#times").val();
			if (washer == "none" || time == "none"){
				alert("No valid time or washer selected.")
				return;
			}
			var select_washer = $("#"+washer);
			var selection = select_washer.find("td:eq("+time+")");
			if (selection.hasClass("taken")){
				alert("Washer is already taken.")	
				return;
			}
			selection.css('background-color','Cornflowerblue');	
			alert("Washer successfuly reserved.");
			return;
		}
