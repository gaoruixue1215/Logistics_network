var express = require('express');
var router = express.Router();
var mysql=require("mysql");// 链接mySQL数据库,通过第三方数据块
var dbconfig=require("../config/dbconfig.json");// 引入数据库配置连接的基本信息对象
var optfile = require('./fs_read');
const fs = require('fs');
var con = mysql.createConnection(dbconfig);// 创建连接
    con.connect();//链接

//获取图片
router.get('/images/:photo', function(req, res) {
  var photo = req.params.photo;
  optfile.readImg('../我的/images/'+photo, res);
})

//添加用户
router.post("/openid", async (req, res) => {
  const Ut = require("../common/utils");
  try {
    console.log(req.body);
    let appId = "wx70xxxxxxbed01b";//
    let secret = "5ec6exxxxxx49bf161a79dd4";
    let { js_code } = req.body;
    let opts = {
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
    }
    let r1 = await Ut.promiseReq(opts);
    r1 = JSON.parse(r1);
    console.log(r1);
    res.json(r1);
  }
  catch (e) {
    console.log(e);
    res.json('');
  }
})

module.exports = router;
