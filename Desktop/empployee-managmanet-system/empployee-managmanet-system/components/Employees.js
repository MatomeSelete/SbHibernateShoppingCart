import React from 'react';
import styles from '../styles/Home.module.css';

const Employees = () => {
  const employeeData = [
    {
      id: 1,
      name: 'Mark',
      email: 'mark@example.com',
      phone: '123-456-7890',
    },
    // Add more employee data here...
  ];

  return (
    <div className={`overflow-x-auto ${styles.windowMain}`}>
      <table className={`table table-striped ${styles.table}`}>
        <thead className={styles.tableHead}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <th scope="row">{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <button type="button" className="btn btn-secondary">
                  View
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
