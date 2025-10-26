import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../services/AuthService";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const token = await loginUser({ username, password });
      if (token) {
        document.body.classList.add("show-sidebar");
        navigate("/dashboard");
      } else {
        setError("Login failed - no token received");
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err?.response?.data || "Login failed - please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text"
              placeholder="Enter your username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              placeholder="Enter your password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
          {error && <div className="form-error">{String(error)}</div>}
        </form>
        <div className="auth-footer">
          Don't have an account? <NavLink to="/register">Register here</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
