function addLength(str)
{
var word_wise=[];
word_wise=str.split(" "); //split function refered from w3school.com. split is used to separate each word to an array 
for(var i=0;i<word_wise.length;i++) //Loop to take each word separately and add length to it
{
word_wise[i]=word_wise[i]+" "+word_wise[i].length; // concatenate the word with a space then length of the word at the end
}
return word_wise; //return the modified string

}