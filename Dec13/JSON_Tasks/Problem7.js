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
    var expected = {foo: 5, bar: 6};
    var actual = {foo: 5, bar: 9}
    
    function assertObjectsEqual(actual, expected, testname){
        var len1 = Object.keys(actual);
        len1 = len1.length;
        var len2 = Object.keys(expected);
        len2 = len2.length;
        
        if(len1 != len2){
            return "Failed";
        }
        
        //store key values in an array
        var k1 = Object.keys(actual);
        var k2 = Object.keys(expected);
        
        for(let i=0; i<len1; i++){
            if((k1[i] != k2[i]) || (actual[k1[i]]!=expected[k2[i]])){
                return "Failed";
            }
        }
        
        return "Passed";
    }
    
    console.log(assertObjectsEqual(actual, expected, "detects that two objects are equal"));
});