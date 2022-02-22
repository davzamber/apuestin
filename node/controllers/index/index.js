const router = require('express').Router()
const res = require('express/lib/response')
const mysql = require('mysql')
const conexion = require('../../database/db')
const session = require('express-session')

const index = async (req, res) => {


    try {
        
            if (req.session.loggedIn) {
                res.render('pages/index/index', {
                    login: true,
                    name: req.session.username
                })
                console.log(req.session.username)
            } else {
                res.render('pages/index/index', {
                    login: false,
                    name: 'Iniciar sesión'
                })
                console.log('this')

            }
        

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    index: index
}