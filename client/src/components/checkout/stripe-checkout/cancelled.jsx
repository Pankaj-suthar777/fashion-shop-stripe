import React from "react";
import Layout from "../../shared/layout";
import { useNavigate } from "react-router-dom";

const Cancelled = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payent was not successfull</p>
      </div>
      <div
        className="button is-black nomad-btn submit"
        onClick={() => navigate("/shop")}
      >
        <button>Continue Shopping</button>
      </div>
    </Layout>
  );
};

export default Cancelled;
