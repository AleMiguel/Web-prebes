// Exponente 10^(algo)
var n = 12e2
	document.write(n+("<br>")); // n/0 = Infinity NaN
//Se pueden comparar numeros y caracteres:
	document.write((5 < 10)+"<br>");	
	document.write("lucario" === "Lucario");	
	document.write("<br>"+("Z"<"z")); //Mayusculas son menores a las minusculas	

document.write(n>200 ? "<br> Si" : "<br> No");	//Operador ternario

document.write("<br>"+(""==false)); //Equivalente
document.write("<br>"+(""===false)); //Exactamente 

confirm("Si o No");

var num = Number(prompt("Digita un numero",3)) //Castea a numero

document.write(!isNaN(num)?"<br>"+(num*num):"<br>No es un numero");

do{
	var name = prompt("Cual es tu nombre");
}while(!name)

//Potencia:
var potencia = function(x,y){
	if(y == undefined)
		y=2;
	var result = 1;
		for(var i=0;i<y;i++)
			result*=x;
		return result;
}

document.write("<br>"+potencia(2));
//variables globales y locales:
var x= "Global";

var f1 = function(){
	var x = "Local dentro de f1";
}
	f1();
	document.write("<br>"+x); //Sigue siendo global
var f2 = function(){
	x = "Modificando x desde f2";
}
	f2();
	document.write("<br>"+x);

document.write("<br>Usando una funcion "+algo());	

function algo(){
	return "Algo debajo de ";
}

//Se pueden llamar funciones dentro de funciones pero hay que tener cuidado

function gallina(){
	return huevo();
}

function huevo(){
	return gallina();
}

//console.log("<br>"+gallina()); manda error 
console.log("R",2,"D",3);

function multiplicar(x){
	return function numero(y){
		return x*y;
	}
}

var algo = multiplicar(3);
	document.write("<br>"+algo()); //Sin las () imprime la funcion y asi Nan
document.write("<br>"+algo(2));	 //Revisar traductor pagina 63

var pru = "string".charAt("s"); //Que es charAt

//Metodos de un array:
var arr = [];
	arr.push("Uno");
	arr.push("Dos","Tres");
document.write("<br>"+arr);
	document.write("<br>"+arr.join("_")); //Metodo join une el array a un string. Argumento como los unira
	arr.pop() //Elimina y devuleve el ultimo elemento
//Verificar si hay una variable en un objeto o eliminarla:
	var obje = {uno:1,dos:2};
	console.log("uno" in obje); //True
		delete obje.uno;
	console.log("uno" in obje);//False
