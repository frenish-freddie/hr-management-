import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">HR MAG</h2>

      <nav>
        <Link to="/hr">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/employee">Employees</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </aside>
  );
}
