//This is a function that checks to see if a given string of parenthesis, brackets, or curly braces have all closing values for each opening value

var isValid = function(s){
//Sets an array that can hold values or have them popped
    let holder = [];

//This for loop traverses through each value in string "s" and pushes the closing value for each opening value at the index of "i"
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            holder.push(')');
        }else if (s[i] == '['){
            holder.push(']');
        }else if (s[i] == '{'){
            holder.push('}');

//The final "else if" statement pops the last value in "holder" and if the value after the opening value isn't closed in string "s", the result is false
        }else if (holder.pop() !== s[i]){
            return false;
        }
    }

//The length of the array "holder" should be false with all values removed so it would return true 
    return !holder.length;
}

console.log(isValid('{}{}{}{}()()()()[][][][][]'));
console.log(isValid('{}{}[][['));