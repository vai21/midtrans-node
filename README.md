# midtrans-node

Midtrans SNAP API nodejs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
npm install nodejs-base64-encode --save
```

### Installing

A step by step for running midtrans snap API

Open your default server entry point example (app.js) and add this code below in the top require module:

```
var midtrans = require('midtrans-node);
```

And add router from module like this in example (app.js):

```
app.use('/api/midtrans', midtrans);
```

After that set your key and and environment development/production in example (app.js):

```
process.env.MIDTRANS_SANDBOX = 'Your Server Key';
process.env.ENVIRONMENT = 'development';
```



## Running the tests

To test it, send POST request to this url:

localhost:3000/api/midtrans/

### Break down into end to end tests

Example response

```
{
"redirectMidtrans": "https://app.sandbox.veritrans.co.id/snap/v2/vtweb/111ffb21-ba8b-41fb-9fa2-b497a34f863c"
}
```

## Deployment

Add additional in the module to add your checkout data in json format in node_modules/midtrans-node/midtrans.js


## Authors

* **Faisal** - *playsure.co* - [vai21](https://github.com/vai21)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
