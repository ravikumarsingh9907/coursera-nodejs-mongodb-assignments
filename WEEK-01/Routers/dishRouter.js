const express = require("express");

const router = new express.Router();

router.get("/dishes", (req, res) => {
  res.status(200).send("We will inform you, about your dish");
});

router.post("/dishes", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(`Dish name: ${data.name}, Discription: ${data.discription}`);
});

router.put("/dishes", (req, res) => {
  const data = req.body;
  res.status(200).send(`PUT is not supported`);
});

router.delete("/dishes", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Deleting: Dish name: ${data.name}, Discription: ${data.discription}`
    );
});

router.get("/dishes/:dishId", (req, res) => {
  res
    .status(200)
    .send("We will inform you, about your dish, id: " + req.params.dishId);
});

router.post("/dishes/:dishId", (req, res) => {
  const data = req.body;
  res
    .status(200)
    .send(
      `Dish id: ${req.params.dishId}, Dish name: ${data.name}, Discription: ${data.discription}`
    );
});

router.put("/dishes/:dishId", (req, res) => {
  const data = req.body;
  res.status(200).send(`PUT is not supported`);
});

router.delete("/dishes/:dishId", (req, res) => {
  const data = req.body;
  res.status(200).send(`Deleting: Dish id: ${req.params.dishId}`);
});

module.exports = router;
