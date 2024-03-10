// import React, { useState } from "react";
// import "./header-style.scss";
// import { Link } from "react-router-dom";
// import CartIcon from "../cart-icon/cart-icon";

// const Header = () => {
//   const [active, setActive] = useState(null);
//   console.log(active);
//   return (
//     <>
//       <nav className="nav-menu container">
//         <div className="log">
//           <Link to="/">
//             <span className="logo-text">BAGIT</span>
//           </Link>
//         </div>
//         <ul className="ul">
//           <li
//             className={`${active === "home" ? "active" : null}`}
//             onClick={() => setActive("home")}
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={`${active === "shop" ? "active" : null}`}
//             onClick={() => setActive("shop")}
//           >
//             <Link to="/shop">Shop</Link>
//           </li>
//         </ul>
//         <CartIcon />
//       </nav>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./header-style.scss";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";

const Header = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  useState(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="nav-menu container">
        <div className="log">
          <Link to="/" className="logo-text">
            BAGIT
          </Link>
        </div>
        <ul className="ul">
          <li className={active === "/" ? "active" : "notActive"}>
            <Link to="/">Home</Link>
          </li>
          <li className={active === "/shop" ? "active" : "notActive"}>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </>
  );
};

export default Header;
