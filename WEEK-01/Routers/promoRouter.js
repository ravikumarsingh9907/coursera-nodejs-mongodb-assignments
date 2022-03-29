const express = require("express");

const router = new express.Router();

router.get("/promotions", (req, res) => {
  res.status(200).send("We will inform you, about your promotion");
});

router.post("/promotions", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(`Promotion name: ${data.name}, Discription: ${data.discription}`);
});

router.put("/promotions", (req, res) => {
  const data = req.body;
  res.status(200).send(`This is PUT route`);
});

router.delete("/promotions", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Deleting: Promotion name: ${data.name}, Discription: ${data.discription}`
    );
});

router.get("/promotions/:promoId", (req, res) => {
  res
    .status(200)
    .send("We will inform you, about your Promo, id: " + req.params.promoId);
});

router.post("/promotions/:promoId", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Promotion id: ${req.params.promoId}, Promotion name: ${data.name}, Discription: ${data.discription}`
    );
});

router.put("/promotions/:promoId", (req, res) => {
  res.status(200).send(`This is PUT route`);
});

router.delete("/promotions/:promoId", (req, res) => {
  const data = req.body;
  res.status(200).send(`Deleting: Promotion id: ${req.params.promoId}`);
});

module.exports = router;
