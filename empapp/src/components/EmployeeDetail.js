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
      <SearchForm handleInputChange = {props.handleInputChange} search = {props.search}/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID Pic</th>
              <th   onClick={ () => {
                      props.handleOnClick("first")
                  }}>First</th>
              <th    onClick={ () => {
                      props.handleOnClick("last")
                  }}>Last</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
              {console.log(props.results)}
            {props.results.length > 0 ? (
              props.results.map((employee, index)=> {
                return (
                    
                    <tr key = {index}>
                      <td><img src= {employee.picture.thumbnail}/></td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{moment(employee.dob.date, "YYYY-MM-DD").format("MM-DD-YYYY")}</td>
                    </tr>
                  
                );
              })
            ) : (
                <tr >
                      <td> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </StyledEmployeeDetail>
  );
};

export default EmployeeDetail;
