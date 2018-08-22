<template>
    <div id="mt">
        <div class="item">
            <div class="top">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668838&di=96345fc67d9b0fba61b18a224a84cafd&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc3%2F62%2Fd%2F58.jpg" />
                <div class="center">
                    <div style="color:#333;font-weight: bold">林俊杰</div>
                    <div style="color:#666">林三岁。。 哈哈哈哈哈</div>
                </div>
                <button>关注</button>
            </div>
            <div class="imgbox">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=622909939,1057149326&fm=26&gp=0.jpg" alt="" class="img4"> 
            </div>
            <div class="bottom">
                <van-icon name="like-o"></van-icon>
                <span class="van-icon1">30W</span>
                <van-icon name="location"></van-icon>
                <span class="van-icon1">上海</span>
            </div>
        </div>
        <div class="item">
            <div class="top">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668838&di=96345fc67d9b0fba61b18a224a84cafd&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc3%2F62%2Fd%2F58.jpg" />
                <div class="center">
                    <div style="color:#333;font-weight: bold">周杰伦</div>
                    <div style="color:#666">我是地表最强大队长。你们别惹我</div>
                </div>
                <button>关注</button>
            </div>
            <div class="imgbox">
               
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534842719381&di=72640cb647a92ea0b73a494d027ac40b&imgtype=0&src=http%3A%2F%2Fimg3.ynet.com%2F2018%2F05%2F03%2Fe7bc576c8e82210b296eebb5bcaffe58_600x-_90.jpg" alt="" class="img1">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=844923475,2706926302&fm=27&gp=0.jpg" alt="" class="img2">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3356677299,2898171131&fm=11&gp=0.jpg" alt="" class="img3">
               
            </div>
            <div class="bottom">
                <van-icon name="like-o"></van-icon>
                <span class="van-icon1">108W</span>
                <van-icon name="location"></van-icon>
                <span class="van-icon1">北京</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
#mt{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom:50px;

    .item{
        width: 100%;
        height:auto;
        overflow: hidden;
        padding:0 10px;
        background:#fff;
        margin-bottom: 15px;
        .top{
            width: 100%;
            height:50px;
            overflow: hidden;
            margin-top: 10px;
            
            img{
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-top: 5px;
                float: left;
            }
            .center{
                width: 60%;
                height: 50px;
                float: left;
                padding:5px 0;
                margin-left: 10px;
                div{
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;
                }
            }
            button{
                display: block;
                width: 60px;
                height:30px;
                margin-top:10px;
                border-radius:15px;
                float: right;
                border:2px solid #ff4854;
                background:#fff;
                color:#ff4854;
            }
        }
        .imgbox{
            width: 100%;
            height: 150px;
            margin-top:15px;
            padding:0 5px;
            img{
                display: block;
            }
            .img1{
                width:60%;
                height:100%;
                float: left;
            }
            .img2 {
                width: 36%;
                height:70px;
                float: right;
            }
            .img3{
                width: 36%;
                height:70px;
                margin-top:10px;
                float: right;
            }
            .img4{
                width: 100%;
                height: 100%;
            }
        }
        .bottom{
            width: 100%;
            height:50px;
            padding:0 5px;
            .van-icon{
                display: inline-block;
                width: 30px;
                height:100%;
                color:#333;line-height: 50px;
                font-size: 24px;
                float: left;
            }
            .van-icon1{
                display: inline-block;
                width: 60px;
                height:100%;
                color:#333;line-height: 50px;
                font-size: 16px;
                float: left;
            }
        }
    }
}
</style>
