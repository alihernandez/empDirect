import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import styled from "styled-components";
import empContext from "../utils/empContext";

const Layout = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr;
`;

const EmployeeContainer = () => {
    const [result, setResult] = useState({});
    const [search, setSearch] = useState("");

    const searchEmployees = async (query) => {
        try {
          const res = await API.search(query);
          console.log("EmployeeContainer -> res", res.data);
          setResult(res.data);
        } catch (error) {
          console.log("You fucked up!");
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
        <empContext.Provider
        value={{
            search,
            result,
            handleInputChange,
            handleFormSubmit,
        }}
        >
            <Layout>
                <Header />
                {/* <Main>
                    <EmployeeDetails />
                </Main> */}
            </Layout>
        </empContext.Provider>
    );
};

export default EmployeeContainer;
