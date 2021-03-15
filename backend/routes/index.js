var express = require('express');
var router = express.Router();
var mysql=require("mysql");// 链接mySQL数据库,通过第三方数据块
var dbconfig=require("../config/dbconfig.json");// 引入数据库配置连接的基本信息对象
const ShowapiRequest = require('showapirequest_nodejs')

var con = mysql.createConnection(dbconfig);// 创建连接
    con.connect();//链接

//查找网点，并将查询记录传入数据库
//接口示例：http://152.136.100.249:3000/search/province=河北&city=沧州&area=吴桥&name=&address=&expType=
router.get('/search/:address', function(req, res) {
  var ad = req.params.address;

  var pro = ad.split('&')[0].split('=')[1];//获得省份
  var city = ad.split('&')[1].split('=')[1];//获得市区
  var area = ad.split('&')[2].split('=')[1];//获得县区
  var name = ad.split('&')[3].split('=')[1];//网点名称
  var address = ad.split('&')[4].split('=')[1];//网点地址
  var ext = ad.split('&')[5].split('=')[1];//类型

  var da;

  //创建请求对象
  let sdk = new ShowapiRequest(
    'https://route.showapi.com/1841-1',
    '543557',
    'ae2c3873ef9e49d6a015bdd635791647'
  )

  sdk
    .addTextPara("province",pro)
    .addTextPara("city",city)
    .addTextPara("area",area)
    .addTextPara("name",name)
    .addTextPara("address",address)
    .addTextPara("expType",ext)
    .post()//post方式发送请求，返回axios.post()的Promise
    .then((res) => {
      da = res.data;
      console.info("result:",da);
      //console.info(res.data.showapi_res_body.siteList);  
    })
    .catch((error) => {
      console.error(error)
    })
    .then(()=>res.send(da))

});

//步行/骑行路线规划
//接口示例：http://152.136.100.249:3000/rode/type=buxing&dLon=116.45925&dLat=39.910031&aLon=116.587922&aLat=40.081577
router.get('/rode/:position', function(req, res) {
  var pos = req.params.position;
  var type = pos.split('&')[0].split('=')[1];//获得方式 步行 or 骑行
  var dLon = pos.split('&')[1].split('=')[1];//获得出发地经度
  var dLat = pos.split('&')[2].split('=')[1];//获得出发地纬度
  var aLon = pos.split('&')[3].split('=')[1];//获得目的地经度
  var aLat = pos.split('&')[4].split('=')[1];//获得目的地纬度

  var da;

  //创建请求对象
  let sdk = new ShowapiRequest(
    (type =='buxing')?'https://route.showapi.com/1665-1':'https://route.showapi.com/1665-4',
    '543557',
    'ae2c3873ef9e49d6a015bdd635791647'
  )

  sdk
    .addTextPara("departLon",dLon)
    .addTextPara("departLat",dLat)
    .addTextPara("arrivalLon",aLon)
    .addTextPara("arrivalLat",aLat)
    .post()//post方式发送请求，返回axios.post()的Promise
    .then((res) => {
      da = res.data;
      console.info("result:",da);
    })
    .catch((error) => {
      console.error(error)
    })
    .then(()=>res.send(da))
});

//快递单号查询物流信息
//接口示例：http://152.136.100.249:3000/wuliu/快递单号
router.get('/wuliu/:wuliuId', function(req, res) {
  var wl = req.params.wuliuId;
  var da;

  //创建请求对象
  let sdk = new ShowapiRequest(
    'https://route.showapi.com/2435-1',
    '543557',
    'ae2c3873ef9e49d6a015bdd635791647'
  )

  sdk
    .addTextPara("nuo",wl)
    .post()//post方式发送请求，返回axios.post()的Promise
    .then((res) => {
      da = res.data;
      console.info("result:",da);
    })
    .catch((error) => {
      console.error(error)
    })
    .then(()=>res.send(da))
});

module.exports = router;
