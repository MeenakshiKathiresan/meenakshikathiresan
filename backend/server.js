const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5001;

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("connection established successfully")
})

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
    console.log(`Running: ${port}`);
});
