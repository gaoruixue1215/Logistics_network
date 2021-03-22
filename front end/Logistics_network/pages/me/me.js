// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{
      nickName : "",
      avatarUrl : "",
      gender : "",
      province : "",
      city : "",
      country : ""
    },
    menuitems: [
      { text: '个人资料', url: '#', icon: '/images/user/user1.png', tips: '', arrows: '/images/user/arrows.png' },
      { text: '邀请好友', url: '#', icon: '/images/user/user2.png', tips: '', arrows: '/images/user/arrows.png' },
      { text: '积分兑换', url: '#', icon: '/images/user/user3.png', tips: '', arrows: '/images/user/arrows.png' },
      { text: '帮助说明', url: '#', icon: '/images/user/user4.png', tips: '', arrows: '/images/user/arrows.png' }
    ]
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

  },

  // 登录
  toLogin: function(){

    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code);
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        
        var userInfo = res.userInfo
        console.log(userInfo);
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender  //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        if(gender==1){
          gender = '男'
        }else if(gender==2){
          gender='女'
        }else{
          gender = '未知'
        }
        that.setData({
          userinfo:{
            nickName : nickName,
            avatarUrl : avatarUrl,
            gender : gender,
            country : country,
            province : province
          }
        })
      }
    })
  }
})