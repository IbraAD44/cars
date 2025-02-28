import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button type="button">Login</button>
          <p>this is an error!</p>
          <span>
            if you have an account? <Link to="/login"> Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
