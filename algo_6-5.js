//Here is a function used to take an integer and determine whether or not it is a palindrome
var isPalindrome = function(x){

//Here the variables aneeded are set and "x" is turned into a string
    y = x.toString();
    i = 0;
    j = y.length-1;

/* A while loop is used to loop through the integer determining if each indexed value has the same value and if they are, index i increases while j 
decreases*/
    while(y[i] == y[j]){
        i++;
        j--;

//If i and j loop past each other then it's a palindrome otherwise if the values aren't the same, false is returned
        if(i > j){
            return true;
        }
    }
    return false;
}

console.log(isPalindrome(112211));
console.log(isPalindrome(121));
console.log(isPalindrome(1122));
console.log(isPalindrome(112));