
const app = getApp();
import {request} from '../../../request/index'

Page({
    data: {
        // showLoading: false,
        isFixed: !1,
        nearbyList: [],
        pageNum:1,
        pageSize:5,
        totalPage:0
    },
    onLoad: function(t) {
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
        this.getList()
    },
    getList(){
        request({
            url:'/system/yoopinfo/list?pageNum='+this.data.pageNum+'&pageSize='+this.data.pageSize,
            method:'POST',
            // data:{
            //     pageNum:this.data.pageNum,
            //     pageSize:this.data.pageSize
            // }
        }).then(res=>{
            console.log('kjds',res);
            if(res.data.code === 0){
        
                const total = res.data.total
      this.data.totalPage = Math.ceil(total/this.data.pageSize)
                    this.setData({
                        nearbyList:[...this.data.nearbyList,...res.data.rows]
                    })
                wx.stopPullDownRefresh()
            }
        })
    },
    goDeatil(e){
        console.log('ttt',e);
        let index = e.currentTarget.dataset.index
        let str = JSON.stringify(this.data.nearbyList[index])
        wx.navigateTo({
          url: '/appointmentBall/pages/nearyoop/index?param='+str
        })
    },
    onReady: function() {},
    onShow: function() {
  
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.pageNum =1
        this.data.nopage=false
        this.setData({
            nearbyList:[]
        })
        this.getList()
    },
    onReachBottom: function() {
        if(this.data.pageNum >= this.data.totalPage){
            wx.showToast({
              title: '已加载全部数据！',
            })
          }else{
            this.data.pageNum++
            this.getList()
          }
    }
});