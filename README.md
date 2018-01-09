# midtrans-node
midtrans SNAP API nodejs

This is library for creating request to midtrans with SNAP API,

Dependencies:
npm install nodejs-base64-encode --save
"nodejs-base64-encode": "0.0.2",

Usage, add this code below in app.js or your entry point:
var midtrans = require('./node_modules/midtrans-node/midtrans');
app.use('/api/midtrans', midtrans);
process.env.MIDTRANS_SANDBOX = 'Your Server Key';
process.env.ENVIRONMENT = 'development';

To test it, send POST request to this url:
localhost:3000/api/midtrans/

And in node_modules/midtrans-node/midtrans.js put your custom request data,
you can add your code inside midtrans.js