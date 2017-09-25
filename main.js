$(document).ready(function(){

	console.log("ready to go");
// ================================================
// Off button
	$("#off").click(function(){
		$("#main").css("display", "none");
	});
// ================================================
// CE button/reset
	$("#ce").click(function(){
		resetInput();
		counter = 0;
		result = 0;
		nextVal = 0;
	});
// ================================================
	var value = [];
	var input, result = 0;
	var nextVal = 0;
	var counter = 0;
	var operation;

	function putValue(number){
		value.push(number);
		console.log(value);
		if (value[0] == "."){
			value[0]=0;
			value[1]= "."
		};
		input = parseFloat(value.join(""));
		document.getElementById("result").innerHTML = input;
		console.log(input);
	};

	function resetInput(){
		input = 0;
	    value = [];
		document.getElementById("result").innerHTML = input;
	};

	function displayResult(){
		document.getElementById("result").innerHTML = result;
	};

	$("button#one").click(function(){
		putValue(1);
	});
	$("button#two").click(function(){
		putValue(2);
	});
	$("button#three").click(function(){
		putValue(3);
	});	
	$("button#four").click(function(){
		putValue(4);
	});
	$("button#five").click(function(){
		putValue(5);
	});
	$("button#six").click(function(){
		putValue(6);
	});
	$("button#seven").click(function(){
		putValue(7);
	});
	$("button#eight").click(function(){
		putValue(8);
	});
	$("button#nine").click(function(){
		putValue(9);
	});
	$("#zero").click(function(){
		if (value.length>=1){
			putValue(0);
		}
	});
	$("#dot").click(function(){
		putValue(".");
	});
// ================================================
// Addition
	$("#add").click(function(){
		operation = "add";
		counter += 1;
		if(counter <= 1){
			result += input;
			resetInput();
		} else {
			nextVal += input;
			resetInput();
			result += nextVal;
			nextVal = 0;
			// console.log("add "+ result);
			displayResult();		
		}		
	});

// ================================================
// Substraction
	$("#sub").click(function(){
		operation = "sub";
		counter += 1;
		if(counter <= 1){
			result += input;
			resetInput();
		} else {
			nextVal += input;
			resetInput();
			result -= nextVal;
			nextVal = 0;
			// console.log("subRes "+ result);
			displayResult();		
		}
	});
// ================================================
// Multiplication
	$("#mult").click(function(){
		operation = "mult";
		// console.log("res " + result + " input " + input + " counter " + counter); 
		counter += 1;
		if(counter <= 1){
			result += input;
			resetInput();
		} else {
			nextVal += input;
			resetInput();
			result *= nextVal;
			nextVal = 0;
			// console.log("mult "+ result);
			displayResult();		
		}
	});
// ================================================
// Devision
	$("#division").click(function(){
		operation = "division";
		counter += 1;
		if(counter <= 1){
			result += input;
			resetInput();
		} else {
			/*if (input == 0){
				alert("Devision by zero is not alloved");
				counter = 0;
				resetInput();
			}*/
			nextVal += input;
			resetInput();
			result /= nextVal;
			nextVal = 0;
			// console.log("division "+ result);
			displayResult();		
		}
	});
// ================================================
// SQR
	$("#sqr").click(function(){
		result += input * input; 
		// console.log("sqr " + result);
		displayResult();		
	});
// ================================================
// SQRT
	$("#sqrt").click(function(){
		result += Math.sqrt(input);
		// console.log("sqrt " + result);
		displayResult();		
	});
// ================================================
// = = = = = equal = = = = = 
	$("#equal").click(function(){
			switch(operation){
				case "add":
					nextVal += input;
					resetInput();
					result += nextVal;
					nextVal = 0;
					// console.log("add "+ result);
					displayResult();
					// console.log(" + + + ");
				break;
				case "sub":
					nextVal += input;
					resetInput();
					result -= nextVal;
					nextVal = 0;
					// console.log("subRes "+ result);
					displayResult();
					// console.log(" - - - ");
				break;
				case "mult":
					nextVal += input;
					resetInput();
					result *= nextVal;
					nextVal = 1;
					// console.log("mult "+ result);
					// console.log(" * * * ");
					displayResult();
				break;
				case "division":
					/*if (input == 0){
						alert("Devision by zero is not alloved");
						counter = 0;
						resetInput();
					}*/
					nextVal += input;
					resetInput();
					result /= nextVal;
					nextVal = 1;
					// console.log("division "+ result);
					displayResult();		
					// console.log(" / / / ");
		
			};
	});

	/*var number = document.getElementById("#five");

	switch(number){
		case "#five":
		console.log("five")
	}*/
});