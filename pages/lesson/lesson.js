// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontColor1: "#2D88CE",
    fontColor2: "#464646",
    fontColor3: "#464646",
    pageNum: 1,

  },

  changePage1: function () {
    let that = this;
    const page1 = wx.createSelectorQuery()
    page1.select("#page1").boundingClientRect()
    page1.exec(res => {
      that.setData({
        fontColor1: "#2D88CE",
        fontColor2: "#464646",
        fontColor3: "#464646",
        pageNum: 1,
      })
    })
  },
  changePage2: function () {
    let that = this;
    const page1 = wx.createSelectorQuery()
    page1.select("#page1").boundingClientRect()
    page1.exec(res => {
      that.setData({
        fontColor2: "#2D88CE",
        fontColor1: "#464646",
        fontColor3: "#464646",
        pageNum: 2
      })
    })
  },
  changePage3: function () {
    let that = this;
    const page1 = wx.createSelectorQuery()
    page1.select("#page1").boundingClientRect()
    page1.exec(res => {
      that.setData({
        fontColor3: "#2D88CE",
        fontColor2: "#464646",
        fontColor1: "#464646",
        pageNum: 3 
      })
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