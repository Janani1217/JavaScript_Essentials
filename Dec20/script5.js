var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    //console.log(data);
    var res = data.filter((item)=>{
        return item.currencies[0].name==="United States dollar";
    });

    res.forEach(element => {
        console.log(element.name);
    });
    
}