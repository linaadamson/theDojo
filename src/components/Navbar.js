import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// Import styles & images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button onClick={logout} className="btn">
                Logout
              </button>
            )}
            {isPending && (
              <button disabled className="btn">
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
