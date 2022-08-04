getApp();

var e = require("../../98062E97C45B99CFFE604690F70E7A06.js");

Page({
    data: {
        userInfo: null,
        personInfo: null,
        balltype: null,
        prices: [ 1, 5, 10, 50, 100, 200 ]
    },
    onLoad: function() {},
    selectItem: function(t) {
        var a = this, n = t.currentTarget.dataset.item;
        a.setData({
            selected: n
        }), e.request("payment/reward/userRewardAuthor", !1, !0, {
            amount: n
        }).then(function(e) {
            console.log(e), wx.requestPayment({
                timeStamp: e.weiXinMiniProgramPaymentKeyParameter.timeStamp + "",
                nonceStr: e.weiXinMiniProgramPaymentKeyParameter.nonceStr,
                package: "prepay_id=" + e.weiXinMiniProgramPaymentKeyParameter.packageValue,
                signType: e.weiXinMiniProgramPaymentKeyParameter.signType,
                paySign: e.weiXinMiniProgramPaymentKeyParameter.paySign,
                success: function(e) {
                    wx.showToast({
                        title: "支付成功,感谢您的支持",
                        icon: "success"
                    });
                }
            });
        }).catch(function(e) {});
    }
});