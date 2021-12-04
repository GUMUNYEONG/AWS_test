const express = require ("express")
const app = express();
const PORT = process.env.PORT || '3000'

require('dotenv').config();
app.get('/',(req,res)=>{
    res.send("hello aws???")
})

app.listen(PORT,()=>{
    console.log(`server start port ${PORT}`)
})