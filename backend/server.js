require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


//  mongoose.connect("mongodb+srv://Arunraj29:arun2901@arunraj.xne4ztq.mongodb.net/?retryWrites=true&w=majority&appName=arunraj").then(() => {
//     console.log("Connected to MongoDB");
//  })

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    ssl: true,
    sslValidate: false, // only if you're using self-signed certificates
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const app = express();
app.use(express.json())
app.use(cors())


const calculatorRouter = require('./routes/calculator');
app.use('/api/calculator', calculatorRouter);

app.listen(7000,()=>{
    console.log("server is running at 7000")
})