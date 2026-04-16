const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema({

token: Number,
name: String,
service: String,
time: String

});

module.exports = mongoose.model("Queue", queueSchema);