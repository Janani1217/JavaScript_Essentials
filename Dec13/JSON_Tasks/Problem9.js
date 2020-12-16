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
    var students = [
    {
        name: "Siddharth Abhimanyu", 
        age: 21
        
    }, 
    { 
        name: "Malar", 
        age: 25
        
    },
    {
        name: "Maari",
        age: 18
        
    },
    {
        name: "Bhallala Deva",
        age: 17
        
    },
    {
        name: "Baahubali",
        age: 16
        
    },
    {
        name: "AAK chandran",
        age: 23
        
    },   
    {
        name:"Gabbar Singh",
        age: 33
        
    },
    {
        name: "Mogambo",
        age: 53
        
    },
    {
        name: "Munnabhai",
        age: 40
        
    },
    {
        name: "Sher Khan",
        age: 20
        
    },
    {
        name: "Chulbul Pandey",
        age: 19
        
    },
    {
        name: "Anthony",
        age: 28
        
    },
    {
        name: "Devdas",
        age: 56
        
    } 
    ];
    
    function returnMinors(arr)
    {
        var below20 = [];
        for(let i in students){
            if(parseInt(students[i].age) < 20){
                below20.push(students[i].name);
            }
        }
        return below20;
    }

    console.log(returnMinors(students));
});