import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/register";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/login";
import HrDashboard from "./pages/HrDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/hr"
          element={
            <ProtectedRoute allowedRole="hr">
              <HrDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />


        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRole="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
