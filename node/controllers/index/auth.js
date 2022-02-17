const router = require('express').Router()
const res = require('express/lib/response')
const mysql = require('mysql')
const conexion = require('../../database/db')
const session = require('express-session')
const bcryptjs = require('bcryptjs')


const signup = async (req, res) => {
    try {
        req.headers['Content-Type'] = 'text/html'
        req.headers['charset'] = 'utf-8'
        req.charset = 'utf-8'

        let input_values = [
            req.body['signup_name'],
            req.body['signup_pass'],
            req.body['signup_mail']
        ]
        const sql = `INSERT INTO users (user, password, mail) VALUES ('${input_values [0]}', '${input_values [1]}', '${input_values [2]}');`
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
                req.session.loggedIn = true;
                res.redirect('/')
            }
        })

    } catch (error) {
        console.log(error)
    }
}
const login = async (req, res) => {
    try {
        let user = req.body.login_name
        let pass = req.body.login_pass
        let passwordHash = await bcryptjs.hash(pass, 8)

        
            const sql = `SELECT user, password FROM users WHERE user = '${user}' AND password = '${pass}';`;
            console.log(sql)
            conexion.query(sql, async function (error, results) {
                if (results.length > 0) {
                    req.session.loggedIn = true;
                    req.session.username = user;
                    res.redirect('/')
                    console.log(req.session)
                } else {
                    res.send('Usuario o contraseña incorrecta')
                }
            })
        
    } catch (error) {
        console.log('Error de conexión con la base de datos')
    }
}

const logout = async (req, res) => {
    try {
        req.session.destroy(() => {
            res.redirect('/')
        })
        
    } catch (error) {
        console.log('Error al cerrar sesión')
    }
}


module.exports = {

    signup: signup,
    login: login,
    logout: logout
}