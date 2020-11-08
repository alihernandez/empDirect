import React, { useContext } from "react";
import empContext from "../utils/empContext";
import styled from "styled-components";
import moment from 'moment'
import SearchForm from '../components/EmployeeSearch'
const StyledEmployeeDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      <SearchForm />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID Pic</th>
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
                  </>
                );
              })
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </tbody>
        </table>
      </div>
    </StyledEmployeeDetail>
  );
};

export default EmployeeDetail;
