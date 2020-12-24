//1.create a request variable from xmlHttpRequest
var request1 = new XMLHttpRequest();

//2. create connection 1.method 2.endpoint url
request1.open('GET','https://restcountries.eu/rest/v2/all', true);

//3. send request
request1.send();

//4.load the response
request1.onload = function() {
    var data = JSON.parse(this.response);
 
    var res = data.filter((item)=>{
        return item['region']==='Asia';
    });

    res.forEach(element => {
        console.log(element.name);
    });
    
};
