import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
        <img className="navbar-logo" src="charlie.PNG"/>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <div className="navbar-btns">
            <button className="signup-btn" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          </div>
        ) : (
          <div className="navbar-btns">
            <button className="logout-btn" onClick={() => logout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
