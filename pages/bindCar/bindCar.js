//index.js
//获取应用实例
const app = getApp()
const car_city= require("../../utils/car_city.js");
Page({
  data: {
    pull_img:'../../images/pull_down.png',
    img_bi: '../../images/bi_mo_car.png',
    user_txt:'车主你好,您已开启此挪车码,如需修改绑定信息请点击下方按钮进行修改。',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    selectData: [],
    index: 0,
    car_list:{
      car_mark:'',
      car_phone:'',
      car_code:''
    }
  },
  // 获取车牌号
  u_t_carMark:function(e){
    var car_mark='car_list.car_mark';
    var car_marks = this.data.selectData[this.data.index]
    console.log(e.detail.value)
    this.setData({
      [car_mark]: car_marks+e.detail.value
    })
  },
  // 获取手机号码
  u_t_phoneMark:function(e){
    var car_phone = 'car_list.car_phone';
    // console.log(e.detail.value)
    // this.setData({
    //   [car_phone]: e.detail.value
    // })
  },
  // 验证手机号
  loginPhone: function (e) {
    console.log(e)
    var car_phone = 'car_list.car_phone';
    var phone = e.detail.value;
    console.log(phone)
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      wx.showModal({
        title: '提示',
        content: '号码错误',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      this.setData({
        [car_phone]: e.detail.value
      })
    }
  },
  // 获取输入验证码
  u_t_codeMark:function(e){
    var car_code = 'car_list.car_code';
    console.log(e.detail.value)
    this.setData({
      [car_code]: e.detail.value
    })
  },
  // 验证码
  get_code:function(){
   console.log("code")
   console.log(this.data.car_list)
  },
  // 点击下拉显示框
  selectTap(e) {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const selectData = []; 
    for (var i = 0; i < 392; i++) {
      selectData.push(car_city.car_city[i].code)
    }
    this.setData({
      selectData: selectData
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
