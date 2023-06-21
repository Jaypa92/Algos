/* Here a function is made so that when the function of the instance of the "Array" class is used, it will return the last item in the array or -1 
if the "Array" object is empty */
class Array {
    constructor(arr) {
        this.arr = arr;
    }

    last(arr) {

/* An "if statement" is used to determine the output. If the length of the array is 0 then it returns -1. Else if the array's length isn't equal to zero
then the function returns the last item in the array */
        if (arr == 0) {
            return -1;
        } else {
            return arr[arr.length - 1];
        }
    };
}

Arr = new Array([1,2,7]);
empty = new Array([])
console.log(Arr.last(Arr.arr));
console.log(empty.last(empty.arr));