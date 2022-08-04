const app = getApp();
import {request} from '../../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:{

      },
      fObject:{},
      total:0
  },

  quxiaosubmit(e){
    console.log(e,'jhdskjdh');
    switch(e.currentTarget.dataset.type){
      case '0':
        wx.showModal({
          title: '提示',
          content: '人数已满',
          showCancel:false
        })
        break;
        case '1':
          case '2':
            this.joinactive()

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      info:JSON.parse(options.param)
    })
    // this.data.info = JSON.parse(options.param)
      // console.log('options',this.data.info);
      this.getStatus()
  },

  getStatus(){
    request({
      url:'/system/yoopuser/getYoop?userid='+app.globalData.openid+'&yoopid='+this.data.info.id,
      method:'POST'
    }).then(res=>{
      console.log('res999',res);
      if(res.data.code === 0){
        this.setData({
          fObject:res.data
        })
      }
    })
  },
  joinactive(){
    request({
      url:'/system/yoopuser/changeYoop?userid='+app.globalData.openid+'&yoopid='+this.data.info.id,
      method:'POST'
    }).then(res=>{
      console.log('res1000',res);
      if(res.data.code === 1){
        wx.showToast({
          title: res.data.msg,
          success:function(){
            wx.navigateTo({
              url: 'pages/appointmentball/index',
            })
          }
        })
      }
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