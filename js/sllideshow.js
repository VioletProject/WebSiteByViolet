var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "./slike/Task_Manager-Google_Chrome.png";
path[1] = "./slike/Chrome_crash.png"; 

function swapImage() 
{ 
	document.slide.src = path[i]; 
	if(i < path.length - 1) i++; 
	else i = 0; 
	setTimeout("swapImage()", 3000); 
} 
window.onload=swapImage;