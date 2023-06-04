//estructura de cada detalle de planta elegida
import { Link } from "react-router-dom";
import "./selectCategory.css"

function SelectCategory(props) {

    //cuando elijo una planta me manda a la pagina donde me muestra la planta con todas sus caracteristicas.
    return ( 
        <Link to= {`/categories/${props.id}`} style={{ textDecoration: "none", color: "black"}} >
            <div className="div-plant" >
                <h4 className="h4-plant"> { props["Latin name"] } </h4> 
                <img className="img-plant" src={ props.Img } alt={ props.id }  />                                                
            </div>
        </Link>
     );
}

export default SelectCategory;