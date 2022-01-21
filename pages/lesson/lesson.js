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
    section:[
      {
        id:1,
        title:"编译系统概论",
        children:[
          {
            id:1,
            subTitle:"1.1编译系统简介"
          },
          {
            id:2,
            subTitle:"1.2章节测验"
          }
        ]
      },
      {
        id:2,
        title:"词法分析",
        children:[
          {
            id:1,
            subTitle:"词法分析器的设计考虑及手工构造"
          },
          {
            id:2,
            subTitle:"正规式、自动机及词法分析器的自动生成"
          },
          {
            id:3,
            subTitle:"词法分析器的自动生成"
          },
          {
            id:4,
            subTitle:"章节测验"
          }
        ]
      }
    ],
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