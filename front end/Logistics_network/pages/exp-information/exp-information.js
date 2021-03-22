// pages/exp-information/exp-information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    scale: 12,
    latitude: "",
    longitude: "",
    markers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = JSON.parse(options.params);
    console.log('页面获取的物流网点信息',JSON.parse(options.params));
    this.setData({
      latitude: info.lat,
      longitude: info.lon,
      markers: [{
        id: "1",
        latitude: info.lat,
        longitude: info.lon,
        width: 20,
        height: 20,
        iconPath: "../images/marker.png"
      }]
    })
    // var that = this;
    // wx.getLocation({
    //   success: function (res) {
    //     that.setData({
    //       latitude: res.latitude,
    //       longitude: res.longitude,
    //       markers: [{
    //         id: "1",
    //         latitude: res.latitude,
    //         longitude: res.longitude,
    //         width: 20,
    //         height: 20,
    //         // iconPath: "/resources/img/ic_marker.png"
    //       }],
    //     })
    //   },
    // })
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