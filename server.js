var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var messages = [
	{name: 'Tim', message: 'Hi'},
	{name: 'Tracy', message: 'Hello'}
]


var news = [
	{news: 'hello'}
]

app.get('/messages', (req, res) =>{
	res.send(messages)
})

app.post('/messages', (req, res) =>{
	messages.push(req.body)
	res.sendStatus(200)
})

app.get('/news', (req, res) =>{
	res.send(news)
})

app.post('/news', (req, res) =>{
	news.push(req.body)
	res.sendStatus(200)
})

var server = app.listen(3002, () => {
	console.log('server is listening on port', server.address().port)
})