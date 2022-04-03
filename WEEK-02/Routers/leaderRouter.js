const express = require("express");
const Leaders = require("../Models/leaders");
require("../db");

const router = new express.Router();

router.get("/leadership", async (req, res) => {
  try {
    const promotions = await Leaders.find({});
    res.status(200).send(promotions);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.post("/leadership", async (req, res) => {
  try {
    const addLeader = new Leaders(req.body);
    await addLeader.save();
    res.status(200).send(addLeader);
  } catch {
    res.status(404).send("Something went Wrong");
  }
});

router.put("/leadership", (req, res) => {
  res.status(200).send(`PUT Request not Supported`);
});

router.delete("/leadership", async (req, res) => {
  try {
    const leaders = await Leaders.remove({});
    res.status(200).send(leaders);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.get("/leaders/:leaderId", async (req, res) => {
  try {
    const { leaderId } = req.params;
    const getId = await Leaders.findById(leaderId);
    res.status(200).send(getId);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.post("/leaders/:leaderId", (req, res) => {
  try {
    res.status(200).send(`POST Request not supported: ${req.params.leaderId}`);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.put("/leaders/:leaderId", async (req, res) => {
  try {
    const { leaderId } = req.params;
    const updateId = await Leaders.findByIdAndUpdate(leaderId, req.body);
    res.status(200).send("Updated - id: " + leaderId);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.delete("/leaders/:leaderId", async (req, res) => {
  try {
    const { leaderId } = req.params;
    const deleteId = await Leaders.findByIdAndDelete(leaderId);
    res.status(200).send(`${leaderId} id deleted`);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
