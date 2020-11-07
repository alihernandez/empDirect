import React from 'react';

const empContext = React.createContext({
    result: {},
    search: "",
    handleInputChange: () => {},
    handleFormSubmit: () => {},
});

export default empContext;