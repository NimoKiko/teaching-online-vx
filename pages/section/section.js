// pages/section/section.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodeId:null,
    node:"",
    lessonId:null,
    role:"",
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

  gotoHomeworkIndex: function(){
    wx.navigateTo({
      url: '/pages/homework/homework?nodeId='+this.data.nodeId+'&node='+this.data.node+'&lessonId='+this.data.lessonId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let nodeId = options.nodeId * 1;
    let node = options.node;
    let lessonId = options.lessonId * 1;
    let role = app.globalData.role;
    let r = new request("/file/getFileByNodeId",{
      nodeId: nodeId
    })
    r.get().then( res => {
      console.log(res.data);
      this.setData({
        file: res.data
      })
    })
    this.setData({
      nodeId: nodeId,
      node: node,
      lessonId: lessonId,
      role: role,
    })
    wx.setNavigationBarTitle({
      title: node,
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