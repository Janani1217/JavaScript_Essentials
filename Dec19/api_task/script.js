//1.create a request variable from xmlHttpRequest
var request1 = new XMLHttpRequest();

//2. create connection 1.method 2.endpoint url
request1.open('GET','https://restcountries.eu/rest/v2/all', true);

//3. send request
request1.send();

//4.load the response
request1.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    //console.log(data[2]['latlng'][0],data[2]['latlng'][1]);
    var request2 = new XMLHttpRequest();
    for(let i in data){
        request2.open('GET','http://api.openweathermap.org/data/2.5/weather?lat='+data[2]['latlng'][0]+'&lon='+data[2]['latlng'][1]+'&appid=e5944f954542f3011c3a4d3daf584088',true);
        request2.send();

        request2.onload = function(){
            let res = JSON.parse(this.response);
            console.log(res);
        }
    }

    //console.log(data[2]['capital']);
    var request3 = new XMLHttpRequest();
    for(let i in data){
        request3.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+data[2]['capital']+'&appid=e5944f954542f3011c3a4d3daf584088',true);
        request3.send();

        request3.onload = function(){
            let res = JSON.parse(this.response);
            console.log(res);
        }
    }
};

