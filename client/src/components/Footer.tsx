import React from "react";
import logo from "./../assets/images/logo.jpg";
import "./../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="" />
      <span>
        {" "}
        made withe love <b> React.js</b>
      </span>
    </footer>
  );
}
