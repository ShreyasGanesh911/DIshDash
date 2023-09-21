const express = require('express');
const connection = require('./DataBase/MongoDb')
const userRoutes = require('./Routes/User') 
const app = express();
var cors = require('cors')


app.use(cors())
const port = 5000;
app.use(express.json())
app.use("/user",userRoutes)

app.listen(port,()=>{
    console.log("Listening to port 5000")
})