var mysql  = require('mysql');  //调用MySQL模块
//创建一个connection
var connection = mysql.createConnection({
    host     : '127.0.0.1',       //主机
    user     : 'root',               //MySQL认证用户名
    password : 'root',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database: 'mynode',
});

var  userAddSql = 'INSERT INTO user(name,password,age) VALUES(?,?,?)';
var  userAddSql_Params = ['Wilson', 'abcd','1'];

//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

////执行SQL语句
//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) {
//        console.log('[query] - :'+err);
//        return;
//    }
//    console.log('The solution is: ', rows[0].solution);
//});
//
////增
//connection.query(userAddSql,userAddSql_Params,function (err, result) {
//    if(err){
//        console.log('[INSERT ERROR] - ',err.message);
//        return;
//    }
//    console.log('--------------------------INSERT----------------------------');
//    console.log('INSERT ID:',result);
//    console.log('-----------------------------------------------------------------');
//});

//var userModSql = 'UPDATE user SET name = ?,password = ? WHERE Id = ?';
//var userModSql_Params = ['zcg', '5678',1];
////改
//connection.query(userModSql,userModSql_Params,function (err, result) {
//    if(err){
//        console.log('[UPDATE ERROR] - ',err.message);
//        return;
//    }
//    console.log('--------------------------UPDATE----------------------------');
//    console.log('UPDATE affectedRows',result.affectedRows);
//    console.log('-----------------------------------------------------------------');
//});


//var  userDelSql = 'DELETE FROM user where id=2';
////删
//connection.query(userDelSql,function (err, result) {
//    if(err){
//        console.log('[DELETE ERROR] - ',err.message);
//        return;
//    }
//    console.log('--------------------------DELETE----------------------------');
//    console.log('DELETE affectedRows',result.affectedRows);
//    console.log('-----------------------------------------------------------------');
//});

var  userProc = 'call P_UserInfo(?,?,@ExtReturnVal);';
var userProc_Params = ['Wilson Z','abcd'];
//调用存储过程
connection.query(userProc,userProc_Params,function (err, retsult) {
    if(err){
        console.log('[EXEC PROC ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------PROC----------------------------');
    console.log(retsult);
    console.log(retsult[0][0].ExtReturnVal);
    console.log('-----------------------------------------------------------------');
});
//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});