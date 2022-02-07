$(document).ready(function(){

	
	$("#toggle_text").text("3D motif from  project start until March 2011");
	$("#prvitoggle").on({  

		mouseenter: function(){
			$("#toggle3D, #toggle_text").animate({height:'200px'});
		},

		mouseleave: function(){
			$("#toggle3D").stop();
			$("#toggle3D").stop();
			$("#toggle3D").animate({height: '0px'});
		}
	});

	
	$("#toggle_text1").text("2D motif from March 2011 to October 2015");
	$("#drugitoggle").on({  

		mouseenter: function(){
			$("#toggle1, #toggle_text1").animate({height:'200px'});
		},

		mouseleave: function(){
			$("#toggle1").stop();
			$("#toggle1").stop();
			$("#toggle1").animate({height:'0px'});
		}
	});

	
	$("#toggle_text2").text("Material Design motif used for mobile after 2014 and for desktop after 2015");
	$("#trecitoggle").on({  

		mouseenter: function(){
			$("#toggle2, toggle_text2").animate({height:'200px'});
		},

		mouseleave: function(){
			$("#toggle2").stop();
			$("#toggle2").stop();
			$("#toggle2").animate({height: '0px'});
		}
	});

});