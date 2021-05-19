var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    for(i in country_data){
        console.log(country_data[i].name);
    }
}