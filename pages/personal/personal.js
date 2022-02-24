// pages/personal/personal.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: "",
    updateParams: {
      userId: "",
      sex: ""
    }
  },

  change(e) {
    // console.log(e.detail.value);
    let sex = "updateParams.sex";
    this.setData({
      [sex]: e.detail.value
    })
  },

  save: function () {
    let role = app.globalData.role;
    let params = {};
    if (role == "STUDENT") {
      params = {
        stdnum: this.data.userId,
        sex: this.data.updateParams.sex
      }
      let r = new request("/std/updateSex", params);
      r.get().then(res => {
        if (res.data) {
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        } else {
          wx.showToast({
            title: '修改失败',
          })
        }
      })
    }
    if (role == "TEACHER") {
      params = {
        worknum: this.data.userId,
        sex: this.data.updateParams.sex
      }
      let r = new request("/tea/updateSex", params);
      r.get().then(res => {
        if (res.data) {
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        } else {
          wx.showToast({
            title: '修改失败',
          })
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = app.globalData.userId;
    this.setData({
      userId: userId
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