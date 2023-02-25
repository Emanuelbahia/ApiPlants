import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/getAllCategories";
import { getByCategory } from "../../services/getByCategory";
import SelectCategory from "../select category/SelectCategory";
import "./categories.css"

function Categories() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    

    useEffect(() => { 

        //funcion auto invocada
        (async () => {
        setCategories(await getAllCategories()) ;
        
        
      })();

    }, [])

    const selectCat = async e => {
        const cat = e.currentTarget.value;
        console.log(cat)
        setCategory(await getByCategory(cat));
    }

    console.log(categories)
    console.log(category)

    return ( 
        <div className="container-categories">
            <div className="div-label-select">
                <label className="label-category"> Choose a category:</label>
                <select className="select-category" onChange={ selectCat } >
                            <option name="">Select one</option>
                            { categories.sort((a, b) => a.Category > b.Category ? 1 : -1 )
                            .map(category =>  <option value={ category.Category } key={ category.Category } > { category.Category } </option> ) }
                </select>
            </div>
            <div className="container-div-plant">
                { category.length > 0 && (
                   category.map(cat => { 
                    return   <SelectCategory key= { cat.id } {...cat} /> 
                })
                )
                }
            </div>
        </div>
     );
}

export default Categories;