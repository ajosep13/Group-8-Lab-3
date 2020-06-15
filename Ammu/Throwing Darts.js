/*Question
You've just recently been hired to calculate scores for a Dart Board game!
Scoring specifications:
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!
Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.
An empty array should return 0.*/

//Solution
function scoreThrows(radii){
  var points=0;                       // a variable to calculate the total points
  var bonus=0;                        // a variable to count the bonus
  if(radii.length==0)                  // If the array is empty then return 0
    return 0; 
  else
  {
    for(var i = 0; i < radii.length; i++)  //If the array is not empty then calculate the points
    {
      if(radii[i] > 10)                    //If radius is greater than 10 then add 0 to the total points
        continue;
      else if((radii[i] <= 10) && (radii[i] >= 5)) //If radius is between 5 and 10 then add 5 to the total points
      {
        points+=5;
      }
      else                                //If radius is less than 5 then add 10 to the total points 
      {
      points+=10;
      bonus++;                            //increment the variable that keep tab of bonus
      }
      
    }
    if(bonus==radii.length)              // if all the entries of array is less than 5 then add 100 to the total points
      return (100 + points);
    else                              //else return points
      return points;
  }
}