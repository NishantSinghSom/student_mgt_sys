import React from "react";

const Dashboard = () => {
  // Placeholder values; these can be replaced with API calls later
  const stats = {
    students: { total: 24, top: 5 },
    departments: { total: 4, highest: "Science" },
    courses: { total: 8, highest: "Mathematics" },
  };

  return (
    <div className="container">
      <div className="content-wrapper dashboard">
        <h2 className="text-center my-3">Dashboard</h2>

        <div className="dashboard-cards">
          <div className="card card-students">
            <h3>Students</h3>
            <p>No. of Students: {stats.students.total}</p>
            <p>No. of Top Students: {stats.students.top}</p>
          </div>

          <div className="card card-departments">
            <h3>Departments</h3>
            <p>No. of Departments: {stats.departments.total}</p>
            <p>Department with Highest Student: {stats.departments.highest}</p>
          </div>

          <div className="card card-courses">
            <h3>Courses</h3>
            <p>No. of Courses: {stats.courses.total}</p>
            <p>Courses with Highest Student: {stats.courses.highest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
