var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var clubs = [
	{name: 'Basket Weaver', members:'30', founded: '3/25/1995', president: 'John Smith', goals:'Learn Basket Weaving Principles'},
	{name: 'Vietnamese Coffee United', members:'1200', founded: '1/24/1995', president: 'Jane Smith', goals:'Expose the World to Vietnamese Cofee'}
]

app.get('/clubs', (req, res) =>{
	res.send(clubs)
})

app.post('/clubs', (req, res) =>{
	clubs.push(req.body)
	res.sendStatus(200)
})

var server = app.listen(3002, () => {
	console.log('server is listening on port', server.address().port)
})
