
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all'
request.open('GET', url_string, true)
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(request.responseText)
  console.log(data)
  }
  
  // Send request
  request.send()
  