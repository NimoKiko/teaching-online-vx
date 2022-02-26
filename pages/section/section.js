// pages/section/section.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    file:[
      {
        id:1,
        fileName:"2022春季学期教学安排",
        fileType:1
      },
      {
        id:2,
        fileName:"编译原理电子书",
        fileType:2
      },
      {
        id:3,
        fileName:"期末考试说明",
        fileType:1
      },
      {
        id:4,
        fileName:"第一章 编译原理-教案",
        fileType:2
      },
    ]
  },

  gotoHomeworkIndex: function(){
    wx.navigateTo({
      url: '/pages/homeworkIndex/homeworkIndex',
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