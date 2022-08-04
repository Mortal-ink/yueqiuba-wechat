Page({
    data: {
        iconList: [ {
            icon: "upstagefill",
            color: "red",
            remark: "实时",
            name: "东西部排行",
            url: "/more/pages/teamRankfill/index",
            type: "2"
        }, {
            icon: "rankfill",
            color: "orange",
            remark: "TOP",
            name: "球员排行",
            url: "/more/pages/playerRankfill/index",
            type: "2"
        }, {
            icon: "form",
            color: "orange",
            name: "NBA赛程",
            url: "/pages/schedule/index",
            type: "2"
        }, {
            icon: "group_fill",
            color: "orange",
            name: "球队信息",
            url: "/more/pages/teamList/index",
            type: "2"
        } ],
        zbiconList: [ {
            icon: "shop",
            color: "red",
            remark: "特惠",
            name: "篮球商城",
            url: "/shop/pages/catalog/index",
            type: "3"
        } ],
        cbaiconList: [ {
            icon: "upstagefill",
            color: "red",
            remark: "",
            name: "积分排行",
            url: "/more/pages/cbaTeamRank/index",
            type: "2"
        }, {
            icon: "form",
            color: "orange",
            remark: "LIVE··",
            name: "CBA赛程",
            url: "/more/pages/cbaSchedule/index",
            type: "2"
        } ],
        gridCol: 4
    },
    onLoad: function(e) {},
    onReady: function() {},
    gotoPages: function(e) {
        var o = e.currentTarget.dataset.url, a = e.currentTarget.dataset.type;
        1 == a ? wx.navigateTo({
            url: "/pages/webview/index?url=" + o
        }) : 2 == a ? wx.navigateTo({
            url: o
        }) : 3 == a ? wx.showToast({
            title: "模块暂未开放",
            icon: "loading"
        }) : this.setData({
            modalName: "Modal"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});