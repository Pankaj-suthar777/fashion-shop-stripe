const stripeApi = require("../stripe");

function calculateOrderAmount(cartItems) {
  return (
    cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0) * 100
  );
}

async function paymentIntent(req, res) {
  const { cartItems, description, receipt_email, shipping } = req.body;

  let paymentIntent;

  try {
    paymentIntent = await stripeApi.paymentIntents.create({
      amount: calculateOrderAmount(cartItems),
      currency: "usd",
      description,
      payment_method_types: ["card"],
      receipt_email,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: "an error occured" });
  }
}

module.exports = paymentIntent;
