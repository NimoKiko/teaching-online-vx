// pages/reigister/register.js
import request from "../../service/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    charactor: ["学生", "教师", "辅导员"],
    dept: ["教务处", "计算机与信息工程学院", "经管学院"],
    charactorIndex: 0,
    deptIndex: null,
    addParams: {
      num: "",
      name: "",
      password: "",
      dept: ""
    },
    check: false,

  },
  //输入学号/工号
  inputAccount(e) {
    // console.log(e.detail.value);
    let num = 'addParams.num';
    this.setData({
      [num]: e.detail.value
    })
  },
  //输入名字
  inputName(e) {
    // console.log(e.detail.value);
    let name = 'addParams.name';
    this.setData({
      [name]: e.detail.value
    })
  },
  //输入密码
  inputPassword(e) {
    // console.log(e.detail.value);
    let password = 'addParams.password';
    this.setData({
      [password]: e.detail.value
    })
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
    let that = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      deptIndex: e.detail.value
    })
    if (e.detail.value == 0) {
      let dept = "addParams.dept";
      that.setData({
        [dept]: "教务处"
      })
    }
    if (e.detail.value == 1) {
      let dept = "addParams.dept";
      that.setData({
        [dept]: "计算机与信息工程学院"
      })
    }
    if (e.detail.value == 2) {
      let dept = "addParams.dept";
      that.setData({
        [dept]: "经管学院"
      })
    }
  },
  //确认协议
  checked: function (res) {
    this.setData({
      check: !this.data.check
    })
    console.log(this.data.check);
  },

  gotoLogin: function () {
    if (this.data.charactorIndex == 0) {
      // console.log(this.data.addParams);
      let params = {
        stdnum: this.data.addParams.num,
        stdname: this.data.addParams.name,
        dept: this.data.addParams.dept,
        password: this.data.addParams.password,
        type: "学生"
      }
      if (this.data.check == true) {
        let r = new request("/std/addOrUpdate", params);
        console.log(r);
        r.post(res => {
          console.log(res.data);
          if (res.data) {
            wx.showToast({
              title: '注册成功',
              icon: "success"
            })
            wx.navigateTo({
              url: '../login/login',
            })
          } else {
            wx.showToast({
              title: '注册失败',
              icon: "error"
            })
          }
        })
      } else {
        wx.showToast({
          title: '请勾选协议',
          icon: 'error'
        })
      }

    }
    if (this.data.charactorIndex == 1 || this.data.charactorIndex == 2) {
      let params = {}
      if (this.data.charactorIndex == 1) {
        params = {
          worknum: this.data.addParams.num,
          teaname: this.data.addParams.name,
          dept: this.data.addParams.dept,
          password: this.data.addParams.password,
          type: "教师"
        }
      }
      if (this.data.charactorIndex == 2) {
        params = {
          worknum: this.data.addParams.num,
          teaname: this.data.addParams.name,
          dept: this.data.addParams.dept,
          password: this.data.addParams.password,
          type: "辅导员"
        }
      }
      if (this.data.check == true) {
        let r = new request("/tea/addOrUpdate", params);
        console.log(r);
        r.post().then(res => {
          if (res.data) {
            wx.showToast({
              title: '注册成功',
              icon: "success"
            })
            wx.navigateTo({
              url: '../login/login',
            })
          } else {
            wx.showToast({
              title: '注册失败',
              icon: "error"
            })
          }
        })
      } else {
        wx.showToast({
          title: '请勾选协议',
          icon: 'error'
        })
      }



    }


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