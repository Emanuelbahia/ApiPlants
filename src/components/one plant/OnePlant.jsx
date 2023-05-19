import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById } from "../../services/getById"
import "./onePlant.css"
import Header from "../header/Header";

//pagina donde muestra a la planta elegida con todas sus caracteristicas.
function OnePlant() {

    const { plantId } = useParams();
    const [onePlant, setOnePlant] = useState("");

    useEffect(() => { 

        //funcion auto invocada
        (async () => {
        setOnePlant(await getById(plantId)) ;
        
        
      })();

    }, [])

    console.log(onePlant);

    return ( 
        <>
            <Header/>
            {
                <div className="container-plant">
                    <img className="image" src={ onePlant.Img } />
                    <div className="container-description">
                        <p className="description-plant"><strong>Latin name:</strong> { onePlant["Latin name"] }</p>                    
                        <p className="description-plant"><strong>Other names:</strong> { onePlant["Other names"] ? `${ onePlant["Other names"] }` : "-" }</p>                                            
                        <p className="description-plant"><strong>Family:</strong> { onePlant.Family }</p>
                        <p className="description-plant"><strong>Category:</strong> { onePlant.Categories }</p>
                        <p className="description-plant"><strong>Clima:</strong> { onePlant.Climat }</p>
                        <p className="description-plant"><strong>Avaibility:</strong> { onePlant.Avaibility }</p>
                        <p className="description-plant"><strong>Bearing:</strong> { onePlant.Bearing }</p>                       
                        <p className="description-plant"><strong>Growth:</strong> { onePlant.Growth }</p>
                        <p className="description-plant"><strong>Light ideal:</strong> { onePlant["Light ideal"] }</p>
                        <p className="description-plant"><strong>Light tolered:</strong> { onePlant["Light tolered"] }</p>
                        <p className="description-plant"><strong>Growth:</strong> { onePlant.Watering }</p>
                    </div>
                </div>
            }
        </>
     );
}

export default OnePlant;