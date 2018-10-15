// pages/serve/serve.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    acc_state: false,
    index:0,
    imgUrls: [
      '../../images/serve_img/serve_banner01.png',
      '../../images/serve_img/serve_banner01.png',
      '../../images/serve_img/serve_banner01.png'
    ],
    menu_list: [
      { 
        img: '../../images/serve_img/serve_help.png',
        txt:'道路救援'
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
      },
      {
        img: '../../images/serve_img/serve_restriction.png',
        txt: '限行提醒'
      },
      {
        img: '../../images/serve_img/serve_etc.png',
        txt: 'ETC办理'
      },
      {
        img: '../../images/serve_img/serve_insurance.png',
        txt: '买车险'
      },
      {
        img: '../../images/serve_img/seerve_credit.png',
        txt: '信用卡办理'
      },
    ]
  },
  // 获取banner idnex值
  get_index: function (event){
    console.log(event.currentTarget.dataset.index)
  },
  get_menu_index: function (event){
    // console.log(event)
    console.log(event.currentTarget.dataset.index)
    const ins = event.currentTarget.dataset.index;
    switch (ins){
      case 0:
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
      case 6:
        this.setData({
          index: 6
        })
        break;
      case 7:
        this.setData({
          index: 7
        })
        break;
      default:
      console.log("其他")
        

    }
  },
  close: function () {
    this.setData({
      acc_state: false
    })
  },
  close_pop: function () {
    this.setData({
      acc_state: false
    })
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
})
