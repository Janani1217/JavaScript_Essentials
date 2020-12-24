var arr = [2,4,6,7,2,2,4,5,6];

console.log("ANONYMOUS FUNCTION");

var anonym = function(){   
    arr.sort();
    let res =[];
    let count=0;
    let i=0;
    
    while(i<arr.length){
        if(arr[i]!==arr[i+1]){
            res.push(arr[i]);
        }
        i++;
    }
    
    console.log(res);
}
anonym();


console.log("IFFE FUNCTION");

(function(){
    //arr.sort();
    let res =[];
    let count=0;
    let i=0;
    
    while(i<arr.length){
        if(arr[i]!==arr[i+1]){
            res.push(arr[i]);
        }
        i++;
    }
    
    console.log(res);
})();























