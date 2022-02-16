const router = require('express').Router()
const res = require('express/lib/response')
const mysql = require('mysql');
const conexion = require('../../database/db');

const index = async (req, res) => {
    try {
        var sql = `SELECT * FROM bets`
        conexion.query(sql, function (error, results) {
            if (error) {
                console.log('Error con la base de datos')
            } else {
                console.log('Todo perfecto1');
                res.render('pages/index/index')
            }
        })

    } catch (error) {
        console.log(error)
    }
}


const signup = async (req, res) => {
    try {
        req.headers['Content-Type'] = 'text/html'
		req.headers['charset'] = 'utf-8'
		req.charset = 'utf-8'
        
		let input_values = [
            req.body['signup_name'],
            req.body['signup_mail'],
			req.body['signup_pass']
		]
        const sql = `INSERT INTO user (nombre, email, contraseña) VALUES ('${input_values [0]}', '${input_values [1]}', '${input_values [2  ]}');`
        console.log(req.body)
        console.log(sql)
        conexion.query(sql, function (error, results) {
        if (error) {
                console.log('Error con la base de datos')
                console.log(req.body)
                console.log(sql)
                console.error(error)
            } else {
                console.log('Todo perfecto');
                res.render('pages/index/index')
            }
        })

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    index: index,
    signup : signup
}