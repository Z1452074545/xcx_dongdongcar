// pages/cite/cite.js
var tcity = require("../../utils/citys.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val_name:'',
    val_phone:'',
    val_cite:'',
    modai:false,
    nomodai:false,
    cite_list:[],
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false

  },
  //新增地址 跳转
  new_add:function(){
    this.setData({
      modai: true
    })
  },
  // 编辑 
  new_dataup:function(){
    this.setData({
      modai: true
    })
  },
  // 新增收货地址
  add_cite:function(){
    var user_json={
      img_checked: '../../images/get_img/get_checked.png',
      img_nochecked: '../../images/get_img/get_nochecked.png',
      name:this.data.val_name,
      phone:this.data.val_phone,
      cite: this.data.province + this.data.city + this.data.county +this.data.val_cite,
      compile: '编辑',
      state_checked: false,
    }
    var cite_list=[];
    cite_list.push(user_json);
    console.log(user_json)
    this.setData({
      modai:false,
      cite_list:cite_list
    })
  },
  // 删除地址
  but_del:function(){
    wx.clearStorage()
    this.setData({
      modai: false,
      cite_list:[]
    })
  },
  // 确认
  but_affirm:function(){
    this.add_cite()
  },
  // 获取用户名
  val_name: function (e) {
    console.log(e.detail.value)
    this.setData({
      val_name: e.detail.value
    })
   },
   // 获取电话
   val_phone:function(e){
     console.log(e.detail.value)
     this.setData({
       val_phone: e.detail.value
     })
   },
  //  获取详细地址
  val_cite:function(e){
    console.log(e.detail.value)
    this.setData({
      val_cite: e.detail.value
    })
  },
  state_checked:function(e){
    console.log(e)
    let index=e.currentTarget.dataset.index
    let cite_list = this.data.cite_list
    console.log(index);
    var str ='cite_list['+index+'].state_checked'
    this.setData({
      [str]: !this.data.cite_list[index].state_checked,
    })
    for (var i = 0; i < cite_list.length;i++){
      if (cite_list[i].state_checked==true){
        console.log(cite_list[i]);
        wx.setStorage({
          key: 'cite_json',
          data: cite_list[i],
        })

         }
    }
    
  },



  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;

    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },


  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("onLoad");
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');


 


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
    var that = this
    wx.getStorage({
      key: 'cite_json',
      success: function (res) {
        console.log(res.data)
        var cite_list = []
        cite_list.push(res.data)
        that.setData({
          cite_list: cite_list,
        })
      },
    })
    this.onLoad();
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