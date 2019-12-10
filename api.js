var node_cryptojs = require('node-cryptojs-aes');
var CryptoJS = node_cryptojs.CryptoJS;
var JsonFormatter = node_cryptojs.JsonFormatter;

const express = require('express')
const app = express()
const port = 1337

app.get('/generateToken', (req, res) => {
    if (req.query.email && req.query.pass) {
    	var head = {
		    'token': CryptoJS.AES.encrypt(JSON.stringify(req.query.email + '|' + req.query.pass), '%65t$5rr4e3$5r3e#w!', { format: JsonFormatter }).toString(),
		    'key': Math.random()
		};

    	res.send(head);
    }
})

app.listen(port, () => console.log(`Token generator listening on port ${port}!`))