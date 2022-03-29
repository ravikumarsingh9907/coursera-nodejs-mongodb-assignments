const express = require("express");

const router = new express.Router();

router.get("/leadership", (req, res) => {
  res.status(200).send("We will inform you, about your Leader");
});

router.post("/leadership", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(`Leader name: ${data.name}, Discription: ${data.discription}`);
});

router.put("/leadership", (req, res) => {
  const data = req.body;
  res.status(200).send(`This is PUT route`);
});

router.delete("/leadership", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Deleting: Leader name: ${data.name}, Discription: ${data.discription}`
    );
});

router.get("/leaders/:leaderId", (req, res) => {
  res
    .status(200)
    .send("We will inform you, about your Leader, id: " + req.params.leaderId);
});

router.post("/leaders/:leaderId", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Leader id: ${req.params.leaderId}, Leader name: ${data.name}, Discription: ${data.discription}`
    );
});

router.put("/leaders/:leaderId", (req, res) => {
  res.status(200).send(`This is PUT route`);
});

router.delete("/leaders/:leaderId", (req, res) => {
  const data = req.body;
  res.status(200).send(`Deleting: Leader id: ${req.params.leaderId}`);
});

module.exports = router;
