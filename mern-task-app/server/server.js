
require('dotenv').config();
const express = require('express');
const router = require('./routes/route');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const corsOptions = {
    origin : process.env.ORIGIN_URI,
    credentials : true,
    optionSuccessStatus : 200
}

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URI).then(() =>
    console.log("Mongodb Connected")
).catch((err) => console.log("Error connecting mongodb", err ))



app.use(express.json());

app.use('/todos', router);

app.listen(5000, () => console.log("server running on port 5000"));

