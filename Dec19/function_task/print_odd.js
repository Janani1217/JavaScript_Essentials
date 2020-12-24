var arr = [2,3,4,5,6,7,8,9,1];
    
console.log("ANONYMOUS FUNCTION OUTPUT");

//anonymous
var anonym = function(arr){
    for(let i in arr){
        if(arr[i]%2 !== 0){
          console.log(arr[i]);   
        }
    }
}
anonym(arr);

console.log("IFFE FUNCTION OUTPUT");

//iife
(function(arr) {for(let i in arr){
        if(arr[i]%2 !== 0){
          console.log(arr[i]);   
        }
    }})(arr);


























