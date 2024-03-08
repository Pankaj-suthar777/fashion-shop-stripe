import React from "react";
import "./main-section.scss";
const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img
            src="https://images.unsplash.com/photo-1668453284543-8df7367074eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            Crafted from Wickett and Craig veg tan leather, the Standard Box
            Tote Bag No. 1304 is perfect for everyday function. Its roomy
            interior and laptop pocket make it the ideal daily companion. Our
            Standard Box Tote was designed by Teddi and Tyler Cripps, creators,
            founders, owners, and operators of the iconic Spokane-based Teddi
            Joelle brand. It features Homestead Brand's signature Randall & Co.
            embossed straps.
          </p>
          <button className="button is-black" id="shop-now" onClick={() => {}}>
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
