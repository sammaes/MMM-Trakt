(function() {
  var https = require('https');
  var clientId;
  var jsonDeviceCode;
  
  // prepare the header
  function prepareHeader(jsonString)
  {
    return {
      'Content-Type' : 'application/json',
      'Content-Length' : Buffer.byteLength(jsonString, 'utf8')
    };
  }

  function prepareOptions(path)
  {
    return {
      host : 'api.trakt.tv',
      path : path,
      method : 'POST',
      headers : prepareHeader(jsonDeviceCode)
    };
  }
  
  // Public functions:
  
  function setClientId(cid)
  {
    console.log("test=" << cid);
    clientId = cid;
    jsonDeviceCode = JSON.stringify({
      "client_id" : clientId
    });
    console.log("clientId set to" << clientId);
    console.log("jsonDeviceCode set to" << jsonDeviceCode);
  }
  
  function doPost(path)
  {
    var data;
    console.log("path:", path);
    console.log("clientID:", clientId);
    var reqPost = https.request(prepareOptions(path), function(res) {
      console.log("statusCode: ", res.statusCode);
      
      res.on('data', function(d) {
        data = JSON.parse(d);
      });
    });
    
    reqPost.write(clientId);
    reqPost.end();
    reqPost.on('error', function(e) {
      console.error(e);
    });
    return data;
  }
    
  exports.setClientId = setClientId;
  exports.doPost      = doPost;
  
}());