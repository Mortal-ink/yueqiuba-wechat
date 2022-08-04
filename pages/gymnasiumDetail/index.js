var a = require("../../../98062E97C45B99CFFE604690F70E7A06.js");

getApp();

Page({
    data: {
        petsShopId: 0,
        seckillData: {
            startRow: 0,
            rowSize: 10,
            status: !0
        },
        showdingchang: !1,
        seckillList: [],
        petsShopDetail: "",
        showPhone: !1,
        timer: "",
        showMask: !1,
        checkbox: [ {
            value: 0,
            name: "8-9",
            checked: !1,
            hot: !1
        }, {
            value: 1,
            name: "9-10",
            checked: !0,
            hot: !1
        }, {
            value: 2,
            name: "10-11",
            checked: !0,
            hot: !0
        }, {
            value: 3,
            name: "11-12",
            checked: !1,
            hot: !0
        }, {
            value: 4,
            name: "12-13",
            checked: !1,
            hot: !1
        } ]
    },
    call: function(a) {
        var n = this;
        wx.makePhoneCall({
            phoneNumber: a.currentTarget.dataset.phone,
            success: function(a) {
                n.setData({
                    showPhone: !1,
                    showMask: !1
                });
            }
        });
    },
    turnToMap: function(a) {
        var n = this;
        wx.navigateTo({
            url: "/appointmentBall/pages/appointmentBallMap/index?lat=" + n.data.gymnasiumInfo.baseinfo.gymnasiumLatitude + "&lon=" + n.data.gymnasiumInfo.baseinfo.gymnasiumLongitude + "&addressName=" + n.data.gymnasiumInfo.baseinfo.gymnasiumAddress
        });
    },
    onReady: function() {},
    previewImg: function(a) {
        var n = this;
        wx.previewImage({
            current: n.data.gymnasiumInfo.baseinfo.qrCode,
            urls: [ n.data.gymnasiumInfo.baseinfo.qrCode ]
        });
    },
    dingchang: function(a) {
        this.setData({
            showdingchang: !0
        });
    },
    hideModal: function(a) {
        this.setData({
            showdingchang: !1
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    makePhoneCall: function() {
        this.setData({
            showPhone: !this.data.showPhone,
            showMask: !this.data.showMask
        });
    },
    onLoad: function(n) {
        var e = this, t = n.gymnasium_id;
        a.request("gymnasium/getGymnasiumDetailById", !1, !1, {
            gymnasiumId: t
        }).then(function(a) {
            console.log(a), e.setData({
                gymnasiumInfo: a
            });
        }).catch(function(a) {});
    }
});