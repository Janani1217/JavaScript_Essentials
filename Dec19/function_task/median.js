var arr1 = [2,4,6,7];
var arr2 = [1,5,8,9];

console.log("ANONYMOUS FUNCTION");

var anonym = function(){   
    let res = arr1.concat(arr2);
    res = res.sort();
    let n = res.length;
    let mid = n/2;

    if(n%2===0){
        let result = res[mid]+res[mid-1];
        result = result/2;
        console.log(result);
    }else{
        let result = res[mid];
        console.log(result);
    }
}
anonym();


console.log("IFFE FUNCTION");

(function(){
    let res = arr1.concat(arr2);
    res = res.sort();
    let n = res.length;
    let mid = n/2;

    if(n%2===0){
        let result = res[mid]+res[mid-1];
        result = result/2;
        console.log(result);
    }else{
        let result = res[mid];
        console.log(result);
    }
})();