var arr = [2,3,4,5,6,7,8,9,1];
    
console.log("ANONYMOUS FUNCTION OUTPUT");

//anonymous
var anonym = function(arr){
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    console.log(sum);
}
anonym(arr);

console.log("IFFE FUNCTION OUTPUT");

//iife
(function(arr) {let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    console.log(sum);
})(arr);
