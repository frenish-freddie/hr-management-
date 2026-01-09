const role = localStorage.getItem("role");

export default function HrDashboard() {
  return (
    <div className="hr-container">
      <h1>HR Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p>42</p>
        </div>

        <div className="stat-card">
          <h3>Open Positions</h3>
          <p>5</p>
        </div>
      </div>

      <div className="actions">
        {(role === "hr_manager" || role === "senior_hr") && (
          <button>Add Job</button>
        )}

        {role === "senior_hr" && (
          <>
            <button>Manage Employees</button>
            <button>Approve Leaves</button>
          </>
        )}
      </div>
    </div>
  );
}
