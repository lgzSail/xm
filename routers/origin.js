const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器对象
var router=express.Router();
	router.get('/origin',(req,res)=>{
		
		var sql='select bid,bname,jj,bimage from wz_origin'
		pool.query(sql,[],(err,result)=>{
			if(err) throw err
			res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
			res.write(JSON.stringify(result))
			res.end()
		})
	})
	router.get('/news',(req,res)=>{
		
		var sql='select cid,ctitle,cpic,cjj,ctime,cbq from wz_news'
		pool.query(sql,[],(err,result)=>{
			if(err) throw err
			res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
			res.write(JSON.stringify(result))
			res.end()
		})
	})
	router.get('/traver',(req,res)=>{
		var sql='select did,dtitle,dpic,djj,dtime,dbq from wz_traver'
		pool.query(sql,[],(err,result)=>{
			if(err) throw err
			res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
			res.write(JSON.stringify(result))
			res.end()
		})
	})	
module.exports=router;