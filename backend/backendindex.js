const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

app.use(express.json())

app.post('/employeedata',(req,res)=>{
    const { time,date,name,work }=req.body
    res.send({
        time,
        date,
        name,
        work
    })
})

app.listen(5000,()=>{
    console.log("Server is running...")
})