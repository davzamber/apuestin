const express = require('express')
const app = express()
const path = require ('path')
const body_parser = require ('body-parser')
const router = require ('./routes/router')
const conexion = require('./database/db');


app.set('view engine', 'ejs')
app.set ('views', path.join(__dirname, '/views'))


app.use (body_parser.urlencoded ({ extended: true }))
// app.use (express.urlencoded ({ extended: true }))
app.use ('/public', express.static (path.join(__dirname, 'public')))
app.use(express.json())

app.use(router.router)

// app.post('/signup', async (req, res)=>{
//     const name = req.body.signup_name;
//     const pass = req.body.signup_pass;
//     conexion.query('INSERT INTO user ? SET', {name:name, pass:pass}, async(error, results)=>{
//         if(error){
//             console.log(error)
//         }else{
//             res.send('EXITO')
//         }
//     })

    
// })

app.listen(5000, ()=>{
    console.log('Server corriendo em puerto 5000')
})



module.exports = app