//This function takes in an array of numbers and returns whether or not the product of the numbers are positive, negative, or equal to 0
var arraySign = function(nums){

//Here a variable is set to hold the total
    product = nums[0];

    //Here a for loop is used to loop through the array to multiply every number in the array
    for(let i = 1; i < nums.length; i++){
        product = product * nums[i];

//Here our "if statements" determine the output returned. If the product is greater than 0 than 1 is returned
        if(product > 0){
            return 1;

//If the product is less than zero then -1 is returned
        }else if(product < 0){
            return -1;

//If the product is zero then 0 is returned
        }else if(product == 0){
            return 0;
        }
    }
}

console.log(arraySign([1,1,1,1,1,1]));
console.log(arraySign([0,1,2,3,4]));
console.log(arraySign([-1,2,5,6,7]));
