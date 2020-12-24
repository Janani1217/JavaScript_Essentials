var arr = [2,3,4,5,6,7,8,9,1];
    
console.log("ANONYMOUS FUNCTION OUTPUT");

//anonymous
var anonym = function(arr){
    for(let i in arr){
        let c=0;
        for(let j =2; j<=Math.sqrt(arr[i]); j++) {
            if(arr[i]%j === 0){
                c++;
            }
        }
        if(c===0){
            console.log(arr[i]);
        }
       // c=0;
    }
}
anonym(arr);

console.log("IFFE FUNCTION OUTPUT");

//iife
(function(arr) {for(let i in arr){
        let c=0;
        for(let j =2; j<=Math.sqrt(arr[i]); j++) {
            if(arr[i]%j === 0){
                c++;
            }
        }
        if(c===0){
            console.log(arr[i]);
        }
       // c=0;
    }
})(arr);