// pages/invite/invite.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stdnum: "",
    inviteCode: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      stdnum: app.globalData.userId,
    })

  },
  //输入邀请码
  inputCode: function (res) {
    console.log(res);
    this.setData({
      inviteCode: res.detail.value
    })
  },
  sendInvite: function () {
    let params = {
      stdnum: this.data.stdnum,
      inviteCode: this.data.inviteCode
    }
    let r = new request("/stdLesson/inviteStd", params);
    r.get().then(res => {
      console.log(res);
      if (res.data) {
        wx.switchTab({
          url: '../home/home',
        })
      }
    })
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