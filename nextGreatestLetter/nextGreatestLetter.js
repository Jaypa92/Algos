//Here is a function that returns the next greatest letter than the target letter in an array

var nextGreatestLetter = function(letters, target){

    //The sort method is used to arrange the letters in the array alphabetically
        sorted = letters.sort();
    
    //A for loop is used to iterate through the array and the very first value that is greater than the target will be returned
        for(let i = 0; i < sorted.length; i++){
            if(sorted[i] > target){
                return sorted[i];
            }
        }
    
    //If none of the letters are greater than the given target, then the first value is returned
        return sorted[0];
    }
    
    console.log(nextGreatestLetter(["y","g","d"], "b" ));
    console.log(nextGreatestLetter(["a", "c","v"], "z"))
