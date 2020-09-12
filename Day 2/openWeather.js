
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
var key = 'dfc021e2995ca304632f64552617e068'
var lat = 15.2993
var lon = 74.1240
var url_string = 'http://api.openweathermap.org/data/2.5/weather?lat=' +lat+'&lon='+lon+'&appid='+key
request.open('GET', url_string, true)
 // Send request
 request.send()
  
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.responseText)
  console.log(data)
  //console.log(data.domains[14].MX[0].exchange)
  }
 