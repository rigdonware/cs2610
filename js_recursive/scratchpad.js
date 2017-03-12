document.title = "Fib Trib and Pell";

//function to properly calculate the fibonnaci sequence.
function fibHelper(n) {
	var value;
	var div = document.createElement('div')
	div.setAttribute("class", "fib");

	//if the value is 1 or 0, return that value.
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	//otherwise, properly calculate the fibonacci sequence and return that value.
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

//calls fibHelper to properly calculate the pell equation and display on screen.
var fib = function (n, node) {
	var tree = fibHelper(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "fib");
}

//function to properly calculate the tribonacci sequence.
var tribHelper = function(n){
 	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "trib");

  //if the value is 2, return 1. If value is less than 2, return 0
	if (n <= 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 0;
		}
		else if (n === 2){
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	//otherwise, call the tribonnaci helper to properly calculate the tribonnaci sequence and return value.
	else {
		var first = tribHelper(n - 1);
		var clas = first.html.getAttribute("class");
		first.html.setAttribute("class", clas + " fib-left");
		
		var second = tribHelper(n - 2);
		clas = second.html.getAttribute("class");
		second.html.setAttribute("class", clas + " fib-middle");

    var third = tribHelper(n - 3);
		clas = third.html.getAttribute("class");
		third.html.setAttribute("class", clas + " fib-right");
    
		value = first.value + second.value + third.value;
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(first.html);
		div.appendChild(second.html);
    div.appendChild(third.html);
	}
	return { 'value': value, 'html': div };
}

//calls tribHelper to properly calculate the pell equation and display on screen.
var trib = function(n, node){
  var tree = tribHelper(n);
  node.appendChild(tree.html);
  node.setAttribute("id", "trib");
}

//function to properly calculate the pell equation.
var pellHelper = function (n){
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "pell");

	//if the value is 1 or less, return that value.
	if (n <= 1) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	//otherwise, calculate the pell equation and return that value.
	else {
		var first = pellHelper(n - 1);
		var clas = first.html.getAttribute("class");
		first.html.setAttribute("class", clas + " fib-left");
		
		var second = pellHelper(n - 2);
		clas = second.html.getAttribute("class");
		second.html.setAttribute("class", clas + " fib-right");
    
		value = (2 * first.value) + second.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(first.html);
		div.appendChild(second.html);
	}
	return { 'value': value, 'html': div };
}

//calls pellhelper to properly calculate the pell equation and display on screen.
var pell = function(n, node){
	var tree = pellHelper(n);
	node.appendChild(tree.html);
	node.setAttribute("id", "pell");
}


var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 13000px;" +
	"}" +
  "" +
  "#pell {" +
	"	display: inline-block;" +
	"	width: 13500px;" +
	"}" +
	"" +
	"#trib {" +
	"	display: inline-block;" +
	"	width: 35000px;" +
	"}" +
	"" +
	".trib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
  ".pell {" +
	"	background-color: rgba(0,255,0,0.1);" +
	"}" +
  "" +
  ".fib {" +
	"	background-color: rgba(255,0,0,0.1);" +
	"}" +
  "" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
	".fib-middle {" +
	"	float: center;" +
	"	display: inline-block;" +
	"	margin-left: 2px;" +
  "	margin-right: 2px;" +
	"}" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,0,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);



// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
//used divmaker class used in class.
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

//create the three div tags.
var blueDiv = divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'trib');
var redDiv = divMakerMaker('red', 'pell');

blueDiv();
yellowDiv();
redDiv();

//function to add hyperlinks to the webpage.
var addLinks = function(link, title){
  var hyperLink = document.createElement('a');
  hyperLink.appendChild(document.createTextNode(title));
	hyperLink.title = link;
	hyperLink.href = link;
  document.body.appendChild(hyperLink);
	document.body.appendChild(document.createTextNode('\n'));
}

//call the three functions to display and calculate fibonacci, tribonacci, and pell.
fib(11, document.querySelector('.blue'));
trib(11, document.querySelector('.yellow'));
pell(11, document.querySelector('.red'));

//call the addlink function to display hyperlinks.
addLinks('https://oeis.org/A000045', 'Calculating Fibonacci');
addLinks('https://oeis.org/A000129', 'Calculating Pell');
addLinks('https://oeis.org/A000073', 'Calculating Tribonacci');
