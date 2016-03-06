var display = document.getElementById("display");
var display2 = document.getElementById("display2");
var entry = "";
var savedValue = "";
var isValue = false;
var operation = "";
var eqPressed = false;
var operated = false;
var language = "e";
var strings = new Array(2);

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

var equals = document.getElementById("button-=");

var clear = document.getElementById("button-clear");

var roman = document.getElementById("M-");
var binary = document.getElementById("M+");
var ascii = document.getElementById("MR");
var mayan = document.getElementById("MC");
var egypt = document.getElementById("button-pm");

roman.onclick = function(e){language = "r";}
binary.onclick = function(e){language = "b";}
ascii.onclick = function(e){language = "a";}
mayan.onclick = function(e){language = "m";}
egypt.onclick = function(e){language = "e";}

function displayer(varia){
	var transform = varia;
	if(language == "r")
		transform = toRoman(parseFloat(varia));
	if(language == "b")
		transform = toBinary(parseFloat(varia));
	if(language == "a")
		transform = toAscii(parseFloat(varia));
	if(language == "m")
		transform = toMaya(parseFloat(varia));
	if(language == "e")
		transform = toEgypt(parseFloat(varia));
	display.innerHTML = transform;
	display2.innerHTML = varia;
}

function output(number) {
	if(operated){
		isValue = true;
		entry = "";
		operated = false;
	}
	if(eqPressed){
		savedValue = "";
		isValue = false;
		entry = "";
		operation = "";
		eqPressed = false;
	}
	entry = entry + number;
	displayer(entry);
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
		entry = savedValue;
		isValue = false;
		eqPressed = false;
	}
	if(!isValue){
		savedValue = entry;
	}
	else{
		operate();
		displayer(savedValue);
	}
	operation = ope;
	operated = true;
}

function operate(){
	if(operation == "+"){
		savedValue = (parseFloat(savedValue) + parseFloat(entry)).toString();
	}
	else if(operation == "-"){
		savedValue = (parseFloat(savedValue) - parseFloat(entry)).toString();
	}
	else if(operation == "*"){
		savedValue = (parseFloat(savedValue) * parseFloat(entry)).toString();
	}
	else if(operation == "/"){
		savedValue = (parseFloat(savedValue) / parseFloat(entry)).toString();
	}
}

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
		displayer(savedValue);
	}
	else{
		savedValue = entry;
	}
	eqPressed = true;
}

clear.onclick = function(e){
	entry = "";
	savedValue = "";
	isValue = false;
	eqPressed = false;
	operation = "";
	operated = false;
	displayer("0");
}

function toRoman(num) {
	var roman = " ",
		numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
		romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	for (var i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			roman = roman + romanNumeral[i];
			num = num - numbers[i];
		}
	}
	return roman;
}	

function toBinary(num) {
	var binary = (num >>> 0).toString(2);
	return binary;
}

function toAscii(num) {
 	var digits = num.toString().split('');
 	var output = "";
 	var ascii = [0,1,2,3,4,5,6,7,8,9]
 	var asciidict = [" 48 " ," 49 "," 50 "," 51 "," 52 "," 53 "," 54 "," 55 "," 56 "," 57" ]
 	for (i = 0; i < digits.length; i++){
 		output = output + asciidict[(digits[i])];
 	}
 	return output;
 }


function toMaya(num){
 	var maya = " ",
		numbers = [20,15, 10, 5, 1],
		mayaNumeral = [" man ", "foot & hands", "both hands", " hand "," finger "];
	for (var i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			maya = maya + mayaNumeral[i];
			num = num - numbers[i];
		}
	}
	return maya;
}

function toEgypt(num){
 	var egypt = " ",
		numbers = [1000000,100000, 10000, 1000, 100, 10, 1],
		egyptNumeral = [" astonished man ", " tadpole ", " pointing finger ", " lotus flower "," coil of rope ", " heelbone ", " staff "];
	for (var i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			egypt = egypt + egyptNumeral[i];
			num = num - numbers[i];
		}
	}
	return egypt;
}
