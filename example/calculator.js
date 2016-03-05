var	VALUE	=	0.;
var VALUE2 = undefined;
var MVALUE = 0;
var operation = "";
var decimal = .1 * 10;
var decbool = false;
var base = 0.;
var temp = 0.;
var firsttime = true;
var twonumbers = false;

var clear = document.getElementById("clear");
var plusminus = document.getElementById("plusminus");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var decimal = document.getElementById("decimal");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var equals = document.getElementById("equals");
var mc = document.getElementById("MC");
var mplus = document.getElementById("M+");
var mminus = document.getElementById("M-");
var mr = document.getElementById("MR");

function	display()	{	
	var	el	=	document.getElementById("display");
	var eltwo = document.getElementById("display2");
	el.innerHTML = VALUE;
	eltwo.innerHTML = operation;
}
clear.onclick = function(e){
	VALUE = 0;
	decimal = 1.;
	decbool = false;
	VALUE2 = NaN;
	twonumbers = false;
	display();
	operation = "";
}
function fclear(){
	if(firsttime){
		VALUE = 0;
		decimal = 1.;
		decbool = false;
		display();
	}
	firsttime = false;
}
function step(){
	if(decbool){
		decimal /= 10;
	}
	else
		VALUE *= 10;
}
function opon() {
	if(VALUE != 0){
		VALUE2 = VALUE;
		VALUE = 0;
	}
	decbool = false;
	decimal = 1;
	twonumbers = true;
}
plusminus.onclick = function(e){
	fclear();
	VALUE = -VALUE;
	display();
}
one.onclick = function(e){
	fclear();
	step();
    base = 1;
    VALUE += base*decimal;
	display();
}
two.onclick = function(e){
	fclear();
	step();
    base = 2;
    VALUE += base*decimal;
	display();
}
three.onclick = function(e){
	fclear();
	step();
    base = 3;
    VALUE += base*decimal;
	display();
}
four.onclick = function(e){
	fclear();
	step();
    base = 4;
    VALUE += base*decimal;
	display();
}
five.onclick = function(e){
	fclear();
	step();
    base = 5;
    VALUE += base*decimal;
	display();
}
six.onclick = function(e){
	fclear();
	step();
    base = 6;
    VALUE += base*decimal;
	display();
}
seven.onclick = function(e){
	fclear();
	step();
    base = 7;
    VALUE += base*decimal;
	display();
}
eight.onclick = function(e){
	fclear();
	step();
    base = 8;
    VALUE += base*decimal;
	display();
}
nine.onclick = function(e){
	fclear();
	step();
    base = 9;
    VALUE += base*decimal;
	display();
}
zero.onclick = function(e){
	fclear();
	step();
    base = 0;
    VALUE += base*decimal;
	display();
}
decimal.onclick = function(e){
	fclear();
	decbool = true;
}
divide.onclick = function(e){
	if(twonumbers){
		temp = VALUE2;
		VALUE2 = VALUE;
		VALUE = temp;
		if(operation == "/"){	
			VALUE /= VALUE2;
		}
		else if(operation == "*"){
			VALUE *= VALUE2;
		}
		else if(operation == "+"){
			VALUE += VALUE2;
		}
		else if(operation == "-"){
			VALUE -= VALUE2;
		}
	}
	operation = "/";
	display();
	opon();
}
multiply.onclick = function(e){
	if(twonumbers){
		temp = VALUE2;
		VALUE2 = VALUE;
		VALUE = temp;
		if(operation == "/"){	
			VALUE /= VALUE2;
		}
		else if(operation == "*"){
			VALUE *= VALUE2;
		}
		else if(operation == "+"){
			VALUE += VALUE2;
		}
		else if(operation == "-"){
			VALUE -= VALUE2;
		}
	}
	operation = "*";
	display();
	opon();
}
plus.onclick = function(e){
	if(twonumbers){
		temp = VALUE2;
		VALUE2 = VALUE;
		VALUE = temp;
		if(operation == "/"){	
			VALUE /= VALUE2;
		}
		else if(operation == "*"){
			VALUE *= VALUE2;
		}
		else if(operation == "+"){
			VALUE += VALUE2;
		}
		else if(operation == "-"){
			VALUE -= VALUE2;
		}
	}
	operation = "+";
	display();
	opon();
}
minus.onclick = function(e){
	if(twonumbers){
		temp = VALUE2;
		VALUE2 = VALUE;
		VALUE = temp;
		if(operation == "/"){	
			VALUE /= VALUE2;
		}
		else if(operation == "*"){
			VALUE *= VALUE2;
		}
		else if(operation == "+"){
			VALUE += VALUE2;
		}
		else if(operation == "-"){
			VALUE -= VALUE2;
		}
	}
	operation = "-"
	display();
	opon();
}
equals.onclick = function(e){
	fclear();
	if(operation != ""){
		temp = VALUE;
		VALUE = VALUE2;
		VALUE2 = temp;
	}
	if(operation == "/"){	
		VALUE /= VALUE2;
	}
	else if(operation == "*"){
		VALUE *= VALUE2;
	}
	else if(operation == "+"){
		VALUE += VALUE2;
	}
	else if(operation == "-"){
		VALUE -= VALUE2;
	}
	display();
	twonumbers = false;
}
mc.onclick = function(e){
	MVALUE = 0;
}
mplus.onclick = function(e){
	MVALUE += VALUE;
	VALUE = MVALUE;
	display();
}
mminus.onclick = function(e){
	MVALUE -= VALUE;
	VALUE = MVALUE;
	display();
}
mr.onclick = function(e){
	VALUE = MVALUE;
	display();
}









