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


// back-end logic:

$(document).ready(function()  {
  $("form#add").submit(function(event)  {

    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    alert(add(number1, number2));
  });

});
