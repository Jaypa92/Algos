//Here is a function that takes a string, a letter, and will return the percentage that the letter exists within the string

var percentageLetter = function(s, letter) {

/*Variables are declared. Count to track how many times the letter is in the string and split to store the string with each character as its own 
individual character*/
    count = 0;
    split = s.split("");

//A for loop is used to loop through "split" to count how many times a letter exists within the string
    for(let i = 0; i < split.length; i++){

//If the letter at the index of "i" in "split" is equal to "letter", then "count" gets incremented
        if(split[i] == letter){
            count++;
        }
    }

//"count" divided by the length of "split" multipied by 100 should give the percentage "letter" exists within the given string
    return Math.floor(count / split.length * 100);
};

console.log(percentageLetter("cool", "o"));
console.log(percentageLetter("creeping", "e"));