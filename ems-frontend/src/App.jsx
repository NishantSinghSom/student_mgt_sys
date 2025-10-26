import "./App.css";
import "./auth.css";
import HeaderComponent, { useAuth } from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import Dashboard from "./components/Dashboard";
import ListCourseComponent from "./components/ListCourseComponent";
import CourseComponent from "./components/CourseComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { useEffect } from "react";

// Protect routes that require authentication
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useAuth();
  
  const toggleSidebar = () => {
    if (isAuthenticated) {
      document.body.classList.toggle("show-sidebar");
    }
  };

  // Set initial sidebar state when auth state changes
  useEffect(() => {
    // Always ensure sidebar is hidden by default
    document.body.classList.remove("show-sidebar");
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <div className="app-container">
        {isAuthenticated && (
          <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle tabs">
            ☰
          </button>
        )}
        <HeaderComponent />
        <main className="main-content">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={
              !isAuthenticated ? <LoginComponent /> : <Navigate to="/dashboard" />
            } />
            <Route path="/register" element={
              !isAuthenticated ? <RegisterComponent /> : <Navigate to="/dashboard" />
            } />
            
            {/* Root route - show login or dashboard based on auth state */}
            <Route path="/" element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            } />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <PrivateRoute><Dashboard /></PrivateRoute>
            } />
            <Route path="/students" element={
              <PrivateRoute><ListStudentComponent /></PrivateRoute>
            } />
            <Route path="/add-student" element={
              <PrivateRoute><StudentComponent /></PrivateRoute>
            } />
            <Route path="/edit-student/:id" element={
              <PrivateRoute><StudentComponent /></PrivateRoute>
            } />
            <Route path="/departments" element={
              <PrivateRoute><ListDepartmentComponent /></PrivateRoute>
            } />
            <Route path="/add-department" element={
              <PrivateRoute><DepartmentComponent /></PrivateRoute>
            } />
            <Route path="/edit-department/:id" element={
              <PrivateRoute><DepartmentComponent /></PrivateRoute>
            } />
            <Route path="/courses" element={
              <PrivateRoute><ListCourseComponent /></PrivateRoute>
            } />
            <Route path="/add-course" element={
              <PrivateRoute><CourseComponent /></PrivateRoute>
            } />
            <Route path="/edit-course/:id" element={
              <PrivateRoute><CourseComponent /></PrivateRoute>
            } />

            {/* Redirect all other paths to login/dashboard based on auth */}
            <Route path="*" element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;