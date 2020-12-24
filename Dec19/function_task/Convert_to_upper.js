    var arr = ['kavita' , 'janani', 'komal'];

    console.log("ANONYMOUS FUNCTION OUTPUT");
    
    //anonymous
    var anonym = function(arr){
        for(let i in arr){
            arr[i] = arr[i].toUpperCase();
        }
    }
    anonym(arr);
    console.log(arr);
    
    console.log("IFFE FUNCTION OUTPUT");
    
    //iife
    var arr1 = ['kara' , 'kullu', 'manali'];
    (function(arr) {for(let i in arr1){
            arr1[i] = arr1[i].toUpperCase();
        }})(arr1);
     console.log(arr1);