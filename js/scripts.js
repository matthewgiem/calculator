// declaring all variables for all inputs
var calc;
var number1;
var number2;
var result;

// function adds two numbers
var add = function(number1, number2) {

  return number1 + number2;

};



// function subtracts two numbers
var subtract = function(number1, number2) {

  return number1 - number2;

};



// function multiples two numbers
var multiply = function(number1, number2) {

  return number1 * number2;

};

// function divides two numbers
var divide = function(number1, number2) {

  return number1 / number2;

};

// Decide which function to return
var calculate = function() {
  if(calc === "add") {
    result = add(number1, number2);
  } else if(calc === "subtract") {
    result = subtract(number1, number2);
  } else if(calc === "multiply") {
    result = multiply(number1, number2);
  } else if(calc === "divide") {
    result = divide(number1, number2);
  } else {
    result = "What do you want to do with your numbers?????";
  }
};

// back-end logic:

$(document).ready(function()  {
  $("form#calc").submit(function(event)  {
    event.preventDefault();
    calc = $("input:radio[name=fn]:checked").val();
    number1 = parseInt($("#num1").val());
    number2 = parseInt($("#num2").val());
    console.log("num1 =" + number1); //debug
    console.log("num2 =" + number2); //debug
    console.log("fn =" + calc); //debug
    calculate();
    $("#output").text(result);
  });

});
