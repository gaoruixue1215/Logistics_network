// miniprogram/pages/exp-point-search/exp-point-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['', '', ''],
    customItem: '请选择',
    status:''
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

  // 获取查询地址
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let region = e.detail.value;
    for(let i in region){
      if(region[i] === '请选择'){
        region[i] = '';
      }
    }
    this.setData({
      region
    })
  },
   // 点击跳转到详情页
   toExpPointList: function(data){
    let region = this.data.region;
    if(data.currentTarget.dataset.status === 'ok'){
      wx.switchTab({
        url: '../list/list?province='+region[0]+'&city='+region[1]+'&area='+region[2]
      })
    }else{
      wx.navigateBack();
    }
  }
})