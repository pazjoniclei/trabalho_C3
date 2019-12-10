const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    io.emit('#teste', "Uma mensagem");
});

let emitir = function(){

    let ruim = Math.floor(Math.random() * 100 + 1)
  
    io.emit('#l', ruim);

}

let atual = setInterval(emitir, 4000);

http.listen(4000, function(err){
    if(!err){
        console.log('servidor rodando na porta 4000');
    }
});