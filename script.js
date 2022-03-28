// Always Hungry

function alwaysHungry(arr) {
    let hungry = true;
    let output = ""
    // go through the arrays using a for loop
    for (var i = 0; i < arr.length; i++) {
        // every element that is food, change to yummy
        if (arr[i] === "food") {
            output += 'Yummy'
            hungry = false
        }
    }
    if(!hungry){
        return output+'.';
    }else {
        return 'I am hungry'
    }
}

console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));
// this should be console log yummy, yummy

console.log(alwaysHungry([4, 1, 5, 7, 2]));
// this should console log im hungry

// High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    // go through the array using a for loop
    for (var i = 0; i < arr.length; i++) {
        // if a value is less than 5 then utilize pop to remove
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
            //  arr.pop(); we push instead of pop because we are making a new array
        }
    }
    // return array with numbers above cut off
    return filteredArr;

}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better than Average

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
     var average = sum/arr.length;
     //sort array with this
    for(var a = 0; i < arr.length; i++){
        if(arr[a] > average){
            count += 1
             console.log()
            //  something is wrong in here look at this^
        }
    }
    return count;

    // for(count + 1)
    // (arr[i] > average){
    // }
    // for(arr.length)
    
    // return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse

function reverse(arr) {
    for(let i=0; i < Math.floor(arr.length/2); i++){
        var x = arr[i] 
        var y = arr[arr.length-1-i]
        arr[i] = y
        arr[arr.length-1-i] = x
    }
    
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci Array 

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i=2; i < n; i++){
        var x = fibArr[i - 2];
        var y = fibArr[i - 1];
        fibArr.push(x + y);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



