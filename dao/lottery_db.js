const mysql = require('mysql2');

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lottery_db",
})

module.exports.getTimes = () => {
    const query = `SELECT * FROM time_tbl`
    return con.promise().query(query);
}

module.exports.getAlphabet = () => {
    const query = `SELECT * FROM alphabet_tbl`
    return con.promise().query(query);
}

module.exports.getLottery =()=>{
    const query =`SELECT * FROM lottery_numbers_tbl`
    return con.promise().query(query);
}
