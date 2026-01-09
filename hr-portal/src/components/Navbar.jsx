import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Aptivora</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
         <Link to="/register" className="register-link">Register</Link>

        {!role && <Link to="/login">Login</Link>}

        {role === "hr" && <Link to="/hr">HR Dashboard</Link>}
        {role === "employee" && (
          <Link to="/employee">Employee Dashboard</Link>
        )}

        {role && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
