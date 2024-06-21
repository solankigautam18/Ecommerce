// data is firstly fetched here from  shop-data.js and then sent to shop.component.jsx to display 
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
    const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
 }, []);
    const value = {categoriesMap};
    // const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};