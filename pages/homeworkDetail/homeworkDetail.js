// pages/homeworkDetail/homeworkDetail.js
import request from "../../service/http"
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    choiceList:[],
    homework:[
      {
        id:1,
        text:"在操作系统中，JCB是指（ ）。",
        a:"作业控制块",
        achecked:false,
        b:"进程控制块",
        bchecked:false,
        c:" 文件控制块",
        cchkecked:false,
        d:"程序控制块",
        dchecked:false,
        right:"a",
        end:false
      },
      {
        id:2,
        text:"操作系统是一种()。",
        a:"应用软件",
        achecked:false,
        b:"系统软件",
        bchecked:false,
        c:"通用软件",
        cchkecked:false,
        d:"工具软件",
        dchecked:false,
        right:"b",
        end:false
      },      {
        id:3,
        text:"下列作业调度算法中，最短的平均周转时间是()。",
        a:"先来先服务",
        achecked:false,
        b:"短作业优先法",
        bchecked:false,
        c:"优先数法",
        cchkecked:false,
        d:"时间片轮转法",
        dchecked:false,
        right:"b",
        end:false
      },      {
        id:4,
        text:"实施虚拟存期管理的依据是程序的()。",
        a:"局部性原理",
        achecked:false,
        b:"动态性原理",
        bchecked:false,
        c:"并发性原理",
        d:"一致性原理",
        dchecked:false,
        right:"a",
        end:true
      },
    ],
    rightCount: 0,
    stdnum:"",
    nodeId:0,
  },

  preClick:function(){
    if(this.data.num>0){
      let num = this.data.num - 1;
      this.setData({
        num: num,
      })
    }
  },
  nextClick:function(){
    let num = this.data.num + 1;
    this.setData({
      num:num
    })
  },
  taskSubmit(){
    console.log(this.data.choiceList);
    let correctCount = 0;
    for(let index in this.data.homework){
      if(this.data.homework[index].correct == this.data.choiceList[index]){
        correctCount++;
      }
    }
    console.log(correctCount);
    let r = new request("/stdLesson/judgeScore",{
      correctCount: correctCount,
      stdnum: this.data.stdnum,
      nodeId: this.data.nodeId
    })
    console.log(r);
    r.get().then(res => {
      console.log(res.data);
      if(res.data){
        wx.switchTab({
          url: '../home/home',
        })
      }
    })
  },
  aClick:function(){
    let achecked = "homework["+this.data.num+"].achecked";
    let bchecked = "homework["+this.data.num+"].bchecked";
    let cchecked = "homework["+this.data.num+"].cchecked";
    let dchecked = "homework["+this.data.num+"].dchecked";
    this.data.choiceList[this.data.num] = 'a';
    this.setData({
      [achecked]:true,
      [bchecked]:false,
      [cchecked]:false,
      [dchecked]:false,
    })
  },
  bClick:function(){
    let achecked = "homework["+this.data.num+"].achecked";
    let bchecked = "homework["+this.data.num+"].bchecked";
    let cchecked = "homework["+this.data.num+"].cchecked";
    let dchecked = "homework["+this.data.num+"].dchecked";
    this.data.choiceList[this.data.num] = 'b';
    this.setData({
      [achecked]:false,
      [bchecked]:true,
      [cchecked]:false,
      [dchecked]:false,
    })
  },
  cClick:function(){
    let achecked = "homework["+this.data.num+"].achecked";
    let bchecked = "homework["+this.data.num+"].bchecked";
    let cchecked = "homework["+this.data.num+"].cchecked";
    let dchecked = "homework["+this.data.num+"].dchecked";
    this.data.choiceList[this.data.num] = 'c';
    this.setData({
      [achecked]:false,
      [bchecked]:false,
      [cchecked]:true,
      [dchecked]:false,
    })
  },
  dClick:function(){
    let achecked = "homework["+this.data.num+"].achecked";
    let bchecked = "homework["+this.data.num+"].bchecked";
    let cchecked = "homework["+this.data.num+"].cchecked";
    let dchecked = "homework["+this.data.num+"].dchecked";
    this.data.choiceList[this.data.num] = 'd';
    this.setData({
      [achecked]:false,
      [bchecked]:false,
      [cchecked]:false,
      [dchecked]:true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let stdnum = app.globalData.userId;
    let nodeId = options.nodeId * 1;
    let lessonId = options.lessonId * 1;
    this.setData({
      stdnum: stdnum,
      nodeId: nodeId,
      lessonId: lessonId
    })
    let r = new request("/task/getTask",{nodeId:nodeId});
    r.get().then(res => {
      // console.log(res.data);
      let taskList = res.data;
      let length = taskList.length;
      let list = [];
      for(let index in taskList){
        // console.log(index);
        taskList[index].taskId = index*1 + 1;
        if(index*1+1 == length) {
          taskList[index].end = true;
        }
        list.push("");
      }
      console.log(taskList);
      this.setData({
        homework: taskList,
        choiceList:list,
      })
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