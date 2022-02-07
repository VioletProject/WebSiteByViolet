$(document).ready(function(){

  var quotes = [
        "Google Chrome crash",
        "Google Chrome Task Manager",
        ];
        
        var i = 0;
        
        setInterval(function() {
            $("#textslide").html(quotes[i]);
            if (i < quotes.length - 1)
                i++;
            else
                i=0;
        }, 3000);

}); 