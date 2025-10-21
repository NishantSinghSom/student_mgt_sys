import ButtonLink from "./ButtonLink";
import { useState } from "react";

const CourseComponent = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const saveCourse = (e) => {
    e.preventDefault();
    // For now just console.log; not wired to backend per instruction
    console.log("Save course", { courseName, courseDescription });
  };

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/courses" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Course</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Course Name: </label>
                <input
                  type="text"
                  name="courseName"
                  placeholder="Enter Course Name"
                  className="form-control"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Course Description: </label>
                <input
                  type="text"
                  name="courseDescription"
                  placeholder="Enter Course Description"
                  className="form-control"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                />
              </div>
              <button className="btn btn-outline-success" onClick={saveCourse}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
