const express = require("express");
const mongoose = require("mongoose");
require("../db");
const Promotions = require("../Models/promotions");
const methodOverride = require("method-override");

const router = new express.Router();
router.use(methodOverride("_method"));

router.get("/promotions", async (req, res) => {
  try {
    const promotions = await Promotions.find({});
    res.status(200).send(promotions);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.post("/promotions", async (req, res) => {
  try {
    const addPromo = new Promotions(req.body);
    await addPromo.save();
    res.status(200).send(addPromo);
  } catch {
    res.status(404).send("Something went Wrong");
  }
});

router.put("/promotions", (req, res) => {
  res.status(200).send(`PUT Request not Supported`);
});

router.delete("/promotions", async (req, res) => {
  try {
    const promotions = await Promotions.remove({});
    res.status(200).send(promotions);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.get("/promotions/:promoId", async (req, res) => {
  try {
    const { promoId } = req.params;
    const promotionId = await Promotions.findById(promoId);
    res.status(200).send(promotionId);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.post("/promotions/:promoId", async (req, res) => {
  try {
    res.status(200).send(`POST Request not supported: ${req.params.promoId}`);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.put("/promotions/:promoId", async (req, res) => {
  try {
    const { promoId } = req.params;
    const updateId = await Promotions.findByIdAndUpdate(promoId, req.body);
    res.status(200).send("Updated - id: " + promoId);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.delete("/promotions/:promoId", async (req, res) => {
  try {
    const { promoId } = req.params;
    const deleteId = await Promotions.findByIdAndDelete(promoId);
    res.status(200).send(`${promoId} id deleted`);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
