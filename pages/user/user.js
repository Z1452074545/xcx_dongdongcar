// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    meun_list:[
      {
        img:'../../images/user_img/user_us.png',
        txt:'车主信息'
      },
      {
        img: '../../images/user_img/user_help.png',
        txt: '使用帮助'
      },
      {
        img: '../../images/user_img/user_move.png',
        txt: '移车记录'
      },
      {
        img: '../../images/user_img/user_leave.png',
        txt: '车主留言板'
      },
      {
        img: '../../images/user_img/user_service.png',
        txt: '客服电话'
      },
      {
        img: '../../images/user_img/user_order.png',
        txt: '历史订单'
      },
    ]
    
  },
  get_index: function (event){
    console.log(event.currentTarget.dataset.index);
    const ins = event.currentTarget.dataset.index;
    switch (ins) {
      case 0:
      wx.navigateTo({
        url: '../../template/accredit_pop/accredit_pop',
      })
        this.setData({
          index: 0
        })
        break;
      case 1:
        this.setData({
          index: 1
        })
        break;
      case 2:
        this.setData({
          index: 2
        })
        break;
      case 3:
        this.setData({
          index: 3
        })
        break;
      case 4:
        this.setData({
          index: 4
        })
        break;
      case 5:
        this.setData({
          index: 5
        })
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
