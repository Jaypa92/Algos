//This is a function that determines if an arithmetic progression can be made from a given sequence of numbers

var Functioning = function(arr){
//Using the sort method, the given numbers are put in sequential order. Then a variable is declared as an array to hold the differences of the values
    nums = arr.sort();
    set= [];

//A for loop is used to loop through the last index and the next to last index 
    for(let i = nums.length-1; i > 0; i--){

//A variable "diff" is used to store the value of the differences between each index
        diff = nums[i] - nums[i-1];

//If the variable set includes the same value as "diff" then it returns true
        if(set.includes(diff)){
            return true;

//If the set already has a value and doesn't have the same value as "diff" then the differences aren't the same and false is returned
        }else if(set.length == 1 && !set.includes(diff)){
            return false;

//If the set does't have a value then a value is pushed into it
        }else{
            set.push(diff);
        }
    }
}

console.log(Functioning([1,3,5]));
console.log(Functioning([1,2,8]));
console.log(Functioning([6,4,2]));
console.log(Functioning([6,3,2]));