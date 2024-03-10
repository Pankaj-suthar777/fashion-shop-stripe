const stripeAPI = require("../stripe");

const webHookHandlers = {
  "checkout.session.completed": (data) => {
    console.log("Checkout completed successfully", data);
    // other buisness logic
    console.log("yes hi");
  },

  "payment_intent.succeeded": (data) => {
    console.log("Payment succeeded", data);
    console.log("yes no");
  },
  "payment_intent.payment_failed": (data) => {
    console.log("Payment Failed", data);
  },
};

function webhook(req, res) {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeAPI.webhooks.constructEvent(
      req["rawBody"],
      sig,
      "whsec_06bf5fc1324a955d8f99d8fd4a1109598f8f530e76e2b21d641d4cd979c3646a"
    );
  } catch (error) {
    return res.status(400).send(`Webhook error ${error.message}`);
  }

  // if (event.type === "checkout.session.completed") {
  //   const session = event.data.object;
  //   console.log("Event data", session);
  //   res.status(200).json({ message: "Payment Successfull" });
  // }

  if (webHookHandlers[event.type]) {
    webHookHandlers[event.type](event.data.object);
    res.status(200).end();
  } else {
    res.status(400);
  }
}

module.exports = webhook;
