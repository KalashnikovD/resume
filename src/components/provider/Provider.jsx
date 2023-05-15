import React from 'react';
import {useState} from "react";
import Data from '../../json/data.json';

const DataContext = React.createContext();

function DataProvide ({children}) {
    const [data, setData] = useState(Data || {});   
    const changeData = (newData) => {
        setData(newData);        
    }
    return (
        <DataContext.Provider value={{data, setData: changeData}}>
            {children}
        </DataContext.Provider>    
    )

}

export const useDataContext = ()=> {
    return React.useContext(DataContext)
} 

export default DataProvide;