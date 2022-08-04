var t = require("../../../98062E97C45B99CFFE604690F70E7A06.js");

Page({
    data: {
        currentTab: 0,
        scrollLeft: 0,
        startRow: 0,
        rowSize: 20,
        hupuVideoUrl: null,
        page: 1,
        articleLists: [],
        beforNews: [],
        pvId: "",
        quanping: !1,
        hupuPages: 0,
        toCentent: !1,
        donghaveanymassage: !1
    },
    goToSchedule: function(t) {
        wx.navigateTo({
            url: "/pages/schedule/index"
        });
    },
    quanping: function(t) {
        this.setData({
            quanping: !this.data.quanping
        });
    },
    swichNav: function(t) {
        var a = this, e = t.target.dataset.current;
        if (a.data.currentTab == e) return !1;
        a.setData({
            currentTab: e,
            startRow: 0,
            page: 1,
            beforNews: [],
            articleLists: []
        }), a.getNoteList();
    },
    onReachBottom: function() {
        this.getNoteList();
    },
    onload: function() {},
    onShareAppMessage: function() {
        return {
            title: "最新篮球实时资讯",
            path: "/pages/homePage/index"
        };
    },
    onShow: function(t) {
        var a = this;
        a.setData({
            startRow: 0,
            rowSize: 20
        }), a.data.toCentent ? a.setData({
            toCentent: !1
        }) : this.getNoteList();
    },
    getNoteList: function() {
        var a = this;
        if (0 == a.data.currentTab || 1 == a.data.currentTab) {
            if ("" == a.data.pvId) {
                for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "", i = 0; i < 7; i++) n += e[parseInt(Math.random() * e.length)];
                a.setData({
                    pvId: new Date().getTime() + n
                });
            }
            s = {
                page: a.data.page,
                limit: a.data.rowSize,
                articleType: parseInt(a.data.currentTab) + 1,
                pvId: a.data.pvId
            };
            t.request("/article/getlistByPC", !1, !1, s).then(function(e) {
                if (0 != e.SHTYJSON.data.length) if (a.data.beforNews.length > 0 && a.data.beforNews[0].title == e.SHTYJSON.data[0].title) t.showNoIconToast("暂无新数据"); else {
                    a.setData({
                        beforNews: e.SHTYJSON.data
                    });
                    var n = [];
                    for (var i in e.SHTYJSON.data) 3 != e.SHTYJSON.data[i].resourceType && 2 == e.SHTYJSON.data[i].type && (e.SHTYJSON.data[i].publicTime = t.js_date_time(e.SHTYJSON.data[i].publicTime), 
                    n = n.concat(e.SHTYJSON.data[i]));
                    a.setData({
                        articleLists: a.data.articleLists.concat(n),
                        page: parseInt(a.data.page) + 1
                    });
                } else t.showNoIconToast("暂无新数据");
            }).catch(function(t) {
                console.log(t);
            });
        } else {
            var s = {
                page: a.data.page
            };
            t.request("/article/getlistByhupu", !1, !1, s).then(function(e) {
                var n = e.hupuJson.data.list, i = e.hupuJson.data.hupuPages;
                0 != n.length ? a.data.beforNews.length > 0 && a.data.beforNews[0].title == n[0].title ? t.showNoIconToast("暂无新数据") : (a.setData({
                    beforNews: n,
                    hupuPages: i
                }), a.setData({
                    articleLists: a.data.articleLists.concat(n),
                    page: parseInt(a.data.page) + 1
                })) : t.showNoIconToast("暂无新数据");
            }).catch(function(t) {});
        }
    },
    getHupuViedo: function(a) {
        var e = this, n = {
            vid: a.currentTarget.dataset.id
        };
        t.request("/article/getVideoByhupu", !1, !1, n).then(function(t) {
            e.setData({
                hupuVideoUrl: t.hupuVideoUrl
            });
        }).catch(function(t) {});
    },
    hidevideoModal: function(t) {
        this.setData({
            hupuVideoUrl: null
        });
    },
    gotoContent: function(t) {
        var a = this;
        a.setData({
            toCentent: !0
        });
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "/pages/articleContent/index?articleID=" + e.id + "&articleType=" + a.data.currentTab
        });
    }
});