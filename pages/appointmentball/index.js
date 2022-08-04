getApp();

// import { request, showNoIconToast } from "../../98062E97C45B99CFFE604690F70E7A06.js";

Page({
    data: {
        cardCur: 0,
        DotStyle: !0,
        swiperList: [],
        redirectUrlType:1,
        redirectUrl:null,
        modules:[{
            id:1,
            Title:"发起约球",
            Subtitle:"每次结交新球友",
            iconurl:"/resources/images/yoop/sc.png",
            redirectUrlType:"1",
            redirectUrl:"/appointmentBall/pages/appointmentBallDetail/index"
        },
    {
        id:2,
        Title:"附近球局",
        Subtitle:"查看附近的球局",
        iconurl:"/resources/images/yoop/team.png",
        redirectUrlType:"2",
        redirectUrl:"/appointmentBall/pages/appointmentBallList/index" 
    },
    {
        id:3,
        Title:"场馆预约",
        Subtitle:"球馆场地预约",
        iconurl:"/resources/images/yoop/site.png",
        redirectUrlType:"3",
        redirectUrl:"/appointmentBall/pages/gymnasiumList/index" 
    },
    {
        id:4,
        Title:"篮球赛事",
        Subtitle:"了解最新赛事资讯",
        iconurl:"/resources/images/yoop/news.png",
        redirectUrlType:"4",
        redirectUrl:"/pages/schedule/index" 
    },
    {
        id:5,
        Title:"篮球小队",
        Subtitle:"组建自己的最强战队",
        iconurl:"/resources/images/yoop/ballteam.png",
        redirectUrlType:"5",
        redirectUrl:"/appointmentBall/pages/teamHome/index" 
    },    {
        id:6,
        Title:"附近小队",
        Subtitle:"邀战附近的队伍",
        iconurl:"/resources/images/yoop/challenge.png",
        redirectUrlType:"6",
        redirectUrl:"/appointmentBall/pages/teamCard/index" 
    },
]
    },
    onLoad: function(e) {
        // var r = this;
        // r.towerSwiper("swiperList"),
        // //  request("1000001021668441", !0, !1).then(function(t) {
        // //     r.setData({
        // //         modules: t.moduleList
        // //     });
        // // }).catch(function(t) {}), 
        // request("1000001521585289", !0, !1).then(function(t) {
        //     r.setData({
        //         swiperList: t.swiperList
        //     });
        // }).catch(function(t) {});
    },
    cardSwiper: function(t) {
        this.setData({
            cardCur: t.detail.current
        });
    },
    towerSwiper: function(t) {
        for (var e = this.data[t], r = 0; r < e.length; r++) e[r].zIndex = parseInt(e.length / 2) + 1 - Math.abs(r - parseInt(e.length / 2)), 
        e[r].mLeft = r - parseInt(e.length / 2);
        this.setData({
            swiperList: e
        });
    },
    towerStart: function(t) {
        this.setData({
            towerStart: t.touches[0].pageX
        });
    },
    towerMove: function(t) {
        this.setData({
            direction: t.touches[0].pageX - this.data.towerStart > 0 ? "right" : "left"
        });
    },
    towerEnd: function(t) {
        var e = this.data.direction, r = this.data.swiperList;
        if ("right" == e) {
            for (var n = r[0].mLeft, a = r[0].zIndex, i = 1; i < r.length; i++) r[i - 1].mLeft = r[i].mLeft, 
            r[i - 1].zIndex = r[i].zIndex;
            r[r.length - 1].mLeft = n, r[r.length - 1].zIndex = a, this.setData({
                swiperList: r
            });
        } else {
            for (var s = r[r.length - 1].mLeft, o = r[r.length - 1].zIndex, u = r.length - 1; u > 0; u--) r[u].mLeft = r[u - 1].mLeft, 
            r[u].zIndex = r[u - 1].zIndex;
            r[0].mLeft = s, r[0].zIndex = o, this.setData({
                swiperList: r
            });
        }
    },
    clickModule: function(e) {
        var r = e.currentTarget.dataset.redirecturltype, n = e.currentTarget.dataset.redirecturl;
        // console.log(e);
        // console.log(r);
        // console.log(n);
        1 == r ? wx.navigateTo({
            url: n
        }) : 2 == r ? wx.navigateTo({
            url:  n
        }) : 3 == r ? wx.navigateTo({
            url:  n
        }) : 4 == r ? wx.navigateTo({
            url: n
        }) : 5 == r ? wx.navigateTo({
            url: n
        }) : 6 == r ? wx.navigateTo({
            url: n
        }) : showNoIconToast("功能暂未开放");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {}
});