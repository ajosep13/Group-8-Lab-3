function uniqueSum(lst){
var i;
var j;
var sum=0; // to get the unique numbers
var f=0;    //change value when a duplicate is found
if(lst.length==0) //return null if the array is empty
return null;
for(i=0;i<lst.length-1;i++)//To take each element of array
 {
   f=0;                    // f set to 0, 0 means no duplicate
   for(j=i+1;j<lst.length; j++) //to check duplicate
       if(lst[i] == lst[j]) //check the current element with all other element
           f++;  //if any duplicate found change the value of f from 0
   if(f==0)      //to make sure no duplicate is taken to calculate sum
   sum= sum+lst[i]; //add unique numbers
 }
sum=sum+lst[lst.length-1];  // add the last left out number
return sum;        // return sum
}