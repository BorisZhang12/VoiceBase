// GlobalListContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const GlobalListContext = createContext();

// Create a provider component
export const GlobalListProvider = ({ children }) => {
    const [globalList, setGlobalList] = useState([]);

    const addToList = (item) => {
        setGlobalList([...globalList, item]);
    };

    const removeFromList = (index) => {
        setGlobalList(globalList.filter((_, i) => i !== index));
    };

    return (
        <GlobalListContext.Provider value={{ globalList, addToList, removeFromList }}>
            {children}
        </GlobalListContext.Provider>
    );
};