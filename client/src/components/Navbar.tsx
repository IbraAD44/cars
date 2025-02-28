import logo from "./../assets/images/logo.jpg";
import "./../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />{" "}
        </div>

        <div className="links">
          <Link className="linnk" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="linnk" to="/?cat=science">
            <h6>ART</h6>
          </Link>
          <Link className="linnk" to="/?cat=technology">
            <h6>ART</h6>
          </Link>
          <Link className="linnk" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <Link className="linnk" to="/?cat=design">
            <h6>ART</h6>
          </Link>
          <Link className="linnk" to="/?cat=food">
            <h6>ART</h6>
          </Link>
          <span>john</span>
          <span>Logout</span>
          <span className="write">
            <Link className="linnk" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
