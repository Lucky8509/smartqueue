const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());   // ✅ VERY IMPORTANT

mongoose.connect("mongodb://127.0.0.1:27017/smartqueue")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/queue", require("./routes/queueRoutes"));

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});