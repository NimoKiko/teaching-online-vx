// pages/login/login.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginParams: {
      worknum: "",
      password: "",
    },
    check: false,
  },
  //输入账号
  accountInput: function (res) {
    // console.log(res.detail.value);
    let account = 'loginParams.worknum';
    this.setData({
      [account]: res.detail.value
    })
  },
  //输入密码
  psdInput: function (res) {
    // console.log(res.detail.value);
    let password = 'loginParams.password';
    this.setData({
      [password]: res.detail.value
    })
  },
  //确认协议
  checked: function (res) {
    this.setData({
      check: !this.data.check
    })
    console.log(this.data.check);
  },

  // 跳转到首页
  toHome: function () {
    let that = this;
    console.log(this.data.loginParams);
    let params = this.data.loginParams
    let r = new request("/tea/login", params);
    console.log(r);
    r.post().then(res => {
      console.log(res.data);
      if (res.data != "ERROR" && res.data != "ADMIN") {
        if (res.data == "TEACHER") {
          app.globalData.role = "TEACHER";
        }
        if (res.data == "STUDENT") {
          app.globalData.role = "STUDENT";
        }
        if (res.data == "ASSISTANT") {
          app.globalData.role = "ASSISTANT";
        }
        if (that.data.check) {
          app.globalData.userId = that.data.loginParams.worknum;
          wx.switchTab({
            url: '../home/home',
          })
        } else {
          wx.showToast({
            title: '请确认协议',
            icon: "error"
          })
        }
      } else {
        wx.showToast({
          title: '账号或密码错误',
          icon: "error"
        })
      }
    })

  },

  toRegister: function () {
    wx.navigateTo({
      url: '../reigister/register',
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