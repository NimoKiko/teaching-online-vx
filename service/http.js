import API_HOST from "../service/utils";
import T_API_HOST from "../service/config";
class Request {
  constructor(url, params, type = "normal") {
    if (type == "normal") {
      this.url = API_HOST + url;
    } else {
      this.url = T_API_HOST + url;
    }
    this.url = API_HOST + url;
    this.params = params;
  }
  get() {
    return this.request("GET", this.url, this.params);
  }
  put() {}
  post() {
    return this.request("POST", this.url, this.params);
  }
  delete() {
    return this.request("DELETE", this.url, this.params);
  }
  request(method, url, data) {
    return new Promise((resolve, reject) => {
      if (!url.includes("updateLocation")) {
        wx.showLoading({
          title: "加载中",
        });
      }
      wx.request({
        url,
        data,
        method,
         header: {
          Authorization: wx.getStorageSync('token'),
        //   Authorization: 'cc127280-48df-11eb-8e30-e34d92b3a07e'
         },
        success: (res) => {
          if (!url.includes("updateLocation")) {
            wx.hideLoading();
          }
          let statusCode = res.statusCode;
          if (statusCode == 401) {
            wx.showToast({
              title: '登录过期,即将为您跳转',
              icon: 'none'
            })
            setTimeout(() => {
              wx.switchTab({
                url: "/pages/login/login",
              });
              resolve({
                data: {
                  data: {
                    totalCount: 0,
                  },
                },
              });
            }, 2000);

          } else {
            resolve(res);
          }
        },
        fail: (err) => {
          console.log(err)
          if (!url.includes("updateLocation")) {
            wx.hideLoading();
          }
          wx.showModal({
            title: "网络错误",
            content: "网络出错，请刷新重试",
            showCancel: false,
          });
          reject({
            msg: "请求失败",
          });
        },
      });
    });
  }
}

export default Request;