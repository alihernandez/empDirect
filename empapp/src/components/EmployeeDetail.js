import React, { useContext } from "react";
import empContext from "../utils/empContext";
import styled from "styled-components";
import moment from 'moment'
const StyledEmployeeDetail = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  width: 100%;
`;

const EmployeeDetail = (props) => {
  const {
    result: { name, email, dob, phone },
  } = useContext(empContext);

  return (
    <StyledEmployeeDetail>
      {console.log(props.results)}
      <div className="card">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {props.results.length > 0 ? (
              props.results.map((employee) => {
                return (
                  <>
                    <tr>
                      <th scope="row"><img src= {employee.picture.thumbnail}/></th>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{moment(employee.dob.date, "YYYY-MM-DD").format("MM-DD-YYYY")}</td>
                    </tr>

                    {/* <h3>Name:{employee.name.first + " " + employee.name.last}</h3>
                <h3>Email:{employee.email}</h3>
                <h3>DOB:{employee.dob.date}</h3>
                <h3>Phone:{employee.phone}</h3>
                <img src= {employee.picture.thumbnail}/> */}
                  </>
                );
              })
            ) : (
              <h3>No Results to Display</h3>
            )}
            {/* <EmployeeForm /> */}
          </tbody>
        </table>
      </div>
    </StyledEmployeeDetail>
  );
};

export default EmployeeDetail;
