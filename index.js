const express = require('express');
const app = express();
const dbConnect = require('./config/connect');
const auth = require('./routes/auth');
const path = require("path");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/v1',auth);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });

app.listen(4000,()=>{
    console.log("server started");
})

dbConnect();