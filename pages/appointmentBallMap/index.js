require("../../../98062E97C45B99CFFE604690F70E7A06.js");

var t, a = require("../../071990B4C45B99CF617FF8B307AD7A06.js");

Page({
    data: {
        longitude: "",
        latitude: "",
        markers: [ {
            longitude: "",
            latitude: "",
            width: 30,
            height: 30,
            callout: {
                content: "",
                display: "ALWAYS"
            }
        } ]
    },
    onLoad: function(e) {
        var n = this;
        t = new a({
            key: "NWIBZ-ZCF3G-PQAQO-IVZ7H-YDXOV-OTFHY"
        }), this.data.markers[0].latitude = e.lat, this.data.markers[0].longitude = e.lon, 
        this.data.markers[0].callout.content = e.addressName, this.setData({
            longitude: e.lon,
            latitude: e.lat,
            markers: this.data.markers
        }), wx.openLocation({
            latitude: parseFloat(n.data.latitude),
            longitude: parseFloat(n.data.longitude),
            name: "球馆位置",
            address: e.addressName,
            scale: 18,
            infoUrl: "http://www.gongjuji.net"
        });
    },
    mapclick: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});