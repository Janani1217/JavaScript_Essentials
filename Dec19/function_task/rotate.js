console.log("ANONYMOUS FUNCTION");

var anonym = function(){   
    let arr = [3,5,1,2,6,7,8,9,4,11,13,10];
    let k = 2;
    
    while(k--){
        let val = arr.pop();
        arr.unshift(val);
    }
    
    console.log(arr);
}
anonym();


console.log("IFFE FUNCTION");

(function(){
 let arr = [3,5,1,9,4,11,13,10];
    let k = 4;
    
    while(k--){
        let val = arr.pop();
        arr.unshift(val);
    }
    
    console.log(arr);
})();