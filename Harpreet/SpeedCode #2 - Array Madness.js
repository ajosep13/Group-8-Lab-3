function arrayMadness(a, b) {
  var sumSq=0; //to add the sum of squares of each element of array a
  var sumCb=0;//to add the sum of cube of each element of array b
  var i;
  for(i=0; i<a.length; i++) //loop to add square of each element of a
  sumSq=sumSq+a[i]**2;
  for(i=0; i<b.length;i++) //loop to add cube of each element of b
  sumCb=sumCb+b[i]**3;
  if(sumSq>sumCb) //Check whether the sum of squares is greater than sum of cubes and if yes then return true
  return true; 
  else           // if the condition fails then return false
  return false;  
}