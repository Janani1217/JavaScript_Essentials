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
    var object = {name: "RajiniKanth", age: 33, hasPets : false};
    var printAllKeys = function()
    {    
        console.log(Object.keys(object));
    }
    printAllKeys();
});
