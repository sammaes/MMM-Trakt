var post = require('./trakt-post');
var async = require('async');

async.waterfall([
    function(callback){
        data = post.setClientId('81ab5d7369fa92c437b9f4bd0b0816a787ed6be5b672c072c2d710610fae8c9c');
        callback(null, data);
    },
    function(data,callback){
        esult = post.doPost('/oauth/device/code');
    },
], function (err,result) {
    console.log(result)
});


// Generate new device codes
//var test = 


//var result = post.doPost('/oauth/device/code');
//console.log(result);