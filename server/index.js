const express = require("express");
const cors = require("cors");
const createCheckoutSession = require("./api/checkout");

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

const path = require("path");
__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`server listing on port ${port}`));
