// pages/reigister/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    charactor: ["学生", "教师", "辅导员"],
    dept: ["教务处", "计算机与信息工程学院", "经管学院"],
    charactorIndex: 0,
    deptIndex: null,
  },
  // 角色选择器
  charactorPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      charactorIndex: e.detail.value
    })
  },
  // 院系选择器
  deptPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      deptIndex: e.detail.value
    })
  },

  gotoLogin: function () {
    wx.navigateTo({
      url: '../login/login',
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