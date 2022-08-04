getApp();

var t = require("../../98062E97C45B99CFFE604690F70E7A06.js");

Page({
    data: {
        cardCur: 0,
        DotStyle: !0,
        swiperList: []
    },
    onLoad: function(e) {
        var n = this;
        n.towerSwiper("swiperList"), t.request("1000001021668441", !0, !1).then(function(t) {
            n.setData({
                modules: t.moduleList
            });
        }).catch(function(t) {}), t.request("1000001521585289", !0, !1).then(function(t) {
            n.setData({
                swiperList: t.swiperList
            });
        }).catch(function(t) {});
    },
    cardSwiper: function(t) {
        this.setData({
            cardCur: t.detail.current
        });
    },
    towerSwiper: function(t) {
        for (var e = this.data[t], n = 0; n < e.length; n++) e[n].zIndex = parseInt(e.length / 2) + 1 - Math.abs(n - parseInt(e.length / 2)), 
        e[n].mLeft = n - parseInt(e.length / 2);
        this.setData({
            swiperList: e
        });
    },
    towerStart: function(t) {
        this.setData({
            towerStart: t.touches[0].pageX
        });
    },
    towerMove: function(t) {
        this.setData({
            direction: t.touches[0].pageX - this.data.towerStart > 0 ? "right" : "left"
        });
    },
    towerEnd: function(t) {
        var e = this.data.direction, n = this.data.swiperList;
        if ("right" == e) {
            for (var r = n[0].mLeft, a = n[0].zIndex, i = 1; i < n.length; i++) n[i - 1].mLeft = n[i].mLeft, 
            n[i - 1].zIndex = n[i].zIndex;
            n[n.length - 1].mLeft = r, n[n.length - 1].zIndex = a, this.setData({
                swiperList: n
            });
        } else {
            for (var s = n[n.length - 1].mLeft, o = n[n.length - 1].zIndex, c = n.length - 1; c > 0; c--) n[c].mLeft = n[c - 1].mLeft, 
            n[c].zIndex = n[c - 1].zIndex;
            n[0].mLeft = s, n[0].zIndex = o, this.setData({
                swiperList: n
            });
        }
    },
    clickImage: function(t) {
        var e = t.currentTarget.dataset.item.redirectUrlType, n = t.currentTarget.dataset.item.redirectUrl;
        1 == e ? wx.navigateTo({
            url: n
        }) : 2 == e ? wx.navigateTo({
            url: "/pages/webview/index?url=" + n
        }) : 4 == e && wx.switchTab({
            url: n
        });
    },
    clickModule: function(e) {
        var n = e.currentTarget.dataset.redirecturltype, r = e.currentTarget.dataset.redirecturl;
        1 == n ? wx.navigateTo({
            url: r
        }) : 2 == n ? wx.navigateTo({
            url: "/pages/webview/index?url=" + r
        }) : 4 == n ? wx.switchTab({
            url: r
        }) : t.showNoIconToast("功能暂未开放");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});