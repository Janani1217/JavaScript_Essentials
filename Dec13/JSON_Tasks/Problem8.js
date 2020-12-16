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
    //array of objects
    var securityQuestions = [
        {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
        },
        {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
    ]
    
    function chksecurityQuestions(securityQuestions, quest, answ) {
        for(let i in securityQuestions){
            if(quest == securityQuestions[i].question){
                if(answ == securityQuestions[i].expectedAnswer){
                    return true;
                }else{
                    return false;
                }
            }
        }
        return false;
    }
    
    //test cases = 1
    var ques1 = "What was your first pet’s name?";
    var ans1  = "FlufferNutter";
    var status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
    console.log(status1);
    
    //Test case2:
    var ques2 = "What was your first pet’s name?";
    var ans2  =  "DufferNutter";
    var status2 = chksecurityQuestions(securityQuestions, ques2, ans2);
    console.log(status2);
});