<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="clock" to="/History">历史</van-tabbar-item>
      <van-tabbar-item icon="chat" to="/Chat">消息</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/Setting">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>
  .van-tabbar-item--active{
    color:#ff4f57!important;
    
  }
  body{
    background-color: #f5f5f5;
  }
  *{
    box-sizing: border-box;
  }
</style>



