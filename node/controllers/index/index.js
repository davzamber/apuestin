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
                    name: req.session.user
                })
                console.log(req.session.loggedIn)
            } else {
                res.render('pages/index/index', {
                    login: false,
                    name: 'Iniciar sesión'
                })
                console.log(req.session.loggedIn)

            }
        

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    index: index
}