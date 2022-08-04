 const t = getApp();
import {request} from '../../../request/index'
var e = require("../../../5AFFB626C45B99CF3C99DE21E3CD7A06.js");
//  let t = (getApp(),require("../../../98062E97C45B99CFFE604690F70E7A06.js"));
Page({
    data: {
        userInfo:null,
        userHaveTeam: !1,
        isLeader:1,
        tmID:"",
        tmname:"篮球少女",
        invite: !1,
        teammember:[],
        TeamMemberInfoList: [],
        isLogin: 1,
        showCreateTeam: !1,
        showinvite: !1,
        teamavatarurl:"",
        capphone:"",
        teamHeadPortrait: "",
        teamnick: "",
        teamTempHeadPortrait: ""
    },
    Toteaminfo:function(){
        wx.navigateTo({
            url: '/appointmentBall/pages/teaminfo/index',
          })
    },
    uploadImg(){
        let that = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            that.setData({
             'teamavatarurl':res.tempFilePaths[0]
            }) ,wx.showModal({
                title: "温馨提示：",
                content: "头像上传成功",
                showCancel: !1
            });
          }
        })
    },
    teamnickFun: function(e) {
        this.setData({
            teamnick: e.detail.value.teamnick
        });
    },
    capphoneFun: function(e) {
        this.setData({
            capphone: e.detail.value.capphone
        });
    },
    formSubmit(e){
        let oBj = e.detail.value
        request({
          url:'/system/teaminfo/add?openid='+'&phone='+oBj.phone+'&nick='+oBj.nick+'&avatar='+oBj.avatarUrl,
          method:'POST',
          header:{
            'content-type': 'x-www-form-urlencoded',
          },
        }).then(res =>{
          console.log('bbb',res)
          if(res.code === 0){
            wx.showToast({
              title: res.msg,
              success:function(){
                wx.navigateTo({
                  url: 'appointmentBall/pages/teamHome/index',
                })
              }
            })
          }
        }).catch(err => err)
      },
    yaoqingjoinTeam: function() {
        var a = this;


    },
    openEngagement: function() {
        var a = this, n = a.data.newPhone;
        if (/^1[34578]\d{9}$/.test(n)) {
            var o = {
                userPhone: n
            };
            t.request("/appointmentball/team/openEngagement", !1, !0, o).then(function() {
                a.onShow(), a.hidePhoneModal(), t.showNoIconToast("开启成功");
            }).catch(function() {});
        } else t.showNoIconToast("手机号有误");
    },
    yuezhanguan: function() {
        var a = this, n = {};
        t.request("/appointmentball/team/guanbiEngagement", !1, !0, n).then(function() {
            a.onShow(), t.showNoIconToast("关闭成功");
        }).catch(function() {});
    },
    jiesan: function() {
        var a = this;
        wx.showModal({
            title: "确认解散",
            content: "解散后队伍信息清零",
            success: function(e) {
                if (e.cancel) ; else {
                    var n = {};
                    t.request("/appointmentball/team/dissolutionTeam", !1, !0, n).then(function() {
                        a.onShow();
                    }).catch(function() {});
                }
            }
        });
    },
    // changeTeamHeadFun: function() {
    //     var a = this;
    //     wx.chooseImage({
    //         count: 1,
    //         sizeType: [ "original", "compressed" ],
    //         sourceType: [ "album" ],
    //         success: function(t) {
    //             wx.uploadFile({
    //                 url: e.ManagerUploadFiles,
    //                 filePath: t.tempFilePaths[0],
    //                 name: "file",
    //                 success: function(e) {
    //                     var t = JSON.parse(e.data);
    //                     a.setData({
    //                         teamTempHeadPortrait: t.result
    //                     }), wx.showModal({
    //                         title: "温馨提示：",
    //                         content: "头像上传成功",
    //                         showCancel: !1
    //                     });
    //                 },
    //                 fail: function() {
    //                     wx.showModal({
    //                         title: "温馨提示：",
    //                         content: "头像上传失败,请稍后再试",
    //                         showCancel: !1
    //                     });
    //                 }
    //             });
    //         }
    //     });
    // },
    createNewTeamFun: function() {
        var a = this;
        if ("" != a.data.newTeamName &&"" != a.data.teamavatarurl&&"" != a.data.capphone) {
            wx.showModal({
                title: "温馨提示：",
                content: "创建成功",
                showCancel: !1
                });
                a.setData({
                     showCreateTeam: !1, 
                     userHaveTeam: 1,
                    }),
                 t.globalData.userHaveTeam = a.userHaveTeam;
                 a.onShow();
            }
        else if("" != a.data.teamavatarurl) {
            wx.showModal({
            title: "温馨提示：",
            content: "请上传队伍头像",
            showCancel: !1
            });
    } else if("" != a.data.teamavatarurl) { wx.showModal({
            title: "温馨提示：",
            content: "请输入小队昵称",
            showCancel: !1
            });
    }else wx.showModal({
            title: "温馨提示：",
            content: "请输入队长联系电话",
            showCancel: !1
        });
    },
    createTeam: function() {
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
                            url: '/pages/appointmentball/index'
                          })
                    }
                  }
            });
          }
       else this.setData({
            showCreateTeam: !0
        });
    },
    setUHT:function(){
        this.setData({
            userHaveTeam: !1
        });
    },
    invite: function(){
        this.setData({
            showinvite: !0
        });
    },
    Disband: function(){
        if(this.data.userHaveTeam){
            wx.showModal({
                title: '提示',
                content:"您确定解散当前队伍吗！",
                success (res) {
                    if (res.confirm) {
                        wx.redirectTo({
                            url: '/appointmentBall/pages/teamHome/index',
                          })
                    } 
                    else if (res.cancel) {
                        this.setUHT
                    }
                  }
            });
          }
    },
    Invite: function(){
        var a = this;
        wx.showToast({
            title: '已发出邀请',
            icon: 'success',
            duration: 2000//持续的时间
          });
        a.hideinvite;
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
    hideinvite: function() {
        this.setData({
            showinvite: !1
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
    onShow: function() {
    //     var a = this;
    //     t.request("appointmentball/team/getUserTeam", !1, !0).then(function(e) {
    //         a.setData({
    //             isLogin: !1,
    //             TeamMemberInfoList: e.TeamMemberInfoList,
    //             teamEngagement: e.teamEngagement
    //         });
    //     }).catch(function() {}), t.request("/appointmentball/team/isLeader", !1, !0).then(function(e) {
    //         a.setData({
    //             isLeader: e.isLeader
    //         });
    //     }).catch(function() {});
     },
    onReady: function() {},
    tuichuTeam: function() {
        var e = this;
        t.request("/appointmentball/team/logoutTeam", !1, !0).then(function() {
            e.onShow();
        }).catch(function() {});
    },
    onHide: function() {},
    onLoad: function() {
        this.setData({
            userInfo:t.globalData.userInfo,
          })
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});