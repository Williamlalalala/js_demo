const express = require('express');
var server = express();
server.listen(8080);
//nodejs引入mysql的模块
const mysql = require('mysql');
//形成一个本地的连接池
const db = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database: '20180207' }); //连接数据库
if (db) {
    console.log("连接数据库成功");
} else {
    console.log("连接数据库失败");
}
//从triangle这个数据库中选出所有的数据
const testUser = `SELECT * FROM triangle ;`;
console.log(testUser);
db.query(testUser, function(err, data) {
    if (err) {
        res.status(500).send('connection failed');
    } else {
        console.log(data);
        for (let i = 0; i < 14; i++) {
            //判断是否是正确的数据类型
            if ((typeof data[i].edge1) != "number" && (typeof data[i].edge2) != "number" && (typeof data[i].edge3) != "number") {
                data[i].type = "无效";
                continue;
            }
            let one = data[i].edge1 + data[i].edge2;
            let two = data[i].edge1 + data[i].edge3;
            let three = data[i].edge2 + data[i].edge3;
            //console.log("one" + one + "two" + two + "three" + three + '\n');
            //判断第一条边是否和第二条边相等
            if (data[i].edge1 === data[i].edge2) {
                //判断是否是等边三角形
                if (data[i].edge1 === data[i].edge3) {
                    //console.log("等边三角形");
                    data[i].type = "等边三角形";
                } else {
                    data[i].type = "等腰三角形";
                }
            }
            //剩余两种等腰三角形的情况
            else if (data[i].edge1 === data[i].edge3 || data[i].edge2 === data[i].edge3) {
                data[i].type = "等腰三角形";
            }
            //最后剩下的我们暂定为普通的三角形
            else {
                data[i].type = "普通三角形";
            }
            //三条边最长边如果比剩余两条边长就不能进行
            if (data[i].edge1 > data[i].edge2 && data[i].edge1 > data[i].edge3) {
                if (three <= data[i].edge1) {
                    data[i].type = "不是三角形";
                }
            } else if (data[i].edge2 > data[i].edge1 && data[i].edge2 > data[i].edge3) {
                if (two <= data[i].edge2) {
                    data[i].type = "不是三角形";
                }
            } else if (data[i].edge3 > data[i].edge1 && data[i].edge3 > data[i].edge2) {
                if (one <= data[i].edge3) {
                    data[i].type = "不是三角形";
                }
            }
        }
        console.log("这里是之后的数据");
        console.log(data);
    }
});
const test = function(data) {
    console.log("jinru " + data.lenth);

    return data;
};