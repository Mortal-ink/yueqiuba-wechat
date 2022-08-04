Page({
    data: {
        webview: ""
    },
    onLoad: function(n) {
        this.setData({
            webview: n.url
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});