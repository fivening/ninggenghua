let obj = {
    uid:1,
    uid1:2,
    name:'ALex',
    name1:'SupCat',
    url:'./img/timg.jpg',
    url1:'./img/tx.jpg',
    qm:"除了吃什么都别叫我。。",
    qm1:'我若成佛天下无魔，我若成魔佛挡杀佛'
};

let toobj = {};

let uid = '';
//连接socket服务器
const IO = io.connect('ws://127.0.0.1:80');

let userobj = {}

const layer = layui.layer;

$('.logup').on('click',() => {
    if($('.username').val()==''||$('.paddword').val()==''){
        layer.msg('用户名或密码不能为空');
    }else if($('.username').val()=="alex"){
        IO.emit('sayname',{name:obj.uid});
        uid = obj.uid;
        $('.info .tx').css({'background':'url("'+obj.url+'")','background-size':'cover'});
        $('.info .key div').eq(0).html(obj.name);
        $('.info .key div').eq(1).html(obj.qm);
        $('.layui-tab-item .tx').css({'background':'url("'+obj.url1+'")','background-size':'cover'});
        $('.layui-tab-item').attr('toid',obj.uid1)
        $('.layui-tab-item .key').eq(0).find('div').eq(0).html(obj.name1);
        $('.layui-tab-item .key').eq(0).find('div').eq(1).html(obj.qm1);
        $('.layui-tab-item .key').eq(1).find('div').eq(0).html(obj.name1);
        $('.layui-tab-item .key').eq(1).find('div').eq(1).html(obj.qm1);

        $('.login').fadeOut(1000);
        $('.chatbox').fadeIn(1000);
    }else{
        IO.emit('sayname',{name:obj.uid1});
        uid = obj.uid1;
        $('.info .tx').css({'background':'url("'+obj.url1+'")','background-size':'cover'});
        $('.info .key div').eq(0).html(obj.name1);
        $('.info .key div').eq(1).html(obj.qm1);
        $('.layui-tab-item .tx').css({'background':'url("'+obj.url+'")','background-size':'cover'});
        $('.layui-tab-item').attr('toid',obj.uid)
        $('.layui-tab-item .key').eq(0).find('div').eq(0).html(obj.name);
        $('.layui-tab-item .key').eq(0).find('div').eq(1).html(obj.qm);
        $('.layui-tab-item .key').eq(1).find('div').eq(0).html(obj.name);
        $('.layui-tab-item .key').eq(1).find('div').eq(1).html(obj.qm);

        $('.login').fadeOut(1000);
        $('.chatbox').fadeIn(1000);
    }
})

$('.window').hide();

$('.layui-tab-item').on('dblclick',function(){
  let name = $(this).find('.key div').eq(0).html();
  let toid = $(this).attr('toid');
  layer.open({
      title:name,
      type:1,
      content:$('.window'),
      area:['450px','543px'],
      cancel:function(index){
         layer.closeAll();
         $('.window').hide();
      },
      success:function(index){
         $('.close').on('click',function(){
            layer.closeAll();
            $('.window').hide();
         });
         $('.send').on('click',() => {
             toobj.news = $('textarea').val();
             toobj.toUser = toid;
             console.log(toobj)
             IO.emit('news',toobj);
         })
      }
  })
});


IO.on('SendNews',function(data){
   console.log(data);
})




