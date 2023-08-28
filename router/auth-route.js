const express = require('express')
const authRoute = express.Router()
const jwt = require('jsonwebtoken')


const accessSecret = process.env.ACCESS_TOKEN_SECRET
const refreshSecret = process.env.REFRESH_TOKEN_SECRET


authRoute.post('/login',(req,res)=>{
    const {username, password} = req.body
    const accessToken = jwt.sign({username,role: 'admin'},accessSecret,{expiresIn: '30m'})
})

authRoute.post('/register',(req,res)=>{
    
})

authRoute.post('/refresh',(req,res)=>{
    
})


module.exports = authRoute