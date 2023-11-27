const express = require("express")
const app = express()
const mongoose = require('mongoose')

// Database
const database  = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect('mongodb+srv://junjie:<YOUR_PASSWORD>>@junjiecluster.1cawbvg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
        )
        console.log("Database connected successfully")
    } catch (error) {
        console.log(eror)
        console.log("Database connection failed")
    }
})

database();

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})