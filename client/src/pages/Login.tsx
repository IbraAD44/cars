import { Link } from "react-router-dom";
import "./../styles/login.css";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="button">Login</button>
        <span>
          don't have an account? <Link to="/rigister"> Register</Link>
        </span>
      </form>
    </div>
  );
}
