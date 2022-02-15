const router = require('express').Router()
const mysql = require('mysql');
const conexion = require('../../database/db');

const index = async (req, res) => {
    try {
        var sql = `SELECT * FROM bets`
        conexion.query(sql, function (error, results) {
            if (error) {
                console.log('Error con la base de datos')
            } else {
                console.log('Todo perfecto');
                res.render('pages/bets/index')
            }
        })

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    index: index
}