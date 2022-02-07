var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "./slike/hacked1.jpg";
path[1] = "./slike/hacked2.jpg"; 

function swapImage() 
{ 
	document.slide.src = path[i]; 
	if(i < path.length - 1) i++; 
	else i = 0; 
	setTimeout("swapImage()", 3200); 
} 
window.onload=swapImage;