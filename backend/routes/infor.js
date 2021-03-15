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

//获取指定用户信息
router.get('/users/:userId', function(req, res) {
    var userId = req.params.userId;
    console.log(userId);
    con.query(`select * 
              from users 
              where userId = ${userId};`, (err, result) => {
      if(err){
        console.log(err);
      }else{
        console.log(result);
        res.send(result);
      }
    })
})


//修改指定用户的信息

//添加用户信息
router.post('/addUser', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var user = JSON.parse(obj);
        con.query('insert into users values(?,?,?,?,?,?)',[user.userId,user.wechatId,user.wechatName,user.wechatPic,user.phoneNum,user.time],(err, result) => {
            if(err){
              console.log(err);
            }else{
              result=[user.userId,user.wechatId,user.wechatName,user.wechatPic,user.phoneNum,user.time];
              console.log(result);
            }
        })     
    })
    res.end();  
});

//修改用户头像 
router.post('/changePic', function(req, res) {
    var obj="";
    var di='';
  
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var user = JSON.parse(obj);
        var path = '../我的/images/'+ user.userId+'.jpg';
        di = di+path.slice(3);
        var base64 = user.pic.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
        var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
        fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
            if(err){
                console.log(err);
            }else{
                console.log('写入成功！');
            }
        })    
        con.query('update users set wechatPic=? where userId=?',[di,user.userId],(err, result) => {
            if(err){
              console.log(err);
            }else{
              result=[di,user.userId];
              console.log(result);
              // res.send(result);
            }
        });
    })
    res.end(); 
})

//添加地址(收件/寄件)
router.post('/addAddress', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var ads = JSON.parse(obj);
        con.query('insert into address values(?,?,?,?,?,?)',[ads.adId,ads.userId,ads.adUser,ads.adNum,ads.adCont,ads.adType],(err, result) => {
            if(err){
              console.log(err);
            }else{
              result=[ads.adId,ads.userId,ads.adUser,ads.adNum,ads.adCont,ads.adType];
              console.log(result);
            }
        })     
    })
    res.end();  
});

//删除地址
router.post('/delAddress', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var ads = JSON.parse(obj);
        console.log(ads);
        
        con.query('delete from address where adId = ?', [ads.adId], function(err, result){
          if(err) {
            console.error(err.message);
            process.exit(1);
          }
          console.log(result);
          // res.send(result);
        });
    })
    res.end();
})

//添加历史记录(根据地址查询网点)
router.post('/searchWD', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var w = JSON.parse(obj);
        con.query('insert into search1 values(?,?,?,?)',[w.wId,w.userId,w.location,w.wtime],(err, result) => {
            if(err){
              console.log(err);
            }else{
              result=[w.wId,w.userId,w.location,w.wtime];
              console.log(result);
            }
        })     
    })
    res.end();  
});

//添加历史记录(快递单号查询物流轨迹)
router.post('/searchDan', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var d = JSON.parse(obj);
        con.query('insert into search2 values(?,?,?)',[d.dId,d.userId,d.dtime],(err, result) => {
            if(err){
              console.log(err);
            }else{
              result=[d.dId,d.userId,d.dtime];
              console.log(result);
            }
        })     
    })
    res.end();  
});

//删除历史记录(网点)
router.post('/delWD', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var w = JSON.parse(obj);
        console.log(w);
        
        con.query('delete from search1 where wId = ?', [w.wId], function(err, result){
          if(err) {
            console.error(err.message);
            process.exit(1);
          }
          console.log(result);
          // res.send(result);
        });
    })
    res.end();
})

//删除历史记录(快递单号)
router.post('/delDan', function(req, res) {
    var obj="";
    req.on('data',function(data){
        obj+=data;
    })
    req.on('end',function(){
        var d = JSON.parse(obj);
        console.log(w);
        
        con.query('delete from search2 where dId = ?', [d.dId], function(err, result){
          if(err) {
            console.error(err.message);
            process.exit(1);
          }
          console.log(result);
          // res.send(result);
        });
    })
    res.end();
})



module.exports = router;
