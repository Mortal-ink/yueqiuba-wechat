const app = getApp();
import {request} from '../../../request/index'
const dateTimePicker = require('../../../utils/dateTimePicker.js')
Page({
    data: {
        userInfo:null,
        islogin:false,
        formData:{
            userid:'',
            gymid:'',
            title:'',
            appointmenttime:'',
            mannum:'',
        },
        startYear: 2000,
        endYear: 2050,
        dateTimeArray:[],
        dateTime:[],
        gymList:[],
        gymname:''
    },
    onLoad: function(param) {
        this.setData({
            'formData.gymid':param.id,
            'formData.userid':app.globalData.openid,
        })
            // this.userInfo = app.globalData.userInfo
            // this.islogin = app.globalData.islogin
        //   if(!this.islogin){
        //     wx.showModal({
        //         title: '提示',
        //         content:"您还未登录，请先进行登录！",
        //         success (res) {
        //             if (res.confirm) {
        //               console.log('用户点击确定')
        //               wx.switchTab({
        //                 url: "/pages/mine/index"
        //             });
        //             } else if (res.cancel) {
        //                 wx.switchTab({
        //                     url: '/pages/appointmentball/index'
        //                   })
        //             }
        //           }
        //     });
        //   }
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
              'formData.appointmenttime':d
          })
    },
    personinput(e){
        this.setData({
            'formData.mannum':e.detail.value
        })
    },
    titleinput(e){
        this.setData({
            'formData.title':e.detail.value
        })
    },
    getGymList(){
        request({
            url:'/system/gyminfo/list',
            method:'POST'
          }).then(res => {
              let obj = res.data.rows.find((item)=>{
                 if(item.id == this.data.formData.gymid){
                    return item
                }
              })
              console.log('obj',obj);
            this.setData({
                gymname:obj.gym
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
            'formData.appointmenttime':d
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
    onReady: function() {},
    quxiaosubmit: function() {    
        let obj = this.data.formData
        console.log('fdlf',this.data);
        
        if(obj.title === '' || obj.appointmenttime ==='' || obj.mannum === ''){
            wx.showModal({
                title:'提示',
                content: '请完成必项!',
                showCancel:false
               })
        }
        request({
            url:'/system/orderinfo/addOrder?userid='+app.globalData.openid+'&gymid='+obj.gymid+'&appointmenttime='+obj.appointmenttime+'&mannum='+obj.mannum+'&title='+obj.title,
            method:'POST',
        }).then(res=>{
            if(res.data.code === 0){
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success:function(){
                        wx.navigateTo({
                            url: '/appointmentBall/pages/gymnasiumList/index',
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