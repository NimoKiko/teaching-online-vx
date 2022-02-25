// pages/sendNotice/sendNotice.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageParams: {
      worknum: "",
      title: "",
      content: "",
      type: "MESSAGE",
      lessonId: ""
    }
  },
  //输入标题
  inputTitle(e) {
    let title = "messageParams.title";
    this.setData({
      [title]: e.detail.value
    })
  },
  //输入通知内容
  inputMessage(e) {
    console.log(e);
    let content = "messageParams.content";
    this.setData({
      [content]: e.detail.value
    })
  },
  //发送消息
  sendMessage() {
    console.log(this.data.messageParams);
    let r = new request("/msg/saveMessage", this.data.messageParams);
    console.log(r);
    r.post().then(res => {
      if (res.data) {
        wx.reLaunch({
          url: '../home/home',
        })
      } else {
        wx.showToast({
          title: '发送失败',
          icon:'error'
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let lessonId = options.lessonId * 1;
    let text = "messageParams.lessonId"
    this.setData({
      [text]: lessonId
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
    let userId = app.globalData.userId;
    let worknum = "messageParams.worknum";
    this.setData({
      [worknum]: userId
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