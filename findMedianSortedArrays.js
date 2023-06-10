//This is a function that finds the median of two sorted arrays

var findMedianSortedArrays = function(nums1, nums2){

//Here a variable is declared with the values of the two arrays combined, then sorted
    nums = nums1.concat(nums2);

//An "if statement" is used to set the conditionals for further instructions pending on whether the length of "nums" is evenly divisible by two
    if(nums.length % 2 != 0){

/*If the length of "nums" is not evenly divisible by two then we declare "i" as the length divided by 2 rounded down and return the indexed value of "i"
in "nums" */
        i = Math.floor(nums.length / 2);
        return nums[i];

/*Else if the length of "nums" is evenly divisible by 2 then we set "i" as half the length minus 1 then we set "j" to be half the length*/ 
    }else{
        i = nums.length / 2 - 1;
        j = nums.length / 2;

/*After setting the variables, we set the varible "median" as the median of nums which is the indexed value of "nums" at "i" plus "j" divided by 2 and
then return it */
        median = (nums[i] + nums[j]) / 2;
        return median;
    }
    
}

console.log(findMedianSortedArrays([1,2,3,7],[4,5,6,9]));
console.log(findMedianSortedArrays([3,6,7,8],[9,1,2]));