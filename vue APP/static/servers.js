var height = document.documentElement.clientHeight || document.body.clientHeight;
window.onresize = function() {
    var heightView = document.documentElement.clientHeight || document.body.clientHeight;
    if(heightView < height) {
        plus.webview.currentWebview().setStyle({
            height: height
        });
        //修改父页面高度的时候，也要修改子页面的高度  因为子页面距离父页面底部始终是51px  所以这里只需要用父                             页面的高度减去51px,就是子页面的高度
        plus.webview.getWebviewById('index_aKeyNavigation.html').setStyle({
            height: (height * 1 - 51)
        });
    }
}