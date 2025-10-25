import ButtonLink from "./ButtonLink";
import useCourseComponentHook from "../hooks/useCourseComponentHook";

const CourseComponent = () => {
  const {
    courseName,
    setCourseName,
    courseDescription,
    setCourseDescription,
    title,
    saveOrUpdateCourse,
  } = useCourseComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/courses" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
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
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateCourse}
              >
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
