
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com'
request.open('GET', url_string, true)
 // Send request
 request.send()
  
request.onload = function() {
    // Begin accessing JSON data here
  var data = JSON.parse(this.responseText)
  console.log(data)
  //console.log(data.domains[14].MX[0].exchange)
  }
 