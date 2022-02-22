// pages/home/home.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lesson: [{
        id: 1,
        lessonName: "企业及数据库实习",
        teacherName: "张山"
      },
      {
        id: 2,
        lessonName: "需求工程",
        teacherName: "李世",
      },
      {
        id: 3,
        lessonName: "编译原理",
        teacherName: "王那",
      }
    ],
    role: "",
    worknum: "",

  },
  gotoLesson: function (res) {
    console.log(res.currentTarget.dataset.item.lessonId);
    let lessonId = res.currentTarget.dataset.item.lessonId;
    wx.navigateTo({
      url: '../lesson/lesson?lessonId=' + lessonId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = app.globalData.userId;
    let role = app.globalData.role;
    this.setData({
      role: role,
      worknum: userId,
    })
    if (role == "TEACHER") {
      let r = new request("/teaLesson/getList", {
        worknum: userId
      });
      r.get().then(res => {
        console.log(res.data);
        this.setData({
          lesson: res.data
        })
      })
    }
    if(role == "STUDENT"){
      let r = new request("/stdLesson/getStudentByNum", {
        id: userId
      });
      r.get().then(res => {
        console.log(res.data);
        this.setData({
          lesson: res.data
        })
      })
    }

    console.log(userId);
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