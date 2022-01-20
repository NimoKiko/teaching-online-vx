// pages/home/home.js
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
    ]

  },
  gotoLesson: function (){
    wx.navigateTo({
      url: '../lesson/lesson',
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