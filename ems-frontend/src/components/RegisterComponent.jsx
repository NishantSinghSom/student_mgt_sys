import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { registerUser } from "../services/AuthService";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("ROLE_USER");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      const user = { name, email, password, roles };
      await registerUser(user);
      // Registration successful
      navigate("/login");
    } catch (err) {
      console.error('Registration error:', err);
      setError(err?.response?.data || "Registration failed - please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">Student Management System</div>
      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
          <div className="form-group">
            <label>Roles</label>
            <input 
              type="text"
              placeholder="ROLE_USER"
              value={roles} 
              onChange={(e) => setRoles(e.target.value)}
              required 
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
          {error && <div className="form-error">{String(error)}</div>}
        </form>
        <div className="auth-footer">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
