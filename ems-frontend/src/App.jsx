import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import Dashboard from "./components/Dashboard";
import ListCourseComponent from "./components/ListCourseComponent";
import CourseComponent from "./components/CourseComponent";

function App() {
  const toggleSidebar = () => {
    // toggle a class on body to show/hide the sidebar nav
    document.body.classList.toggle("show-sidebar");
  };
  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle tabs">☰</button>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />
          <Route path="/departments" element={<ListDepartmentComponent />} />
          <Route path="/add-department" element={<DepartmentComponent />} />
          <Route
            path="/edit-department/:id"
            element={<DepartmentComponent />}
          />
          <Route path="/courses" element={<ListCourseComponent />} />
          <Route path="/add-course" element={<CourseComponent />} />
          <Route path="/edit-course/:id" element={<CourseComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
