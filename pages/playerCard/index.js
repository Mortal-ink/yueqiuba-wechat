getApp();

var t = require("../../../98062E97C45B99CFFE604690F70E7A06.js"), e = (getApp(), 
[ "#5CCDDE", "#FCD130", "#FB7942", "#cccccc", "#3a353f" ]), a = [ "热值未统计", "该区域手感冰凉 (热值小于3)", "该区域手感良好 (热值小于6)", "该区域火力全开 (热值大于等于6)" ];

Page({
    data: {
        hitRate: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        skillList: [ 0, 0, 0, 0, 0 ]
    },
    onLoad: function(t) {
        this.setData({
            userId: t.id
        });
    },
    bindHitRateCanvasTouch: function(t) {
        var e = t.touches[t.touches.length - 1].x, a = t.touches[t.touches.length - 1].y, i = "", l = -1, s = wx.getSystemInfoSync().windowWidth;
        if (e < 1.25 / 15 * s && a < 3.6 / 15 * s) i = "左侧底角三分能力 ", l = 0; else if (e < .15 * s && a < .8 * s && a > 3.6 / 15 * s) i = "左侧45度三分能力 ", 
        l = 1; else if (e > .15 * s && a < 14 / 15 * s && e < .85 * s && a > 7 / 15 * s) i = "正面三分能力 ", 
        l = 2; else if (e > .85 * s && a > 3.6 / 15 * s && a < .8 * s) i = "右侧45度三分能力 ", 
        l = 3; else if (e > 13.75 / 15 * s && a < 3.6 / 15 * s) i = "右侧底角三分能力 ", l = 4; else if (e > 1.25 / 15 * s && e < .4 * s && a < .28 * s) i = "左侧底角中投能力 ", 
        l = 5; else if (e > 3.25 / 15 * s && e < .5 * s && a > 3.6 / 15 * s && a < 7 / 15 * s) i = "左侧45度中投能力 ", 
        l = 6; else if (e > s / 2 && e < 11.75 / 15 * s && a > 3.6 / 15 * s && a < 7 / 15 * s) i = "右侧45度中投能力 ", 
        l = 7; else if (e > .6 * s && e < 13.75 / 15 * s && a < 3.6 / 15 * s) i = "右侧底角中投能力 ", 
        l = 8; else if (e > .4 * s && e < .6 * s && a < 3.6 / 15 * s) i = "篮下终结能力 ", l = 9; else if (a > 14 / 15 * s) return;
        this.setData({
            tipLabel: i,
            increaseIndex: l,
            showScore: !0
        });
    },
    getCourtColor: function(t) {
        return 0 == t ? e[3] : t < 3 ? e[0] : t < 6 ? e[1] : e[2];
    },
    setHitRateCanvas: function() {
        var t = wx.createCanvasContext("hitRateCanvas");
        t.setLineWidth(.7), t.setLineDash([ 0, 0 ], 0);
        var i = wx.getSystemInfoSync().windowWidth;
        i -= 28, t.beginPath(), t.moveTo(0, 0), t.lineTo(1.25 / 15 * i, 0), t.lineTo(1.25 / 15 * i, .105 * i), 
        t.moveTo(0, 0), t.lineTo(0, 3.5 / 15 * i), t.lineTo(1.6 / 15 * i, 3.5 / 15 * i), 
        t.arc(i / 2, .105 * i, 6.25 / 15 * i, 17 / 18 * Math.PI, Math.PI), t.setStrokeStyle("#ffffff"), 
        t.setFillStyle(this.getCourtColor(this.data.hitRate[0])), t.stroke(), t.fill(), 
        t.beginPath(), t.moveTo(0, 3.5 / 15 * i), t.lineTo(1.6 / 15 * i, 3.5 / 15 * i), 
        t.moveTo(0, 3.5 / 15 * i), t.lineTo(0, .8 * i), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 13 * Math.PI / 18, 16.2 / 18 * Math.PI), 
        t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[1])), 
        t.stroke(), t.fill(), t.beginPath(), t.moveTo(0, .8 * i), t.lineTo(0, 14 / 15 * i), 
        t.lineTo(i, 14 / 15 * i), t.lineTo(i, .8 * i), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 5 * Math.PI / 18, 13 / 18 * Math.PI), 
        t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[2])), 
        t.stroke(), t.fill(), t.beginPath(), t.moveTo(i, .8 * i), t.lineTo(i, 3.5 / 15 * i), 
        t.lineTo(13.4 / 15 * i, 3.5 / 15 * i), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 1.755 * Math.PI / 18, 5 / 18 * Math.PI), 
        t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[3])), 
        t.stroke(), t.fill(), t.beginPath(), t.moveTo(i, .23 * i), t.lineTo(i, 0), t.lineTo(13.75 / 15 * i, 0), 
        t.lineTo(13.75 / 15 * i, .105 * i), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 0, 1.755 / 18 * Math.PI), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[4])), 
        t.stroke(), t.fill(), t.beginPath(), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 3 * Math.PI / 4, Math.PI), 
        t.lineTo(1.25 / 15 * i, 0), t.lineTo(5.5 / 15 * i, 0), t.lineTo(5.5 / 15 * i, 2.125 / 15 * i), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[5])), 
        t.stroke(), t.fill(), t.beginPath(), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 1 * Math.PI / 2, 3 * Math.PI / 4), 
        t.lineTo(5.5 / 15 * i, 2.125 / 15 * i), t.arc(i / 2, 2.125 / 15 * i, 2 / 15 * i, Math.PI, 1 * Math.PI / 2, !0), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[6])), 
        t.stroke(), t.fill(), t.beginPath(), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 1 * Math.PI / 2, 1 * Math.PI / 4, !0), 
        t.lineTo(9.5 / 15 * i, 2.125 / 15 * i), t.arc(i / 2, 2.125 / 15 * i, 2 / 15 * i, 0, 1 * Math.PI / 2), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[7])), 
        t.stroke(), t.fill(), t.beginPath(), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 1 * Math.PI / 4, 0, !0), 
        t.lineTo(13.75 / 15 * i, 0), t.lineTo(9.5 / 15 * i, 0), t.lineTo(9.5 / 15 * i, 2.125 / 15 * i), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[8])), 
        t.stroke(), t.fill(), t.beginPath(), t.moveTo(9.5 / 15 * i, 2.125 / 15 * i), t.lineTo(9.5 / 15 * i, 0), 
        t.lineTo(5.5 / 15 * i, 0), t.lineTo(5.5 / 15 * i, 2.125 / 15 * i), t.arc(i / 2, 2.125 / 15 * i, 2 / 15 * i, Math.PI, 0, !0), 
        t.closePath(), t.setStrokeStyle("#ffffff"), t.setFillStyle(this.getCourtColor(this.data.hitRate[9])), 
        t.stroke(), t.fill(), t.beginPath(), t.setLineWidth(3), t.arc(i / 2, 14 / 15 * i, 1.8 / 15 * i, -Math.PI, 0), 
        t.lineTo(.62 * i, 14 / 15 * i), t.closePath(), t.setStrokeStyle("#ffffff"), t.stroke(), 
        t.beginPath(), t.moveTo(0, 0), t.lineTo(i, 0), t.lineTo(i, 14 / 15 * i), t.lineTo(0, 14 / 15 * i), 
        t.closePath, t.stroke(), t.beginPath(), t.lineTo(1.25 / 15 * i, 0), t.moveTo(13.75 / 15 * i, 0), 
        t.lineTo(13.75 / 15 * i, .105 * i), t.arc(i / 2, .105 * i, 6.25 / 15 * i, 0, Math.PI), 
        t.lineTo(1.25 / 15 * i, 0), t.closePath(), t.stroke(), t.beginPath(), t.lineTo(.3 * i, 0), 
        t.lineTo(.38 * i, 5.3 / 15 * i), t.lineTo(.62 * i, 5.3 / 15 * i), t.lineTo(.7 * i, 0), 
        t.closePath(), t.stroke(), t.beginPath(), t.arc(i / 2, 5.3 / 15 * i, 1.8 / 15 * i, 0, Math.PI), 
        t.stroke(), t.beginPath(), t.arc(i / 2, 1.275 / 15 * i, .02 * i, 0, 2 * Math.PI), 
        t.setStrokeStyle("orange"), t.stroke(), t.beginPath(), t.arc(i / 2, 1.275 / 15 * i, .08 * i, 0, Math.PI), 
        t.setLineDash([ 4, 6 ], .1), t.setStrokeStyle("#ffffff"), t.stroke(), t.beginPath(), 
        t.arc(i / 2, 5.3 / 15 * i, 1.8 / 15 * i, 0, Math.PI, !0), t.stroke(), t.setFontSize(13), 
        t.setFillStyle("black"), t.fillText(this.data.hitRate[0] + "/10", 2, 1.75 / 15 * i), 
        t.fillText(this.data.hitRate[1] + "/10", 20, .475 * i), t.fillText(this.data.hitRate[2] + "/10", i / 2 - 15, 2 * i / 3), 
        t.fillText(this.data.hitRate[3] + "/10", 6 * i / 7, .475 * i), t.fillText(this.data.hitRate[4] + "/10", i - 37, 1.75 / 15 * i), 
        t.fillText(this.data.hitRate[5] + "/10", 1 * i / 5, 1 * i / 5), t.fillText(this.data.hitRate[6] + "/10", 1 * i / 3, 1 * i / 3), 
        t.fillText(this.data.hitRate[7] + "/10", 3 * i / 5, 1 * i / 3), t.fillText(this.data.hitRate[8] + "/10", 3 * i / 4, 1 * i / 5), 
        t.fillText(this.data.hitRate[9] + "/10", i / 2 - 15, 1 * i / 6), t.beginPath(), 
        t.setFillStyle(e[3]), t.fillRect(20, i + 21.5, 17, 17), t.setFillStyle(e[0]), t.fillRect(20, i + 51.5, 17, 17), 
        t.setFillStyle(e[1]), t.fillRect(20, i + 81.5, 17, 17), t.setFillStyle(e[2]), t.fillRect(20, i + 111.5, 17, 17), 
        t.setFillStyle("gray"), t.setFontSize(15), t.fillText(a[0], 45, i + 37), t.fillText(a[1], 45, i + 65), 
        t.fillText(a[2], 45, i + 97), t.fillText(a[3], 45, i + 127), t.draw();
    },
    onReady: function() {},
    onShow: function() {
        var e = this, a = {
            userid: e.data.userId
        };
        t.request("user/getUserAllInfoByid", !1, !0, a).then(function(t) {
            e.setData({
                userInfo: t.userInfo,
                userStrength: t.userStrength
            }), console.log(e.data.userStrength.thermogram), null != e.data.userStrength.thermogram && "" != e.data.userStrength.thermogram && e.setData({
                hitRate: JSON.parse(e.data.userStrength.thermogram)
            }), null != e.data.userStrength.skill && "" != e.data.userStrength.skill && e.setData({
                skillList: JSON.parse(e.data.userStrength.skill)
            }), e.setHitRateCanvas(), e.setSkillCanvas();
        }).catch(function(t) {});
    },
    setSkillCanvas: function() {
        var t = wx.createCanvasContext("skillCanvas");
        t.setLineWidth(.7);
        var e = wx.getSystemInfoSync().windowWidth, a = (e -= 28) / 2 + 20;
        t.beginPath(), t.arc(e / 2, a, 1.8, 0, 2 * Math.PI), t.setFillStyle("red"), t.stroke(), 
        t.fill(), t.beginPath(), t.setStrokeStyle("gray"), t.moveTo(e / 2, a), t.lineTo(e / 2, a - 100), 
        t.lineTo(e / 2 + 100 * Math.cos(1 * Math.PI / 10), a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.closePath(), t.stroke(), t.beginPath(), t.moveTo(e / 2, a), t.lineTo(e / 2 + 100 * Math.cos(1 * Math.PI / 10), a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.lineTo(e / 2 + 100 * Math.sin(36 * Math.PI / 180), a + 100 * Math.cos(36 * Math.PI / 180)), 
        t.closePath(), t.stroke(), t.beginPath(), t.moveTo(e / 2, a), t.lineTo(e / 2, a - 100), 
        t.lineTo(e / 2 - 100 * Math.cos(1 * Math.PI / 10), a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.closePath(), t.stroke(), t.beginPath(), t.moveTo(e / 2, a), t.lineTo(e / 2 - 100 * Math.cos(1 * Math.PI / 10), a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.lineTo(e / 2 - 100 * Math.sin(36 * Math.PI / 180), a + 100 * Math.cos(36 * Math.PI / 180)), 
        t.closePath(), t.stroke(), t.beginPath(), t.moveTo(e / 2, a), t.lineTo(e / 2 + 100 * Math.sin(36 * Math.PI / 180), a + 100 * Math.cos(36 * Math.PI / 180)), 
        t.lineTo(e / 2 - 100 * Math.sin(36 * Math.PI / 180), a + 100 * Math.cos(36 * Math.PI / 180)), 
        t.closePath(), t.stroke(), t.beginPath(), t.moveTo(e / 2, a - 10 * this.data.skillList[0]), 
        t.lineTo(e / 2 + 10 * Math.cos(1 * Math.PI / 10) * this.data.skillList[1], a - 10 * Math.sin(1 * Math.PI / 10) * this.data.skillList[1]), 
        t.lineTo(e / 2 + 10 * Math.sin(36 * Math.PI / 180) * this.data.skillList[2], a + 10 * Math.cos(36 * Math.PI / 180) * this.data.skillList[2]), 
        t.lineTo(e / 2 - 10 * Math.sin(36 * Math.PI / 180) * this.data.skillList[3], a + 10 * Math.cos(36 * Math.PI / 180) * this.data.skillList[3]), 
        t.lineTo(e / 2 - 10 * Math.cos(1 * Math.PI / 10) * this.data.skillList[4], a - 10 * Math.sin(1 * Math.PI / 10) * this.data.skillList[4]), 
        t.closePath(), t.setFillStyle("rgba(33,123,225,0.7)"), t.fill(), t.setFillStyle("rgba(102,38,39,1)"), 
        t.setFontSize(15), t.fillText("三分 +" + this.data.skillList[0], e / 2 - 25, a - 110), 
        t.fillText("篮板 +" + this.data.skillList[1], e / 2 + 100 * Math.cos(1 * Math.PI / 10) + 10, a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.fillText("抢断 +" + this.data.skillList[2], e / 2 + 100 * Math.sin(36 * Math.PI / 180) - 10, a + 100 * Math.cos(36 * Math.PI / 180) + 15), 
        t.fillText("盖帽 +" + this.data.skillList[3], e / 2 - 100 * Math.sin(36 * Math.PI / 180) - 40, a + 100 * Math.cos(36 * Math.PI / 180) + 15), 
        t.fillText("中投 +" + this.data.skillList[4], e / 2 - 100 * Math.cos(1 * Math.PI / 10) - 60, a - 100 * Math.sin(1 * Math.PI / 10)), 
        t.setFillStyle("gray"), t.setFontSize(15), t.draw();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});