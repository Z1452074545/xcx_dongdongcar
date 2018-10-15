// pages/sms/sms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sms_state:'1',
    flag:true,
    warn:'动动车提醒您:',
    state_order_n:'您的爱车阻碍他人出行,为方便他人出行,请到您的停车地点及时挪车,谢谢!',
    state_order_t:'您的车辆存在异常,请到您的停车点检测您的爱车是否存在安全隐患,谢谢!',
    img_bi: '../../images/bi_mo_car.png',
    img_border: '../../images/border.png',
  },
  state_order_n:function(e){
    // console.log(e.currentTarget.dataset.state);
    let flag=this.data.flag
    this.setData({
      flag:!flag,
      sms_state: e.currentTarget.dataset.state
    })
  },
  state_order_t: function (e) {
    // console.log(e.currentTarget.dataset.state);
    let flag = this.data.flag
    this.setData({
      flag: !flag,
      sms_state: e.currentTarget.dataset.state
    })
  },
  but_send:function(){
    // console.log(this.data.sms_state)
    let sms_state = this.data.sms_state;
    switch (sms_state){
      case '0':
      console.log("发送短信模板二");
      break;
      case '1':
      console.log("发送短信模板一");
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