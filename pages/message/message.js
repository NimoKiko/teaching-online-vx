// pages/message/message.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: "",
    message: [{
        id: 1,
        type: "MESSAGE",
        title: "编译原理"
      },
      {
        id: 2,
        type: 2,
        title: "作业通知"
      },
      {
        id: 3,
        type: "MESSAGE",
        title: "需求工程"
      },
    ]
  },

  gotoMessage: function (e) {
    console.log(e);
    let id = e.currentTarget.dataset.item.id;
    let type = e.currentTarget.dataset.item.type;
    // console.log(type);
    // console.log(id);
    wx.navigateTo({
      url: '/pages/messageDetail/messageDetail?type=' + type + '&id='+id,
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
    let that = this;
    this.setData({
      userId: app.globalData.userId
    })
    if (app.globalData.role == "TEACHER") {
    // if (true) {
      let r = new request("/msg/queryMessageByWorknum", {
        worknum: this.data.userId
        // worknum: "2018001002"
      });
      console.log(r);
      r.get().then(res => {
        console.log(res.data);
        if(res.data.length>0){
          that.setData({
            message: res.data
          })
        } else {
          that.setData({
            message: []
          })
        }
      })
    }
    if (app.globalData.role == "STUDENT") {
      // if (true) {
        let r = new request("/msg/queryMessageByStdnum", {
          stdnum: this.data.userId
          // stdnum: "20190123"
        });
        console.log(r);
        r.get().then(res => {
          console.log(res.data);
          if(res.data.length>0){
            that.setData({
              message: res.data
            })
          }
          
        })
      }

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