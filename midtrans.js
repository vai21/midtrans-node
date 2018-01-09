var express = require('express');
var router = express.Router();
var encode = require('nodejs-base64-encode');
var https = require('https');

router.post('/', function(req, res, next) {
    accept = 'application/json';
    contentType = 'application/json';
    authString = encode.encode(process.env.MIDTRANS_SANDBOX + ':', 'base64');
      
    if(process.env.ENVIRONMENT == 'development') {
        hostName = 'app.sandbox.midtrans.com';
    } else {
        hostName = 'app.midtrans.com';
    }

    requestData = '{"transaction_details": {"order_id": "YOUR_ORDER_ID_1", "gross_amount": 10000}}';
    
    options = {
        hostname: hostName,
        path: '/snap/v1/transactions',
        method: 'POST',
        headers: {
            'Accept': accept,
            'Content-Type': contentType,
            'Authorization': 'Basic ' + authString,
            'Content-Length': Buffer.byteLength(requestData)
        }
    }
    
    req = https.request(options, (response) => {
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        response.setEncoding('utf8');
        var body = '';
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            body += chunk;
        });
        
        response.on('end', () => {       
            console.log('No more data in response.')           
            jsonObject = JSON.parse(body);
            res.json({'redirectMidtrans': jsonObject.redirect_url});
        })  
               
    });

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    req.write(requestData);
    req.end();
});

module.exports = router;