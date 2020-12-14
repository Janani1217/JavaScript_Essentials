//1.create a request variable from xmlHttpRequest
var request = new XMLHttpRequest();

//2. create connection 1.method 2.endpoint url
request.open('GET','https://restcountries.eu/rest/v2/all', true);

//3. send request
request.send();

//4.load the response
request.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    for(let i in data){
        console.log(data[i].name);
    }
};
