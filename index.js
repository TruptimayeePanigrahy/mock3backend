const express = require("express")
const cors = require("cors")
require("dotenv").config()
const {connection}=require("./db")
const {bookroute}=require("./router/bookroute")



const app = express()
app.use(express.json())
app.use(cors())
app.use("/",bookroute)



app.get("/", (req, res) => {
    res.send("Homepage")
})

app.listen(process.env.port, async() => {
    try {
        await connection
        console.log("DB connected to server")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})