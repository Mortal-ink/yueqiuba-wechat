const app = getApp();
import {request} from '../../../request/index'
const dateTimePicker = require('../../../utils/dateTimePicker.js');
Page({
    data: {
        userInfo:null,
        islogin:false,
        formData:{
            title:'',
            date:'',
            manNum:'',
        },
        startYear: 2000,
        endYear: 2050,
        dateTimeArray:[],
        dateTime:[],
        gymList:[],
        gymIndex:-1,
    },
    onLoad: function(o) {
        this.setData({
            userInfo:app.globalData.userInfo,
          })
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
        this.getGymList()
      this.initDate()
    },
    initDate(){
        var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
        // 精确到分的处理，将数组的秒去掉
        obj.dateTimeArray.pop();
        obj.dateTime.pop();
        this.setData({
            dateTimeArray: obj.dateTimeArray,
            dateTime: obj.dateTime,
          });
          let d = this.data.dateTimeArray[0][this.data.dateTime[0]]+'-'+this.data.dateTimeArray[1][this.data.dateTime[1]]+'-'+
          this.data.dateTimeArray[2][this.data.dateTime[2]]+' '+
          this.data.dateTimeArray[3][this.data.dateTime[3]]+':'+
          this.data.dateTimeArray[4][this.data.dateTime[4]]
          this.setData({
              'formData.date':d
          })
    },
    getGymList(){
        request({
            url:'/system/gyminfo/list',
            method:'POST'
          }).then(res => {
            this.setData({
                gymList:res.data.rows
            })
          })
    },
    changeDateTime(e){
        this.setData({ dateTime: e.detail.value });
        let d = this.data.dateTimeArray[0][this.data.dateTime[0]]+'-'+this.data.dateTimeArray[1][this.data.dateTime[1]]+'-'+
        this.data.dateTimeArray[2][this.data.dateTime[2]]+' '+
        this.data.dateTimeArray[3][this.data.dateTime[3]]+':'+
        this.data.dateTimeArray[4][this.data.dateTime[4]]
        this.setData({
            'formData.date':d
        })
    },
    changeDateTimeColumn(e) {
        var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
        arr[e.detail.column] = e.detail.value;
        dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

        this.setData({ 
          dateTimeArray: dateArr,
          dateTime: arr
        });
      },
    bindGymChange(e){
        console.log('dddd',e);
        this.setData({
            gymIndex:e.detail.value
        })
        this.gymIndex = e.detail.value
    },
    bindnum(e){
        this.setData({
            'formData.manNum':e.detail.value
        })
    },
    bindtitle(e){
        this.setData({
            'formData.title':e.detail.value
        })
    },
    onReady: function() {},
    quxiaosubmit: function() {    
        if(this.data.formData.title === '' || this.data.formData.manNum==='' || this.data.formData.date==='' || this.data.gymIndex === -1){
            wx.showModal({
                title:'提示',
                content: '请完成必项!',
                showCancel:false
               })
        }
        let index = this.data.gymIndex
        let arr = this.data.gymList
        let obj = arr[index]
        
        request({
            url:'/system/orderinfo/addOrder?userid='+app.globalData.openid+'&gymid='+obj.id+'&appointmenttime='+this.data.formData.date+'&mannum='+this.data.formData.manNum+'&title='+this.data.formData.title,
            method:'POST',
        }).then(res=>{
            if(res.data.code === 0){
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success:function(){
                        wx.switchTab({
                            url: '/pages/appointmentball/index',
                          })
                    }
                   })
             
            }
        })
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});