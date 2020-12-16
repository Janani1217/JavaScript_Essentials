const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    var array = [[  ["firstName", "Vasanth"], 
                    ["lastName", "Raja"], 
                    ["age", 24], 
                    ["role", "JSWizard"]
                ], 
                [   ["firstName", "Sri"], 
                    ["lastName”, “Devi"], 
                    ["age", 28], 
                    ["role", "Coder"]
                ]];
    
    var transformGeekData = function(arr) {
        var temp_arr = [];
        //array of Object
        for(let i in arr){
            let obj = {};
            for(let j in arr[i]){
                obj[arr[i][j][0]] = arr[i][j][1];
            }
            temp_arr.push(obj);
        }
        return temp_arr;
    };
    
    var result = transformGeekData(array);
    console.log(result);
});