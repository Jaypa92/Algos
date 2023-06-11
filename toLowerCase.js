//Here is a function that takes in a given string "s" and returns it with all capitalized letters as lowercase

var toLowerCase = function (s) {

//Here a couple of variables are declared."string" to hold the given strings characters split individually and "result" to hold the result
    string = s.split("");
    let result = [];

//A for loop is used to iterate through each of the characters in "string" to make each one lowercased then pushed into result
    for (let i = 0; i < string.length; i++) {
        x = string[i].toLowerCase();
        result.push(x);
    }

//Finally the rersult is returned with all of the characters joined together to form a single string
    return result.join("");
}

console.log(toLowerCase("Hello"));