const app = require('express')(); 

const http = require('http').Server(app);  

const io = require('socket.io')(http); 

const jsdom = require('jsdom');//引入jquery依赖
 
const {JSDOM} = jsdom;

const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = document;

global.window = document.defaultView;
 
global.$ = require('jquery')(window);

let UserId =  [];  //连接的客户端Id


app.get('/', function(req, res){  
    res.send('<h1>服务器已启动</h1>');  
}); 

http.listen(80, function(){  
    console.log('http://localhost:80');  
}); 


io.on('connection', function (wss) {
    //监听某个用户登录
    wss.on('sayname',function(data){
         let obj = {
             sid:wss.id,
             uid:data.name
         }
         UserId.push(obj);
    });
    //接受领导发送的通知
    wss.on('news',function(data){
        for(var i = 0; i<UserId.length; i++){
            if( data.toUser == UserId[i].uid ){
                //发送给指定用户
                io.sockets.sockets[UserId[i].sid].emit('SendNews', data.news) 
            }else{
                //用户不在线 应先发送到数据库，用户上线后请求及时拿到最新消息
            }
        }
    });
    
    //监听某个用户退出
    wss.on('disconnect',function(){
        for(var i = 0; i<UserId.length; i++){
            if(UserId[i].sid == wss.id){
                UserId.splice(i,1);
            }
        }
    })

});

