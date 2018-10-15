// pages/get/get.js
Page({
  data: {
    flag:false,
    sticker_num: 1,
    price:9.90,
    total_prices:9.90,
    cite_json:null,
    place:{
      place_img: '../../images/get_img/get_place.png',
      place_right: '../../images/get_img/get_right.png'
    },
    sticker:{
      title:'挪车贴',
      texture:'可移不干胶',
      size:'81mm*89mm',
      price:'9.90',
      
    },
    sticker_img:'../../images/get_img/get_sticker.png',
    index:0,
    storage_json:[],   
  },
  a_cite:function(){
    wx:wx.navigateTo({
      url: '../cite/cite'
    })
  },
  // 减
  sticker_minus:function(){
    let sticker_num = this.data.sticker_num;
    let sticker_nums = sticker_num - 1;
    let price = this.data.price;
    let t_p = (price * sticker_nums).toFixed(2)
    if (sticker_num<=1){
      return false;
    }
    this.setData({
      sticker_num: sticker_nums,
      total_prices: t_p
      })
  },
  // 加
  sticker_add:function(){
    let sticker_num = this.data.sticker_num + 1;
    let price = this.data.price;
    let t_p = (price * sticker_num).toFixed(2)
    this.setData({
      sticker_num: sticker_num ,
      total_prices: t_p
    })
  },
  Immediately_open:function(){
    console.log("提交")
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
     var that=this
    wx.getStorage({
      key: 'cite_json',
      success: function(res) {
        that.setData({
          cite_json: res.data,
          flag:res.data.state_checked
        })
      },
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
