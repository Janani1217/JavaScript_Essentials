// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    //var object = {name: "RajiniKanth", age: 33, hasPets : false};
    var array = [["make","Ford"], ["model","Mustang"], ["year",1964]];
    
    var fromListToObject = function(arr) {
        var obj = {};
        
        for(let i in arr){
            obj[arr[i][0]] = arr[i][1];
        }
        
        return obj;
    };
    
    var result = fromListToObject(array);
    console.log(result);
});