//Made a function to find the longest substring without any repeated values within a string and return the length of it

var lengthOfLongestSubString = function(s){

//Here we have our variables defined
    let set = new Set();
    let i = 0;
    let j = 0;
    let max = 0;

//Used a while loop that will run while the variable "j" is less than the length of "s"
    while(j < s.length){

/*If the set doesn't contain the letter at index "j" within the string, then j is added to the set 
then is increased and max becomes the bigger value between the current value of "max" or j - i*/
        if(!set.has(s[j])){
            set.add(s[j]);
            j += 1;
            max = Math.max(max, j-i);

/*If the value at the index of "j" does exist within the set then it gets deleted from the set and "i"
increments*/ 
        }else{
            set.delete(s[i]);
            i++;
        }
    }
//After the while loop the max is returned
    return max;
}

console.log(lengthOfLongestSubString("byetrbbinnnnnlllllmnbvcxz"))