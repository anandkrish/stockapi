var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send('Server Started....');
});

var server=app.listen(8082,function(){
	var host=server.address().address;
	var port= server.address().port;

	console.log('Listening @ 8082...........');

});

app.get('/stock',function(req,res){
	res.sendFile(__dirname+'/stockHome.html');
});
getStock

app.get('getStock',function(req,res)){
	res
}
app.use(express.static(__dirname + '/static'));
