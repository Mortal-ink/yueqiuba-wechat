const app = getApp();
import {request} from '../../../request/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderlist:[
      {
        gymaddress:'',
        orderprice:'',
        Appointmenttime:'',
        orderstatus:'',
        userphone:'',
        mannum:'',
        ordertime:'',
      },
    ]
  },

  fSkin(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/appointmentBall/pages/basballgame/index?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData.islogin){
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
    request({
      url:'/system/gyminfo/list',
      method:'POST'
    }).then(res => {
      this.setData({
        orderlist:res.data.rows
      })
      console.log('res',res);
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})