var display = document.getElementById("display");
var entry = "";
var savedValue = "";
var isValue = false;
var operation = "";
var eqPressed = false;

var one = document.getElementById("button-1");
var two = document.getElementById("button-2");
var three = document.getElementById("button-3");
var four = document.getElementById("button-4");
var five = document.getElementById("button-5");
var six = document.getElementById("button-6");
var seven = document.getElementById("button-7");
var eight = document.getElementById("button-8");
var nine = document.getElementById("button-9");
var zero = document.getElementById("button-0");

var plus = document.getElementById("button-+");
var minus = document.getElementById("button--");
var multiply = document.getElementById("button-*");
var divide = document.getElementById("button-/");

var equals = document.getElementById("button-=")

function displayer(varia){
	display.innerHTML = varia;
}

function output(number) {
	if(eqPressed){
		savedValue = "";
		isValue = false;
		entry = "";
		operation = "";
		eqPressed = false;
	}
	entry = entry + number;
	displayer(entry);
	entry = parseFloat(entry);
}

one.onclick = function(e){output('1');}
two.onclick = function(e){output('2');}
three.onclick = function(e){output('3');}
four.onclick = function(e){output('4');}
five.onclick = function(e){output('5');}
six.onclick = function(e){output('6');}
seven.onclick = function(e){output('7');}
eight.onclick = function(e){output('8');}
nine.onclick = function(e){output('9');}
zero.onclick = function(e){output('0');}

function operator(ope){
	if(eqPressed){
		savedValue = entry;
		entry = "";
	}
	if(isValue){
		operate();
	}
	savedValue = entry;
	operation = ope;
	isValue = true;
	entry = "";
}

// assuming operation != "", assuming entry and savedValue both have fields
function operate(){
	if(operation == "+"){
		entry = (parseFloat(savedValue) + parseFloat(entry)).toString();
	}
	else if(operation == "-"){
		entry = (parseFloat(savedValue) - parseFloat(entry)).toString();
	}
	else if(operation == "*"){
		entry = (parseFloat(savedValue) * parseFloat(entry)).toString();
	}
	else if(operation == "/"){
		entry = (parseFloat(savedValue) / parseFloat(entry)).toString();
	}
	savedValue = "";
	isValue = false;
	displayer(entry);
}
//ends with savedValue = "", isValue = false, operation = ""

plus.onclick = function(e){operator('+');}
minus.onclick = function(e){operator('-');}
multiply.onclick = function(e){operator('*');}
divide.onclick = function(e){operator('/');}

equals.onclick = function(e){
	if(operation != ""){
		if(!isValue){
			isValue = true;
			savedValue = entry;
		}
		operate();
		eqPressed = true;
	}
}