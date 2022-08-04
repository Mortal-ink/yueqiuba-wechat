function e(e) {
    return Math.round(wx.getSystemInfoSync().windowWidth * e / 750);
}

var t = require("DB16F444C45B99CFBD709C43D9DD7A06.js"), r = require("7C8272F4C45B99CF1AE41AF365FD7A06.js");

module.exports = {
    barcode: function(r, n, o, c) {
        t.code128(wx.createCanvasContext(r), n, e(o), e(c));
    },
    qrcode: function(t, n, o, c) {
        r.api.draw(n, {
            ctx: wx.createCanvasContext(t),
            width: e(o),
            height: e(c)
        });
    }
};