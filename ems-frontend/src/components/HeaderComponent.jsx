import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <aside className="left-sidebar">
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
      </aside>
    </div>
  );
};

export default HeaderComponent;
