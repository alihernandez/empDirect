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
    const [search, setSearch] = useState("");

    useEffect(()=> {
      API.getRandomPeople().then(ppl => {
            setResults(ppl.data.results)
      })
    },[]
    )
    const searchEmployees = async (query) => {
        try {
          const res = await API.search(query);
          console.log("EmployeeContainer -> res", res.data);
          setResults(res.data);
        } catch (error) {
          console.log("You messed up!");
        }
      };
    

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearch(value);
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        searchEmployees(search);
      };

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
                    <EmployeeDetail results={results} />
                </Main>
            </Layout>
       
    );
};

export default EmployeeContainer;
