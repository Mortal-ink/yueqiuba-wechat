const t = getApp();
var e = require("../../../5AFFB626C45B99CF3C99DE21E3CD7A06.js");
// require("../../../98062E97C45B99CFFE604690F70E7A06.js"));

Page({
    data: {
        team1:"篮球小队",
        team2:"热血篮球队",
        userHaveTeam: true,
        TeamMemberInfoList: [],
        isLogin: !0,
        showCreateTeam: !1,
        showPhone: !1,
        teamHeadPortrait: "",
        newTeamName: "",
        teamTempHeadPortrait: ""
    },
    yoop:function(){
        if(!this.userHaveTeam){
            wx.redirectTo({
                url: '/appointmentBall/pages/appointmentBallDetail/index',
            })
        }
                    else  {
                        wx.showModal({
                            title: "温馨提示：",
                            content: "你不是小队队长！",
                            showCancel: !1
                            });
                    }
          
    },
    yaoqingjoinTeam: function(e) {
        var a = this;
        wx.scanCode({
            success: function(e) {
                var n = {
                    userOpenId: e.result
                };
                t.request("/appointmentball/team/invitationJoinTeam", !1, !0, n).then(function(e) {
                    a.onShow();
                }).catch(function(e) {});
            }
        });
    },
    onLoad: function(e) {
        if(!t.globalData.islogin){
            wx.showModal({
                title: '提示',
                content:"您还未登录，请先进行登录！",
                success (res) {
                    if (res.confirm) {
                      wx.switchTab({
                        url: "/pages/mine/index"
                    });
                    } 
                    else if (res.cancel) {
                        wx.switchTab({
                            url: '/appointmentBall/pages/teamCard/index'
                          })
                    }
                  }
            });
          }
        this.setData({
            teamId: e.teamId
        });
    },
    newTeamNameFun: function(e) {
        this.setData({
            userHaveTeam: t.globalData.userHaveTeam
        });
    },
    openEngagement: function(e) {
        var a = this, n = a.data.newPhone;
        if (/^1[34578]\d{9}$/.test(n)) {
            var o = {
                userPhone: n
            };
            t.request("/appointmentball/team/openEngagement", !1, !0, o).then(function(e) {
                a.onShow(), a.hidePhoneModal(), t.showNoIconToast("开启成功");
            }).catch(function(e) {});
        } else t.showNoIconToast("手机号有误");
    },
    newPhoneFun: function(e) {
        this.setData({
            newPhone: e.detail.value
        });
    },
    yuezhanguan: function(e) {
        var a = this, n = {};
        t.request("/appointmentball/team/guanbiEngagement", !1, !0, n).then(function(e) {
            a.onShow(), t.showNoIconToast("关闭成功");
        }).catch(function(e) {});
    },
    jiesan: function(e) {
        var a = this;
        wx.showModal({
            title: "确认解散",
            content: "解散后队伍信息清零",
            success: function(e) {
                if (e.cancel) ; else {
                    var n = {};
                    t.request("/appointmentball/team/dissolutionTeam", !1, !0, n).then(function(e) {
                        a.onShow();
                    }).catch(function(e) {});
                }
            }
        });
    },
    changeTeamHeadFun: function(t) {
        var a = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(t) {
                wx.uploadFile({
                    url: e.ManagerUploadFiles,
                    filePath: t.tempFilePaths[0],
                    name: "file",
                    success: function(e) {
                        var t = JSON.parse(e.data);
                        a.setData({
                            teamTempHeadPortrait: t.result
                        }), wx.showModal({
                            title: "温馨提示：",
                            content: "头像上传成功",
                            showCancel: !1
                        });
                    },
                    fail: function(e) {
                        wx.showModal({
                            title: "温馨提示：",
                            content: "头像上传失败,请稍后再试",
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    createNewTeamFun: function(e) {
        var a = this;
        if ("" != a.data.newTeamName) if ("" != a.data.teamTempHeadPortrait) {
            var n = {
                teamHeadPortrait: a.data.teamTempHeadPortrait,
                teamName: a.data.newTeamName
            };
            t.request("appointmentball/team/createTeam", !1, !0, n).then(function(e) {
                t.showNoIconToast("创建成功"), a.setData({
                    showCreateTeam: !1
                }), a.onShow();
            }).catch(function(e) {});
        } else wx.showModal({
            title: "温馨提示：",
            content: "请上传队伍头像",
            showCancel: !1
        }); else wx.showModal({
            title: "温馨提示：",
            content: "请输入小队昵称",
            showCancel: !1
        });
    },
    createTeam: function(e) {
        this.setData({
            showCreateTeam: !0
        });
    },
    yuezhankai: function() {
        this.setData({
            showPhone: !0
        });
    },
    hideModal: function() {
        this.setData({
            showCreateTeam: !1
        });
    },
    hidePhoneModal: function() {
        this.setData({
            showPhone: !1
        });
    },
    userCardClick: function(e) {
        var t = e.currentTarget.dataset.userId;
        wx.navigateTo({
            url: "../playerCard/index?id=" + t
        });
    },
    onShow: function(e) {
        // var a = this, n = {
        //     teamId: a.data.teamId
        // };
        // t.request("appointmentball/team/getByTeamId", !1, !0, n).then(function(e) {
        //     a.setData({
        //         isLogin: !1,
        //         TeamMemberInfoList: e.TeamMemberInfoList,
        //         teamEngagement: e.teamEngagement
        //     });
        // }).catch(function(e) {}), t.request("/appointmentball/team/isLeader", !1, !0).then(function(e) {
        //     a.setData({
        //         isLeader: e.isLeader
        //     });
        // }).catch(function(e) {});
    },
    onReady: function() {},
    tuichuTeam: function() {
        var e = this;
        t.request("/appointmentball/team/logoutTeam", !1, !0).then(function(t) {
            e.onShow();
        }).catch(function(e) {});
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});