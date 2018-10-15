// pages/moveCar/moveCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_list:{
      title:'是否呼叫车主',
      phone:'13888888888',
    },
    service_list:{
      title:'客服电话',
      phone:'暂无车主信息请拨打客服电话由我们联系车主,暂只提供北京地区服务'
    },
    state_flag:true,
    pop_phone_state:false,
    pop_state:false,
    img_bi: '../../images/bi_mo_car.png',
    car_bi: '../../images/car_bi.png',
    icon_sj: '../../images/icon_sj.png',
    error_txt:'若车主未接听电话,挂断后您可以在30分钟内回拨您所拨打的电话号码,超过30分钟后,需再次扫描二维码进行再次呼叫',
    menu_list: [
      {
        img: '../../images/serve_img/serve_help.png',
        txt: '道路救援'
      },
      {
        img: '../../images/serve_img/serve_accident.png',
        txt: '事故处理'
      },
      {
        img: '../../images/serve_img/serve_refuel.png',
        txt: '加油卡充值'
      },
      {
        img: '../../images/serve_img/serve_foul.png',
        txt: '违章代缴'
      }
    ]
  },
// 跳转 电话
  a_phone:function(){
    this.setData({
      pop_phone_state:true
    })
  },
// 关闭 电话
  car_but_left:function(){
    this.setData({
      pop_phone_state:false
    })
  },
// 打电话
  call_up:function(){
    let state_flag = this.data.state_flag 
    if (state_flag==true){
      console.log("拨打车主电话")
    }else{
      console.log("拨打客服电话")
    }
  },
// 跳转 短信
  a_sms:function(){
    wx.navigateTo({
      url: '../sms/sms',
    })
  },
  get_menu_index: function (event) {
    // console.log(event)
    console.log(event.currentTarget.dataset.index)
    const ins = event.currentTarget.dataset.index;
    switch (ins) {
      case 0:
        this.setData({
          pop_state:true,
          index: 0
        })
        var that=this;
        setTimeout(function () {
          that.setData({
            pop_state: false
          })
        }, 1000)
        break;
      case 1:
        this.setData({
          pop_state: true,
          index: 1
        })
        var that = this;
        setTimeout(function () {
          that.setData({
            pop_state: false
          })
        }, 1000)
        break;
      case 2:
        this.setData({
          pop_state: true,
          index: 2
        })
        var that = this;
        setTimeout(function () {
          that.setData({
            pop_state: false
          })
        }, 1000)
        break;
      case 3:
        this.setData({
          pop_state: true,
          index: 3
        })
        var that = this;
        setTimeout(function () {
          that.setData({
            pop_state: false
          })
        }, 1000)
        break;
    }
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
