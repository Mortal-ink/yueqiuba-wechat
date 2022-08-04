var e = require("../../98062E97C45B99CFFE604690F70E7A06.js");

Page({
    data: {
        nowTime: new Date().getTime
    },
    onLoad: function(n) {
        var t = this;
        e.request("schedule/getNBAscheduleByPC", !1, !1).then(function(n) {
            for (var o in n.SHTYJSON.schedule) n.SHTYJSON.schedule[o].dateTime = e.js_date_time(n.SHTYJSON.schedule[o].dateTime);
            t.setData({
                scheduleData: n.SHTYJSON.schedule
            });
        }).catch(function(e) {});
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});