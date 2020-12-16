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
    var cat = {
        name: "Fluffy",
        activities: ["play", "eat cat food"],
        catFriends: [
            {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
            }, 
            {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
            }
        ]
    }
    cat.height = 10;
    cat.weight = 30;
    cat.name = "Fluffyy";
    //console.log(cat.catFriends[name]);
    for(let i in cat.catFriends){
        console.log(cat.catFriends[i].name);
    }
    
    var sum_wg = 0;
    for(let i in cat.catFriends){
        sum_wg = sum_wg + cat.catFriends[i].weight;
    }
    console.log(sum_wg);
    
    for(let i in cat.catFriends){
        //sum_wg = sum_wg + cat.catFriends[i].weight;
        console.log(cat.catFriends[i].activities);
    }
    
    var arr1 = cat.catFriends[0].activities;
    var len1 = arr1.length;
    var arr2 = cat.catFriends[1].activities;
    var len2 = arr2.length;
    
    cat.catFriends[0].activities[len2] = "hyper-active";
    cat.catFriends[1].activities[len1] = "cute";
    
    //console.log(cat.catFriends[0].activities);
    
    cat.catFriends[0].furcolor = "blue";
    
    console.log(cat);
    
});













