/*Question
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least *4*** .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).*/

//solution
function menFromBoys(arr){
 var men=[];        //to store even numbers in ascending order
 var boys=[];        //to store odd numbers in descending order
 var men_boys=[];    //to combine both arrays men and boys
 var j=0, k=0, i=0;
 if(arr.length>=4)    //satisfies the condition array length should be greater than 4
 {
  arr=duplicate(arr);  //function to remove duplicate of the elements
  for(i = 0; i < arr.length; i++)// to extract each elemet of array
   {
     if(arr[i]%2 == 0)            //condition true menas even and false means odd
      {
         men[j++]=arr[i];      //add even number to the array men
       }
     else
         boys[k++]=arr[i];    // add odd number to the array odd
   }
  men=sorting(men,"ascend");    //to sort array men in ascending order
  boys=sorting(boys,"descend");  //to sort array in descending order
  for(i=0; i < men.length; i++)   //take the content of array men to the array men_boys
      men_boys[i] = men[i];
  for(i=men.length, j=0; i < (men.length + boys.length); i++,j++) //take the content of array boys to array men_boys
      men_boys[i]=boys[j];
  return men_boys;        //return the merged array
  }
}

function duplicate(arr)
{
var k=0,i,j,flag=0;//k, i, j are loop variables and flag is used to identify the dulpicates
var ar=[];        //array to store all the unique elements
for(i=0;i<arr.length-1;i++)  //to take each element
 {
   flag=0;                      // to reset the variable flag after each iteration
   for(j=i+1;j<arr.length; j++)//to compare the current element with other elements
   {
       if(arr[i] == arr[j]) //if the elements duplicates then change the value of flag
       flag++;              
   }
   if(flag==0)              //to make sure there is only one entry for every element
   ar[k++]=arr[i];          //unique elements are stored in the array
 }
ar[k]=arr[arr.length-1];    //to insert the last element to the array
return ar;                  //return the array without duplicates
}


function sorting(a,b)   //a is an array and b is a string to indicate ascending or descending order
{
var i,j,t;              //i and j are loop variables and t is a temporary variables used for swapping
  switch (b)            // to consider the string b
    {
    case "ascend":      //if string b is ascend
    for (i = 0; i < a.length-1; i++)             //to have a.length-1 passes for sorting 
    for (j = 0; j < a.length-i-1; j++)           //to sort and take the largest elemets to right side
  
    if (a[j] > a[j+1])                            //compare adjacent elements and make sure that element in the jth position is less than element in the j+1th position  
    {
            t=a[j];                               //swap 
            a[j]=a[j+1];
            a[j+1]=t;
    }
    break;
    case "descend":      //if string b is descend
    for (i = 0; i < a.length-1; i++)            //to have a.length-1 passes for sorting   
    for (j = 0; j < a.length-i-1; j++)            //to sort and take the largest elemets to right side
  
    if (a[j] < a[j+1])  //compare adjacent elements and make sure that element in the jth position is greater than element in the j+1th position 
    {
            t=a[j];      
            a[j]=a[j+1];    //swap
            a[j+1]=t;
    }
    break;
    }
    return a;      //return the sorted array
         
}
