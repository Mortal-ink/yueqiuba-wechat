var e = getApp();
import { request } from "../../98062E97C45B99CFFE604690F70E7A06.js";

Page({
    data: {
        angle: 0,
        userInfo: {},
        isLogin: !1,
        winWidth: e.globalData.winWidth
    },
    submitFn: function(s) {
        var i = this;
        i.setData({
            isLogin: !0
        }), 
        request("1000001108622576", !0, !1, {
            sys_key: "发布状态"
        }).then(function(a) {
            e.globalData.publishStatus = a.sys_value[0].sysValue, 1 == a.sys_value[0].sysValue ? wx.switchTab({
                url: "/pages/homePage/index"
            }) : wx.reLaunch({
                url: "/pages/publishTemp/index"
            });
        }).catch(function(e) {
            i.setData({
                isLogin: !1
            });
        });
    },
    onLoad: function() {},
    onShow: function() {},
    onReady: function() {},
    onShareAppMessage: function() {
        return {
            title: "您的小伙伴邀请您加入篮球小队",
            imageUrl: "/resources/images/public/logo.png",
            path: "/pages/welcome/index"
        };
    }
});