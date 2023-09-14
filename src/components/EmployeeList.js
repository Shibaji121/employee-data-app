import React, { useEffect, useState } from "react";

export default function EmployeeList() {
  const [employeList, setEmployeList] = useState([]);
  useEffect(() => {
    fetch(" https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((response) => response.json())
      .then((employeList) => setEmployeList(employeList))
      .catch((error) => console.log(error));
  }, [employeList]);

  return (
    <div className="employee-list">
      <h1>EmployeeList</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {employeList.map((employe) => {
            return (
              <tr key={employe.id}>
                <td>
                  {employe.FirstName} {employe.LastName}
                </td>
                <td>{employe.DOB}</td>
                <td>{employe.StartDate}</td>
                <td>{employe.EndDate}</td>
                <td>{employe.Description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
