const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost:27017/practice'
const app=express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
    console.log('connected')
})
app.use(express.json())
const studentRouter=require('./routes/practice')
app.use('/practice',studentRouter)
app.listen(3000,function(){
    console.log('Server started')
})
