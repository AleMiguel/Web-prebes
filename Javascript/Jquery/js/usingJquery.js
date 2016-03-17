//$(document).ready() --> Asegurarse de que la pagina esta en estado 'manejable',
						// para no tener errores al seleccionar un elemento
						//Funcion anonima: funcion sin nombre y se ejecutara luego luego
$(document).ready(function(){
	//DOM esta listo
    $("div").click(function(){
        //$(this).hide("slow");
    });
    //Ejemplo 2:
    $("#1").css("background-color","blue");
    //$("#1").css({"background-color":"blue","font-size":"150%"});

    $(".choro").click(function(event) {
    	$(this).append("<b>Mucho mas choro</b>")
    });

    /*$("p").mouseenter(function(event) {
    	alert("Tocaste un parrafo ya valiste");
    });*/

    $("#efecto").click(function(event) {
    	var div = $(this); //Hacemos un objeto de nuestro div, para poder usar varios metodos para el mismo div
    	div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });

    $( "#draggable" ).draggable();

    $( "#datepicker" ).datepicker();	

    $( "#accordion" ).accordion();

    $( ".efecto" ).mouseenter(function(event) {
        $(this).animate({ "top": "-=50px" }, "fast" );
    });

    $("#caiste").click(function(event) {
        window.location.replace("http://www.domain.com/home.html");
    });

    
    $("footer").mouseover(function(event) {
        var foot = $(this);
        foot.animate({"backgroundColor": "#F805BA"}, "100");
        foot.animate({"backgroundColor": "#FFFFFF"}, "100");
        foot.animate({"backgroundColor": "#69C93A"}, "100");
    });
});