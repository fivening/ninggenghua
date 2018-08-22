<template>
    <div id="mt">
        <div class="item">
            <div class="top">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668838&di=96345fc67d9b0fba61b18a224a84cafd&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc3%2F62%2Fd%2F58.jpg" />
                <div class="center">
                    <div style="color:#333;font-weight: bold">Model_sic</div>
                    <div style="color:#666">那你这样的话就没什么意思了</div>
                </div>
                <button>关注</button>
            </div>
            <div class="imgbox">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668844&di=bac81b8b4c2c6a14ea6d15a4f3e79014&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb812c8fcc3cec3fdc02b17a1dc88d43f869427c8.jpg" alt="" class="img1">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668844&di=46dbf2b9d5f9fa44b700ad1bbe4f4293&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4b90f603738da9779377e0deba51f8198718e3ef.jpg" alt="" class="img2">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668842&di=abf83f4d8e9cf7f156e7525a1f916707&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F13%2Fd%2F22.jpg" alt="" class="img3">  
            </div>
            <div class="bottom">
                <van-icon name="like-o"></van-icon>
                <span class="van-icon1">468</span>
                <van-icon name="location"></van-icon>
                <span class="van-icon1">济南</span>
            </div>
        </div>
        <div class="item">
            <div class="top">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668838&di=96345fc67d9b0fba61b18a224a84cafd&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc3%2F62%2Fd%2F58.jpg" />
                <div class="center">
                    <div style="color:#333;font-weight: bold">Alex</div>
                    <div style="color:#666">除了吃都别叫我</div>
                </div>
                <button>关注</button>
            </div>
            <div class="imgbox">
               
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534840668844&di=46dbf2b9d5f9fa44b700ad1bbe4f4293&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4b90f603738da9779377e0deba51f8198718e3ef.jpg" alt="" class="img4">
               
            </div>
            <div class="bottom">
                <van-icon name="like-o"></van-icon>
                <span class="van-icon1">468</span>
                <van-icon name="location"></van-icon>
                <span class="van-icon1">济南</span>
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
