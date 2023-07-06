const express = require("express")

const bookroute = express.Router()
const {bookmodel}=require("../models/bookmodel")

bookroute.post("/addbook", async (req, res) => {
    try {
        let data = req.body
        const newdata = new bookmodel(data)
      await newdata.save()
res.status(200).send({"msg":"Book addedd successfully!!"})
    } catch (error) {
       console.log(error) 
    }
})

bookroute.get("/getbook", async (req, res) => {
    try {
        let data = await bookmodel.find()
        res.status(200).send(data)
    } catch (error) {
       console.log(error) 
    }
})

bookroute.delete("/delete/:id", async (req, res) => {
    try {
        
        let { id } = req.params
        let newdata = await bookmodel.findByIdAndDelete(id)
        res.status(200).send({"msg":"book deleted successfully!!"})
    } catch (error) {
       console.log(error) 
    }
})


bookroute.get("/filter", async (req, res) => {
    try {
        const data = req.query
        let books = await bookmodel.find(data)
        res.status(200).send({"filtereddata": books})
    } catch (error) {
        console.log(error)
    }
})

bookroute.get("/sortasc/:abc", async (req, res) => {
    try {
       const {abc}=req.params
        let books = await bookmodel.find().sort({price:abc})
        res.status(200).send({"sortingdata": books})
    } catch (error) {
        console.log(error)
    }
})






module.exports={bookroute}