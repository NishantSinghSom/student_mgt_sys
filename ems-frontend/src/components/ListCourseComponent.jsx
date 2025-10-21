import ButtonLink from "./ButtonLink";
import { useState } from "react";

const ListCourseComponent = () => {
  const [courses, setCourses] = useState([
    { id: 1, courseName: "Mathematics", courseDescription: "Math Course" },
    { id: 2, courseName: "Physics", courseDescription: "Physics Course" },
  ]);

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        <h2 className="text-center py-3">List of Courses</h2>
        <ButtonLink text="Add Course" toAction="/add-course" />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Course Description</th>
              <th scope="col">Action #1</th>
              <th scope="col">Action #2</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.courseName}</td>
                <td>{c.courseDescription}</td>
                <td>
                  <button className="btn btn-outline-info">Update</button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteCourse(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCourseComponent;
