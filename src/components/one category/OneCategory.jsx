import { Routes, Route } from "react-router-dom";
import Categories from "../categories/Categories";
import OnePlant from "../one plant/OnePlant";
import "./oneCategory.css"

function OneCategory() {
    return ( 
        <>
        <Routes>
            <Route index element={ <Categories/> } />
            <Route path=":plantId" element= { <OnePlant/> } />
        </Routes>

        </>
     );
}

export default OneCategory;