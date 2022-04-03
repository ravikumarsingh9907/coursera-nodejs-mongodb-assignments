const express = require("express");
const dishRouter = require("./Routers/dishRouter");
const promoRouter = require("./Routers/promoRouter");
const leaderRouter = require("./Routers/leaderRouter");

const app = express();

app.use(express.json());

app.use(dishRouter);
app.use(promoRouter);
app.use(leaderRouter);

app.listen(3000, () => {
  console.log("Listening....");
});
