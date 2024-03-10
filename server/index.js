const express = require("express");
const cors = require("cors");
const createCheckoutSession = require("./api/checkout");
require("dotenv").config({ path: "./.env" });
const webhook = require("./api/webhook");
const paymentIntent = require("./api/paymentIntent");

const app = express();
const port = 5000;

app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hello World"));

app.post("/create-checkout-session", createCheckoutSession);

app.post("/webhook", webhook);

app.post("/create-payment-intent", paymentIntent);

app.listen(port, () => console.log(`server listing on port ${port}`));
