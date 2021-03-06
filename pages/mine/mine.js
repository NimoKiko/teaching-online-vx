// pages/mine/mine.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: "TEACHER",
  },

  gotoHome: function () {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },

  gotoInvite: function () {
    wx.navigateTo({
      url: '/pages/invite/invite',
    })
  },
  gotoLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  gotoPersonal: function () {
    wx.navigateTo({
      url: '/pages/personal/personal',
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
    let role = app.globalData.role
    this.setData({
      role: role
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