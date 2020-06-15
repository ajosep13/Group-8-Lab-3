/*Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.*/
function multiples(m, n){
  var multiple=[];             //Declare an array multiple to store the first m multiples of n
  for(var i = 0; i < m; i++)   //For loop to do the multiplication and product to the array
  multiple[i] = n * (i+1);     //multiply n with i+1; here we used i+1 instead of i because the multiplication starts from 1 not 0
  return multiple;             //Return the array
}