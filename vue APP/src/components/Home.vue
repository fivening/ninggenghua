<template>
    <div id="home">
        <div class="header">
            <div class="top">
                <div class="afd"></div>
                <div class="ss">
                    <van-icon name="search" />
                    <input type="text" placeholder="济南平面模特">
                </div>
                <div class="zan">
                    <van-icon name="like-o"/>
                </div>
                <div class="zan">
                    <van-icon name="clock"/>
                </div>
            </div> 
            <ul class="bottom">
                <li v-for="item in staic" @click="sta(item.id)">
                    <router-link :to="item.to">{{item.name}}</router-link>
                   <span v-show="item.staic"></span>
                </li>  
            </ul>
        </div>

        <ul class="content">
           <router-view></router-view>
        </ul>
    </div>
</template>

<style scoped>
    .header{
        width: 100%;
        height:120px;
        background:linear-gradient(to right top,#ff8975,#ff4853);
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
    }
    .top{
        width: 100%;
        height: 50px;
        padding:0 10px; 
        overflow: hidden;
        margin-top:20px;
    }
    .afd{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535338162&di=7e790dce86ab02ae7128c9885ba1aa92&imgtype=jpg&er=1&src=http%3A%2F%2Flol.91danji.com%2FUploadFile%2F20141128%2F1417165228238101.jpg');
        float: left;
        margin-top:5px;
        background-size: cover;
    }
    .ss{
        float: left;
        width: 200px;
        height: 40px;
        border-radius: 20px;
        background:#f1f1f1;
        margin-top: 5px;
        margin-left: 20px;
        overflow: hidden;
    }
    .ss .van-icon{
        width: 20%;
        height: 100%;
        line-height: 45px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        color:#9a9a9a;
        float: left;
    }
    .ss input{
        display: inline-block;
        width: 80%;
        height: 40px;
        float: left;
        border:none;
        background:transparent;
        color:#9a9a9a;
        padding-right: 10px;
    }
    .zan{
        width: 40px;
        height: 40px;
        float: right;
        text-align: center;
    }
    .zan .van-icon{
        display: block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: cenetr;
        color:#fff;
        font-weight: bold;
        font-size: 26px;
    }
    .bottom{
        width: 100%;
        height: 50px;
    }
    .bottom li{
        width: 20%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        
        float: left;
        position: relative;
    }
    .bottom li a{
        color:#fff;
    }
    .bottom li span{
        display: block;
        width: 30%;
        height: 3px;
        background: #fff;
        position: absolute;
        bottom:0;
        left: 50%;
        margin-left: -15%;
    }
    .content{
        width: 100%;
        height: auto;
        margin-top:120px;
    }
    .van-tabbar-item--active{
        color:#ff4f57!important;
    }
</style>


<script>
export default {
    data() {
        return {
          staic:[
              {staic:true,name:'模特',id:0,to:'/'},
              {staic:false,name:'主播',id:1,to:'/Zb'},
              {staic:false,name:'歌手',id:2,to:'/Gs'},
              {staic:false,name:'主持',id:3,to:'/Zc'},
              {staic:false,name:'演员',id:4,to:'/Yy'}
          ]
        }
    },
    methods:{
        sta:function(index){
           
           for(var i = 0;i<this.staic.length;i++){
                this.staic[i].staic = false;
           }
           this.staic[index].staic = true;
        
        }
    }
}
</script>

