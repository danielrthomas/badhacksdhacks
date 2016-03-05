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

var values = [];
var decbool = [];
var decimal = [];
var valid = [];
valid.push(false);
values.push(0);
decbool.push(false);
decimal.push(1);
var index = 0;
var MVALUE = 0;
var operation = "";

function pushval(){
	valid.push(false);
	values.push(0);
	decbool.push(false);
	decimal.push(1);
}
function popval(){
	valid.pop();
	values.pop();
	decbool.pop();
	decimal.pop();
}
function display(value){
	var el = document.getElementById("display");
	el.innerHTML = value;
}
function step(spot){
	if(decbool[spot])
		decimal[spot] /= 10;
	else
		values[spot] *= 10;
}
function press(base){
	valid[index] = true;
	step(index);
	values[index] += base * decimal[index];
	display(values[index]);
}
function operate(){
	if(values.length > 1){
		if(operation == "+")
			values[0] += values[1];
		else if(operation == "-")
			values[0] -= values[1];
		else if(operation == "*")
			values[0] *= values[1];
		else if(operation == "/")
			values[0] /= values[1];
	}
}
function operationf(charin){
	if(index > 0)
		if(valid[index]){
			operate();
			popval();
			pushval();
			index = 1;
		}
	else{
		if(valid[index]){
			pushval();
			index = 1;
			valid[index] = true;
			operation = charin;
		}
	}
	display(values[0]);
}
zero.onclick = function(e){
	press(0);
}
one.onclick = function(e){
	press(1);
}
two.onclick = function(e){
	press(2);
}
three.onclick = function(e){
	press(3);
}
four.onclick = function(e){
	press(4);
}
five.onclick = function(e){
	press(5);
}
six.onclick = function(e){
	press(6);
}
seven.onclick = function(e){
	press(7);
}
eight.onclick = function(e){
	press(8);
}
nine.onclick = function(e){
	press(9);
}
decimal.onclick = function(e){
	decbool[index] = true;
}
plusminus.onclick = function(e){
	values[index] = -values[index];
	display(values[index]);
}
plus.onclick = function(e){
	operationf("+");
}
minus.onclick = function(e){
	operationf("-");
}
multiply.onclick = function(e){
	operationf("*");
}
divide.onclick = function(e){
	operationf("/");
}
mc.onclick = function(e){
	MVALUE = 0;
}
mplus.onclick = function(e){
	MVALUE += values[index];
	display(MVALUE);
	values[index] = MVALUE;
}
mminus.onclick = function(e){
	MVALUE -= values[index];
	display(MVALUE);
	values[index] = MVALUE;
}
mr.onclick = function(e){
	values[index] = MVALUE;
	display(MVALUE);
}
clear.onclick = function(e){
	for(i = 0; i < values.length; i++){
		popval();
	}
	pushval();
	index = 0;
	valid[index] = true;
	display(values[index]);
	operation = "";
}
equals.onclick = function(e){
	if(values.length > 0){
		if(valid[index]){
			operate();
			popval();
			index = 0;
		}
	}
	else if(operation != ""){
		pushval();
		values[1] = values[0];
		operate();
		popval();
		index = 0;
	}
	display(values[index]);
}



