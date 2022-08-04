var t = require("../../98062E97C45B99CFFE604690F70E7A06.js"), n = require("../../utils/wxParse/wxParse.js");

Page({
    data: {},
    onLoad: function(e) {
        var o = this, i = e.articleID;
        2 != e.articleType && t.request("/article/getContentByPC", !1, !1, {
            articleID: i
        }).then(function(t) {
            o.setData({
                articleContent: t.htmlContent,
                title: t.title
            }), n.wxParse("articleContent", "html", o.data.articleContent, o);
        }).catch(function(t) {
            console.log(t);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});