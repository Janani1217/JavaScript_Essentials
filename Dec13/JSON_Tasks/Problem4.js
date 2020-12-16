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
    var arr = ["GUVI","I","am","Geek"];
    
    var transformFirstAndLast = function(array) {
        var obj = {};
        obj[array[0]] = array[array.length -1];
        return obj;
    };
    
    var result = transformFirstAndLast(arr);
    console.log(result);
});