var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
   // console.log(data[0]['population']);
    var res = data.filter((item)=>{
    return item['population'] < 200000;
    });

    res.forEach(element => {
        console.log(element.name);
    });
};