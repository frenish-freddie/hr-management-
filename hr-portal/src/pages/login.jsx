import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(empId, password);

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", data.role);

      if (data.role === "senior_hr") navigate("/hr");
      else navigate("/employee");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form   ">
      <h1>Login</h1>

      {error && <p className="error">{error}</p>}

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="btn-primary">Login</button>
    </form>
  );
}
