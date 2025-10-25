import ButtonLink from "./ButtonLink";
import useListDepartmentComponentHook from "../hooks/useListDepartmentComponentHook";

const ListDepartmentComponent = () => {
  const { departments, updateDepartment, removeDepartment } =
    useListDepartmentComponentHook();

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="page-card card-departments">
          <h3>Departments</h3>
          <p>No. of Departments: {departments.length}</p>
        </div>
        <ButtonLink text="Add Department" toAction="/add-department" />
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Department Name</th>
            <th scope="col">Department Description</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.departmentName}</td>
                <td>{item.departmentDescription}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => updateDepartment(item.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeDepartment(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDepartmentComponent;
