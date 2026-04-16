const express = require("express");
const router = express.Router();
const Queue = require("../models/Queue");

router.post("/book", async (req, res) => {

  const { name, service } = req.body;

  const count = await Queue.countDocuments({ service });

  const entry = new Queue({
    token: count + 1,
    name,
    service,
    time: new Date().toLocaleTimeString()
  });

  await entry.save();

  res.json(entry);

});

router.get("/:service", async (req, res) => {

  const data = await Queue.find({ service: req.params.service });
  res.json(data);

});

router.delete("/:id", async (req, res) => {

  await Queue.findByIdAndDelete(req.params.id);
  res.json("Deleted");

});

module.exports = router;