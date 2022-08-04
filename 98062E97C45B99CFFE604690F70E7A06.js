function e(e) {
    wx.showToast({
        title: e,
        icon: "none"
    });
}

var t = require("5AFFB626C45B99CF3C99DE21E3CD7A06.js");

module.exports = {
    showSuccessToast: function(e) {
        wx.showToast({
            title: e
        });
    },
    showNoIconToast: e,
    request: function(n) {
        var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "POST", i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "application/x-www-form-urlencoded";
        return new Promise(function(u, d) {
            var g = t.ManagerQuickRequest + n;
            a || (g = t.ManagerRequest + n), !o || void 0 != wx.getStorageSync("token") && "" != wx.getStorageSync("token") ? wx.request({
                url: g,
                data: s,
                method: r,
                header: {
                    "Content-Type": i,
                    token: wx.getStorageSync("token")
                },
                success: function(t) {
                    if (200 == t.statusCode) if (1e5 == t.data.responseCode) u(t.data.result); else {
                        if (902023 == t.data.responseCode || 902022 == t.data.responseCode || 902033 == t.data.responseCode) return void wx.navigateTo({
                            url: "/pages/login/index"
                        });
                        e(t.data.message), d(t.data);
                    } else e(), d(t.errMsg);
                },
                fail: function(t) {
                    e(), d(t);
                }
            }) : wx.navigateTo({
                url: "/pages/login/index"
            });
        });
    },
    getDatetime: function(e) {
        var t = e, n = t.getFullYear(), a = t.getMonth() + 1, o = t.getDate(), s = t.getHours(), r = t.getMinutes(), i = t.getSeconds();
        return parseInt(r) < 10 && (r = "0" + String(r)), {
            year: n,
            month: a,
            day: o,
            hour: s,
            minute: r,
            second: i,
            dateYMD: n + "-" + a + "-" + o,
            lastYearDate: parseInt(n) + 1 + "-" + a + "-" + o,
            nowTime: s + ":" + r,
            date: n + "年" + a + "月" + o + "日",
            dateTime: n + "-" + a + "-" + o + " " + s + ":" + r + ":" + i
        };
    },
    js_date_time: function(e) {
        var t = new Date(e), n = t.getFullYear(), a = t.getMonth() + 1;
        a = a < 10 ? "0" + a : a;
        var o = t.getDate();
        return o = o < 10 ? "0" + o : o, n + "-" + a + "-" + o;
    }
};