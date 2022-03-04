// pages/lesson/lesson.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessonId:null,
    role:"",
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
    ],
    isEnd: 0,

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
  gotoSendMessage(){
    wx.navigateTo({
      url: '/pages/sendNotice/sendNotice?lessonId='+this.data.lessonId,
    })
  },
  openFile(item){
    // console.log(item);
    let fileInfo = item.currentTarget.dataset.item;
    console.log(fileInfo);
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: fileInfo.fileUrl,
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let lessonId = options.lessonId * 1;
    this.setData({
      lessonId: lessonId
    })
    //获取课程资料
    let q = new request("/file/getFileByLessonId",{
      lessonId: lessonId
    })
    q.get().then(res => {
      this.setData({
        file: res.data
      })
    })
    //获取这门课是否已经结课（0为未结课；1为已结课）
    let p = new request("/lesson/isEnd",{lessonId: lessonId});
    p.get().then( res => {
      console.log(res.data);
      this.setData({
        isEnd: res.data
      })
    })
    //湖片区章节树
    let r = new request("/tree/getTree",{lessonId: lessonId});
    r.get().then(res =>{
      if(res.statusCode == 200){
        // console.log(res.data);
        this.setData({
          section:res.data
        })
      }
    })
  },
  endClass() {
    let that = this;
    if(this.data.isEnd == 0){
      wx.showModal({
      title: '结课提示',
      content: '请确认是否结课？',
      success (res) {
        if (res.confirm) {
          let r = new request("/tea/endClass",{
            lessonId: that.data.lessonId
          });
          r.get().then(res => {
            console.log(res.data);
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    }
    if(this.data.isEnd == 1){
      wx.showToast({
        title: '课程已结束',
        icon:'error'
      })
    }
    
  },

  gotoNode: function(val){
    let nodeId = val.currentTarget.dataset.item.nodeId;
    let node = val.currentTarget.dataset.item.node;
    wx.navigateTo({
      url: '../section/section?nodeId='+nodeId+'&node='+node+'&lessonId='+this.data.lessonId,
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
    let role = app.globalData.role;
    this.setData({
      role: role
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