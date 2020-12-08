//Test code to check if Javascript is working
		//Reminder to Ctrl+Shift+I -> Console for debug

		jQuery(document).ready(function($) {
			alert("Select a machine and an available time slot");
		});

		function reserve(){

			var washer = $("#washers").val();
			var time = $("#times").val();
			var ID = $("input").val();
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
			selection.addClass("taken");
			selection.css('background-color','#D72600');
			// selection.text(ID);
			var now = new Date();
			var now_time = now.getTime();
			var my_hours = now.getHours();
			if(now.getHours() > Number(time)+7){
				var countDownDate = new Date(86400000 + now_time);
			}
			else{
				var countDownDate = new Date(now_time);
			}
			countDownDate.setHours(Number(time) + 7);
			countDownDate.setMinutes(0);
			countDownDate.setSeconds(0);
			countDownDate.setSeconds(0);
			var x = setInterval(function(){
				var now = new Date().getTime();
				var until_done = countDownDate - now;
				if(until_done < 0){
					clearInterval(x);
					selection.text("");
					selection.css('background-color','#00FF00');
					selection.classList.remove("taken");
				}
				var hours = Math.floor((until_done % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  			var minutes = Math.floor((until_done % (1000 * 60 * 60)) / (1000 * 60));
  			var seconds = Math.floor((until_done % (1000 * 60)) / 1000);
				if(hours != 0){
					selection.text(hours +"h " + minutes + "m " + seconds +"s ");
				}
				else{
					if(minutes!=0){
						selection.text(minutes + "m " + seconds +"s ");
					}
					else{
							selection.text(seconds +"s ");
					}
				}
			},1000);
			alert("Washer successfuly reserved.");
			return;
		}
