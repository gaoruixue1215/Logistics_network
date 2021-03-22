// pages/list/list.js
const wechat = require('../../utils/wechat.js');
const common = require('../../utils/common.js');
const tmp_data = {"showapi_res_error":"","showapi_res_id":"605704088d57baec19dbfdae","showapi_res_code":0,"showapi_res_body":{"ret_code":0,"flag":true,"showapi_fee_code":0,"siteList":[{"person":"","lon":"","code":1795819,"serviceTel":"","type":"外部合作点","serviceContent":"寄、取件服务","expType":"huitong","city":"沧州市","area":"吴桥县","address":"福临门超市驿站","serviceTime":"周一到周日，08：00—20：00","name":"福临门超市","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"13931790229","code":1553741,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"于集小学西50米","serviceTime":"周一到周日，08：00—20：00","name":"于集镇快递13931791809.于集小学西50米","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"18233728836","code":1827510,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"杨家寺乡后刘寺村","serviceTime":"周一到周日，08：00—20：00","name":"杨家寺圆通代办点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"15612707238","code":1828140,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"于集十字街北50米路西","serviceTime":"周一到周日，08：00—20：00","name":"于集圆通代办点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":116.404694,"person":"于浩","serviceTel":"18332342520,15533775280,0317-3742316、13012033190","code":"31780","type":"自营服务点","city":"沧州市","expType":"zhongtong","serviceContent":"寄、取件服务","area":"吴桥县","address":"钱塘江路43号","serviceTime":"8:00-18:00","name":"沧州吴桥","province":"河北省","expText":"中通速递","serviceArea":"长江路、黄河路、嘉陵江路、金沙江路、昆仑道、泰山道、华山道、太行道、桑园镇东街、西街、南街、北街、钱塘江路、吴桥县经济开发区。\n安陵镇、沟店铺乡、曹家洼乡、宋门乡、铁城镇、杨家寺乡。,N/A","lat":37.62857},{"lon":"116.44184798761423","person":"","serviceTel":"0317-3740241","code":"W22071414","type":"自营服务点","city":"沧州市","expType":"debang","serviceContent":"发货 提货 送货","area":"吴桥县","address":"沧州市吴桥县黄河路东首北侧 检察院西行20米","serviceTime":"","name":"沧州吴桥县黄河路营业部","province":"河北省","expText":"德邦快递","serviceArea":"","lat":"37.64041954249069"},{"lon":"","person":"","serviceTel":"13720977669","code":"W0000029162","type":"自营服务点","city":"沧州市","expType":"debang","serviceContent":"发货 ","area":"吴桥县","address":"河北省沧州市吴桥县何庄乡","serviceTime":"","name":"【H】沧州市吴桥县营业部","province":"河北省","expText":"德邦快递","serviceArea":"","lat":""},{"person":"刘青","lon":"","code":"WBSZWQB","serviceTel":"15233179080","type":"营业站","serviceContent":"寄、取件服务","expType":"zhaijisong","city":"沧州市","area":"吴桥县","address":"河北省沧州市吴桥县百度小区","serviceTime":"无","name":"河北_沧州分拨站_吴盐B点","province":"河北省","expText":"宅急送","serviceArea":"\r\n不派送范围：何庄乡、梁集镇","lat":""},{"person":"","lon":"","code":1893379,"serviceTel":"15716881253","type":"外部合作点","serviceContent":"寄、取件服务","expType":"huitong","city":"沧州市","area":"吴桥县","address":"铁城镇彭家寺开明超市（小学对面）","serviceTime":"周一到周日，08：00—20：00","name":"铁城快递站彭家寺分部","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"13127388806","code":1559742,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"福临门超市驿站（铁城十字街东200米）","serviceTime":"周一到周日，08：00—20：00","name":"铁城福临门超市","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"person":"","lon":"","code":1827504,"serviceTel":"13463753851","type":"外部合作点","serviceContent":"寄、取件服务","expType":"huitong","city":"沧州市","area":"吴桥县","address":"铁城南关面粉厂对面","serviceTime":"周一到周日，08：00—20：00","name":"铁城圆通代办点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"18713699131","code":1438746,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"沟店铺乡范屯村十字街路南顺发农资","serviceTime":"周一到周日，08：00—20：00","name":"沟店铺范屯圆通代办点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061800","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县曹洼","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县曹洼邮政代办所","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061803","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县梁集镇政府所在地","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县梁集邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061806","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县沟店铺乡","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县沟店铺邮政所","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061802","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县于集镇政府所在地","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县于集邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061801","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县铁城镇","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县铁城邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061804","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县杨家寺乡","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省沧州市吴桥县杨家寺邮政所","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061899","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县桑园镇泰山道5号","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县泰山道邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061805","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县安陵镇政府所在地","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县安陵邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"11185","code":"061804","type":"寄,取","city":"沧州市","expType":"ems","serviceContent":"可以办理金融业务","area":"吴桥县","address":"河北省沧州市吴桥县宋门乡政府所在地","serviceTime":"09:00-17:00","name":"中国邮政集团公司河北省吴桥县宋门邮政支局","province":"河北省","expText":"邮政包裹","serviceArea":"全境","lat":""},{"lon":"116.40437851199","person":"刘秀丽","serviceTel":"0317-7368728","code":"317012","type":"自营服务点","city":"沧州市","expType":"yuantong","serviceContent":"\r\n可做到付\r\n","area":"吴桥县","address":"河北省沧州市吴桥县太行道东侧新华书店北邻","serviceTime":"暂未开通夜间服务","name":"河北省沧州市吴桥县圆通","province":"河北省","expText":"圆通速递","serviceArea":"县城（桑园镇）","lat":"37.637162981024"},{"lon":"","person":"","serviceTel":"13463753851","code":1827504,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"南关广宇手机店圆通速递","serviceTime":"周一到周日，08：00—20：00","name":"铁城圆通代办点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"13231714505","code":1946323,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"双刘店村里","serviceTime":"周一到周日，08：00—20：00","name":"铁城镇双刘店建军超市","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":116.396202,"person":"","serviceTel":"13643279736","code":54105,"type":"自营服务点","city":"沧州市","expType":"jingdong","serviceContent":"京配配送服务","area":"吴桥县","address":"河北省沧州市吴桥县太行道西侧220号","serviceTime":"","name":"沧州吴桥营业部","province":"河北","expText":"京东物流","serviceArea":"全境","lat":37.61852681},{"person":"刘青","lon":"","code":"WBSZWQB","serviceTel":"15233179080","type":"营业站","serviceContent":"寄、取件服务","expType":"zhaijisong","city":"沧州市","area":"吴桥县","address":"河北省沧州市吴桥县百度小区","serviceTime":"无","name":"河北_沧州分拨站_吴盐B点","province":"河北省","expText":"宅急送","serviceArea":"\r\n不派送范围：何庄乡、梁集镇","lat":""},{"person":"","lon":116.417892,"code":"5943","serviceTel":"18932792188","type":"营业站","serviceContent":"收运自提派送","expType":"xinbang","city":"沧州","area":"吴桥县","address":"河北省沧州市吴桥县桑园镇黄河路与泰山道交叉口东行100米","serviceTime":"","name":"【SX】沧州吴桥桑园镇店","province":"河北","expText":"新邦物流","serviceArea":"全境","lat":37.643342},{"lon":"","person":"","serviceTel":"15832747891","code":1559765,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"何庄乡北牟老邮局","serviceTime":"周一到周日，08：00—20：00","name":"何庄代理点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"18812170777","code":1374508,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"杨家寺乡后寺快递代理点","serviceTime":"周一到周日，08：00—20：00","name":"杨家寺代理点","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""},{"lon":"","person":"","serviceTel":"15716881253","code":1893379,"type":"外部合作点","city":"沧州市","expType":"huitong","serviceContent":"寄、取件服务","area":"吴桥县","address":"铁城镇彭家寺开明超市（小学对面）次日来取","serviceTime":"周一到周日，08：00—20：00","name":"铁城快递站彭家寺分部","province":"河北省","expText":"百世汇通","serviceArea":"全境","lat":""}]}};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    item:{},
    region: ['', '', ''],
    customItem: '请选择',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getExpPointList();
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

  // 获取网点列表
  getExpPointList: function(){
    let url = 'https://applets.shuangxue.ltd:8080/search';
    let region = this.data.region;
    let params = {
      province:region[0],
      city:region[1],
      area:region[2],
      name:'',
      address:'',
      expType:''
    };
    wechat.request(url, params, 'GET', 'application/json').then(res => {

      let data = res.data.showapi_res_body.siteList
      this.setData({
        list: data
      });
    })
    // this.setData({
    //   list: tmp_data.showapi_res_body.siteList
    // });
  },
  // 查询
  toSearch: function(e){
    // e.preventDefault();
    // e.stopPropagation();
    this.getExpPointList();
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
  //获取当前位置的经纬度
//  getLocation: function(){
//   var that=this;
//   wx.getLocation({
//    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//    success: function (res) {
//     var latitude = res.latitude//维度
//     var longitude = res.longitude//经度
//     console.log(res);
//    }
//   })
//  },
 getUserLocation: function () {
  let vm = this;
  wx.getSetting({
    success: (res) => {
      console.log(JSON.stringify(res))
      // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
      // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
      // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
      if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
        wx.showModal({
          title: '请求授权当前位置',
          content: '需要获取您的地理位置，请确认授权',
          success: function (res) {
            if (res.cancel) {
              wx.showToast({
                title: '拒绝授权',
                icon: 'none',
                duration: 1000
              })
            } else if (res.confirm) {
              wx.openSetting({
                success: function (dataAu) {
                  if (dataAu.authSetting["scope.userLocation"] == true) {
                    wx.showToast({
                      title: '授权成功',
                      icon: 'success',
                      duration: 1000
                    })
                    //再次授权，调用wx.getLocation的API
                    vm.getLocation();
                  } else {
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                  }
                }
              })
            }
          }
        })
      } else if (res.authSetting['scope.userLocation'] == undefined) {
        //调用wx.getLocation的API
        vm.getLocation();
      }
      else {
        //调用wx.getLocation的API
        vm.getLocation();
      }
    }
  })
},
  getLocation: function() {
  const that = this
  wx.getLocation({
    type: 'wgs84',
    altitude: true,
    isHighAccuracy: true,
    highAccuracyExpireTime: 2000,
    success: function(res) {
      console.log(res)
      that.setData({
        latitude: res.latitude,
        longitude: res.longitude
      })
      // 构建请求地址
      // 逆解析接口 /ws/geocoder/v1
      var qqMapApi = 'https://apis.map.qq.com/ws/geocoder/v1/' + "?location=" + that.data.latitude + ',' +
        that.data.longitude + "&key=" + '6Y4BZ-PCS6J-LMVFT-KYZ55-RO323-Z2BSJ' + "&get_poi=1";
      that.sendRequest(qqMapApi);
    },
    fail: function() {
      wx.showToast({
        title: '获取位置信息失败',
        icon: 'none'
      })
    }
  })
},
sendRequest:function(qqMapApi) {
  const that = this
  wx.request({
    url: qqMapApi,
    header: {
      'Content-Type': 'application/json'
    },
    data: {},
    method:'GET',
    success: (res) => {
      console.log(res)
      if (res.statusCode == 200 && res.data.status == 0) {
        // 从返回值中提取需要的业务地理信息数据 国家、省、市、县区、街道
        console.log(res.data.result.address_component);
        let address = res.data.result.address_component;
        this.setData({
          region: [address.province,address.city,address.district]
        });
      }
    }
  })
},
  // 点击跳转到详情页
  toExpInfo: function(data){
    let params = JSON.stringify(common.changeParams(data.currentTarget.dataset.item));
    wx.navigateTo({
      url: '../exp-information/exp-information?params='+params
    })
  }
})