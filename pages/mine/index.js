const app = getApp();
import { request } from "../../request/index";

Page({
    data: {
        userInfo:{},
        islogin:false,
        canIUseGetUserProfile: false
    },
  
    getUserProfile: function (e) {
        wx.getUserProfile({
            desc: '用于完善会员资料',
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            islogin: true
          })
          console.log('dshds',res.userInfo)
          wx.setStorageSync('userInfo', res.userInfo)           //用户信息存储到本地存储
          app.globalData.userInfo = res.userInfo;           //赋值全局变量
          app.globalData.islogin = true;
        }
    })
        fail: () => {
          console.log('获取用户数据失败')
        }
        //小程序端初始化云开发
        wx.cloud.init({
            env: 'yqlogin-1gd006zx681c3ca8',
            traceUser: true
           })
        var that = this;
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
              app.globalData.openid = res.result.openid;
            //   console.log(res);
              // console.log("云函数获取用户openid:");
              console.log(res.result.openid);
              this.saveUser(res.result.openid)
            },
            fail: err => {
              console.error('[云函数] [login] 调用失败', err)
            }
        })
    },
    saveUser(sId){
      request({
        url:'/system/userinfo/add?openid='+sId,
        method:'POST',
        header:{
          'content-type': 'x-www-form-urlencoded',
        },
        // data:{
        //   openid:sId,
        //   phone:'1',
        //   nick:'1',
        //   avatar:'1',
        //   sex:'1'
        // }
      }).then(res =>{
        console.log('jjj',res)
      }).catch(err => err)
    },
    onLoad: function() {
        if (wx.getUserProfile) {
            this.setData({
              canIUseGetUserProfile: true
            })
          }  
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    feedback: function(){
      wx.showToast({
        title:"功能暂未开放",
        icon: 'none',
        duration: 2000
    });
    },
    contact: function(){
      wx.showToast({
        title: "功能暂未开放",
        icon: 'none',
        duration: 2000
    });
    },
});


