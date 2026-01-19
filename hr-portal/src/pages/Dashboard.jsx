import "./Dashboard.css";

export default function Dashboard() {
  const role = localStorage.getItem("role") || "";
  const isSenior = role.toLowerCase().includes("senior");

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <span className="role-pill">{role || "HR"}</span>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h4>Open Positions</h4>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h4>Applications</h4>
          <p>86</p>
        </div>

        <div className="stat-card">
          <h4>Open Slots</h4>
          <p>8</p>
        </div>
      </section>

      {isSenior && (
        <section className="senior-actions">
          <h2>Senior Controls</h2>

          <div className="actions">
            <button>Add Job</button>
            <button>View Junior HRs</button>
            <button>Interview Pipeline</button>
          </div>
        </section>
      )}
    </div>
  );
}
