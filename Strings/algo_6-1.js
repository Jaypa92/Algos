//This is a function that tests an array of strings for the longest common prefix within each of the strings

var longestCommonPrefix=function(strs){

//Here some variables are declared to start an incrementing variable "i" and the first string for comparison "prf"
    let i = 0;
    let prf = strs[0];

//Here a while loop was used to loop through each of the strings to search for the values of "prf"  
    while(i < strs.length ){

//If the string didn't start with the value of "prf" then the slice method was used to take off values from the end of "prf" until it did
        if(!strs[i].startsWith(prf)){
            prf = prf.slice(0 , -1)

//After finding the common prefix from one string, "i" increments to start the loop over to test the next value in the array of strings
        }else{
            i++;
        }
    }

//The common prefix from all strings in the array is returned
    return prf;
}

console.log(longestCommonPrefix(["horse","howdy","home"]));