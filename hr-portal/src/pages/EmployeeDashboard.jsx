import DashboardLayout from "../components/DashboardLayout";
import "./EmployeeDashboard.css";

export default function EmployeeDashboard() {
  return (
    <DashboardLayout>
      <div className="emp-container page">
        <h1>Employee Dashboard</h1>

        <div className="profile-card">
          <h3>Profile</h3>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Email:</strong> john@company.com</p>
        </div>

        <div className="emp-stats">
          <div className="emp-card">
            <h4>Attendance</h4>
            <p>96%</p>
          </div>

          <div className="emp-card">
            <h4>Leaves Remaining</h4>
            <p>8</p>
          </div>

          <div className="emp-card">
            <h4>Salary Status</h4>
            <p>Paid</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
