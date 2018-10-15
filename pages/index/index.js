//index.js
//获取应用实例

const app = getApp()
const accredit_pop = require("../../utils/accredit_pop.js");
Page({
    data: {
      acc_state:false,
      img_bgi: '../../images/index_bi.png'
    },
move_car:function(){
  wx.scanCode({
    scanType: 'qrCode',
    onlyFromCamera: false,
    success: function (res) {
      // console.log(res)
      var n=false;
      if(n==true){
        wx.showModal({
          title: '提示',
          content: '扫码错误',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }else{
        wx.navigateTo({
          url: '../moveCar/moveCar',
        })
      }
     
      
    },
    fail: function () {
    }
  })
},  
bind_car:function(){
  wx.scanCode({
    scanType: 'qrCode',
    onlyFromCamera: false,
    success: function (res) {
      // console.log(res)
      var n = false;
      if (n == true) {
        wx.showModal({
          title: '提示',
          content: '扫码错误',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        wx.navigateTo({
          url: '../bindCar/bindCar',
        })
      }
    },
    fail: function () {
    }
  })
},
  close:function(){
    this.setData({
      acc_state:false
    })
  },
  close_pop:function(){
    this.setData({
      acc_state: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    //  pop 授权
    var that = this
    wx.getSetting({
      success: function (res) {
        console.log(res)
        // var s='scope.userInfo';
        console.log(res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo'] == true) {
          console.log("成功")
          that.setData({
            acc_state: false
          })
        } else {
          console.log("错误")
          that.setData({
            acc_state: true
          })
        }
      }
    })  
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

