import React, {useState, useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import styled from "styled-components";
import empContext from "../utils/empContext";
import API from '../utils/API';
import EmployeeDetail from './EmployeeDetail';



const Layout = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr;
`;

const EmployeeContainer = () => {
    const [results, setResults] = useState([]);
    const [original, setOriginal] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=> {
      API.getRandomPeople().then(ppl => {
            setResults(ppl.data.results)
            setOriginal(ppl.data.results);
      })
    },[]
    )
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
        console.log(value);
        let newResults = original.filter(employee => {
          return employee.name.first.toLowerCase().includes(value.toLowerCase()) ||  employee.name.last.toLowerCase().includes(value.toLowerCase())
        })
        setResults(newResults)
      };
    
   const handleOnClick = (column) => {
          let newResults = results.sort((a,b) => {
            return a.name[column].localeCompare(b.name[column])
          })
        alert("click")
          setResults(newResults)

   }
    return (
        // <empContext.Provider
        // value={{
        //     search,
        //     results,
        //     handleInputChange,
        //     handleFormSubmit,
        // }}
        // >
        
            <Layout>
                <Header />
                <Main>
                    <EmployeeDetail results={results} handleInputChange= {handleInputChange} search = {search} handleOnClick = {handleOnClick} />
                </Main>
            </Layout>
       
    );
};

export default EmployeeContainer;
