/**
 * Created by Administrator on 2016/4/22 0022.
 */
// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert:'INSERT INTO user(name,password, age) VALUES(?,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;