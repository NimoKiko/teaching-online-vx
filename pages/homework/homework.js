// pages/homework/homework.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    node:"",
    nodeId:null,
    lessonId:null,
    deadline:"2022-01-21",
    score:100
  },
  gotoDetail:function(){
    wx.navigateTo({
      url: '/pages/homeworkDetail/homeworkDetail?nodeId='+this.data.nodeId+'&lessonId='+this.data.lessonId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nodeId = options.nodeId;
    let node = options.node;
    let lessonId = options.lessonId;
    let stdnum = app.globalData.userId;
    let r = new request("/task/getTaskSituation",{
      stdnum: stdnum,
      nodeId: nodeId,
    });
    r.get().then( res => {
      console.log(res.data);
      this.setData({
        score: res.data
      })
    })
    this.setData({
      node: node,
      nodeId: nodeId,
      lessonId: lessonId,
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