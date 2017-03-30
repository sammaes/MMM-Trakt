var https = require('https');

function parseResult(res)
{
  console.log("statusCode: ", res.statusCode);
  
  res.on('data', function(d) {
    doStuffWithResult(JSON.parse(d));
  });
}

function doStuffWithResult(data)
{
  console.info("Device code:", data.device_code);
  console.info("User code:", data.user_code);
  console.info("Verification URL:", data.verification_url);
  console.info("Expires in:", data.expires_in/60, "minutes");
  console.info("Polling interval:", data.interval);
}
 
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

// create the JSON object
jsonDeviceCode = JSON.stringify({
    "client_id" : "81ab5d7369fa92c437b9f4bd0b0816a787ed6be5b672c072c2d710610fae8c9c"
});
 
// the post options
var optionsDeviceCode = {
    host : 'api.trakt.tv',
    path : '/oauth/device/code',
    method : 'POST',
    headers : prepareHeader(jsonDeviceCode)
};
 
// do the POST call
console.log("Header:", prepareHeader(jsonDeviceCode));
var reqPost = https.request(prepareOptions('/oauth/device/code'), parseResult);
reqPost.write(jsonDeviceCode);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});


