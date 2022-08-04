var e = require("../../../98062E97C45B99CFFE604690F70E7A06.js");

getApp();

Page({
    data: {
        time: "12:01",
        date: "2018-12-25",
        showLoading: !1
    },
    formSubmit: function(t) {
        var a = this;
        if ("" != t.detail.value.address) if ("" != t.detail.value.title) if ("" != t.detail.value.userPhone) {
            var o = t.detail.value;
            o.agreedTime = t.detail.value.date + " " + t.detail.value.time + ":00", this.setData({
                showLoading: !0
            }), e.request("appointmentBall/release/releaseOrders", !1, !0, o).then(function(e) {
                a.setData({
                    DialogModal1: !0,
                    Modal1Value: "发布成功,前往查看"
                });
            }).catch(function(e) {});
        } else e.showNoIconToast("请输入电话,方便伙伴找到您"); else e.showNoIconToast("请输入标题"); else e.showNoIconToast("请选择篮球场地");
    },
    gotoList: function(e) {
        wx.redirectTo({
            url: "/appointmentBall/pages/appointmentBallList/index"
        });
    },
    onShow: function(t) {
        var a = e.getDatetime(new Date()), o = this;
        e.request("appointmentBall/release/getuserInfo", !1, !0).then(function(e) {
            o.setData({
                userHeadPortrait: e.userHeadPortrait,
                userNickname: decodeURIComponent(e.userNickname),
                time: a.nowTime,
                date: a.dateYMD,
                startDate: a.dateYMD,
                endDate: a.lastYearDate,
                hasOrders: e.hasOrders
            }), o.data.hasOrders && o.setData({
                DialogModal1: !0,
                Modal1Value: "您还有未结束的约球单，请前往查看"
            });
        }).catch(function(e) {});
    },
    chooseLocation: function(e) {
        var t = this;
        wx.chooseLocation({
            success: function(e) {
                t.setData({
                    userSelectlongitude: e.longitude,
                    userSelectlatitude: e.latitude,
                    address: e.address,
                    addressName: e.name + "附近"
                });
            }
        });
    },
    TimeChange: function(e) {
        this.setData({
            time: e.detail.value
        });
    },
    DateChange: function(e) {
        this.setData({
            date: e.detail.value
        });
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});