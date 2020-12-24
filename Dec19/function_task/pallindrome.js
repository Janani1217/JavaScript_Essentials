var arr = ['212','1313','546','565','5665','89985','575'];
    
console.log("ANONYMOUS FUNCTION OUTPUT");

//anonymous
var anonym = function(arr){
    for(let i in arr){
        
        let last=(arr[i].length)-1;
        let condition = 0;
        let j=0;
        
        while(j<=last){
            if(arr[i][j] != arr[i][last]){
                condition++;
               // break;
            }
            last--;
            j++;
        }
        
        if(condition===0){
            console.log(arr[i]);
        }
    }
}
anonym(arr);

console.log("IFFE FUNCTION OUTPUT");

//iife
(function(arr) {for(let i in arr){
        
        let last=(arr[i].length)-1;
        let condition = 0;
        let j=0;
        
        while(j<=last){
            if(arr[i][j] != arr[i][last]){
                condition++;
               // break;
            }
            last--;
            j++;
        }
        
        if(condition===0){
            console.log(arr[i]);
        }
    }
})(arr);
