import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout, getToken } from "../services/AuthService";

// Exported for use in App.jsx to check auth status
export const useAuth = () => {
  const [token, setToken] = useState(getToken);

  useEffect(() => {
    // Initialize token state
    setToken(getToken());
    
    // Listen for changes (e.g., from other tabs or login/logout)
    const onStorage = () => setToken(getToken());
    const onAuthChanged = () => setToken(getToken());
    
    window.addEventListener("storage", onStorage);
    window.addEventListener("auth-changed", onAuthChanged);
    
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("auth-changed", onAuthChanged);
    };
  }, []);

  return { isAuthenticated: !!token };
};

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const initializeAuth = () => {
      const token = getToken();
      setToken(token);
      // Always ensure sidebar is hidden initially
      document.body.classList.remove("show-sidebar");
    };

    // Initialize on mount
    initializeAuth();
    
    // Listen for auth changes
    const onAuthChanged = () => {
      initializeAuth();
    };
    
    const onStorage = () => {
      const newToken = getToken();
      setToken(newToken);
      if (!newToken) {
        document.body.classList.remove("show-sidebar");
      }
    };

    // Add auth-changed event listener
    window.addEventListener("auth-changed", onAuthChanged);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("auth-changed", onAuthChanged);
      window.removeEventListener("storage", onStorage);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    logout();
    setToken(null);
    document.body.classList.remove("show-sidebar");
    // Force navigation to login
    window.location.href = '/login';
  };

  return (
    <div>
      <aside className="left-sidebar">
        {token ? (
          <>
            <div className="sidebar-brand">Student Management System</div>
            <div className="sidebar-nav">
              <nav>
                <ul>
                  <li>
                    <NavLink className="sidebar-link dashboard-link" to="/dashboard" end>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="sidebar-link students-link" to="/students" end>
                      Students
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="sidebar-link departments-link" to="/departments" end>
                      Departments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="sidebar-link courses-link" to="/courses" end>
                      Courses
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sidebar-auth">
              <div className="auth-logged-in">
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : null}
      </aside>
    </div>
  );
};

export default HeaderComponent;
