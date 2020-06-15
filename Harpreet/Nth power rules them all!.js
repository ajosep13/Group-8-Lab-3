function modifiedSum(a, n) {
 var sumOfP=0, sum=0;// sumOfP is used to store the sum of each value to the nth power and sum is used to store the sum of elements in the original array
 for(var i=0; i<a.length;i++)// Loop to get each number in the array separately
  {
    sumOfP=sumOfP+(a[i]**n); //calulate the sum of each value to the nth power
    sum=sum+a[i]; //calculate the sum of each value
  }
  return (sumOfP-sum); // return the difference
}