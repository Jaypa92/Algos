//Here is a function that removes any characters that isn't a letter or a number within a given string and returns whether or not it is a palindrome

var isPalindrome = function(s){

    //A variable is declared as the given string with all characters that isn't a number or letter removed and lowercases all capital letters 
       let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    
    /*Another variable is declared taking the first variable and splitting the string components as individual characters so the order can be reversed,
    then joining them back into a single string*/
       revString = newStr.split("").reverse().join("");
    
    //If the second variable is the same as the first then it is a palindrome
       return revString === newStr;
    }
    
    console.log(isPalindrome("racecar"));
    console.log(isPalindrome("race:::Car"));
    console.log(isPalindrome("cab"));