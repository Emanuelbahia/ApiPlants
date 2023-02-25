import { useEffect, useState } from "react";
import { getAllPlants } from "../../services/getAllPlants";
import "./bodyHome.css"

function BodyHome() { 

    const [plants, setPlants] = useState([]);

    useEffect(() => { 

        //funcion auto invocada
        (async () => {
        setPlants(await getAllPlants()) ;
        
      })();

    }, [])

    console.log(plants)

    return ( 
        <div className="container-bodyHome">
            <h3 className="h3-bodyHome">The most wanted:</h3>
            {/* para q me no salte el error pongo q me mande la info de la API cuando plants > 0 */}
            { !plants.length ? "Loading..." : 
               <div className="container-div-plant">
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[0].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[0].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[0].Climat } </h6> 
                        </div>
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[1].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[1].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[1].Climat } </h6> 
                        </div>
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[5].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[5].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[5].Climat } </h6> 
                        </div>
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[34].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[34].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[34].Climat } </h6> 
                        </div>
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[230].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[230].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[230].Climat } </h6> 
                        </div> 
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[285].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[285].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[285].Climat } </h6> 
                        </div> 
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[222].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[222].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[222].Climat } </h6> 
                        </div> 
                    </div>
                    <div className="div-plant">
                        <img className="img-plant" src= { plants[56].Img } />
                        <div className="div-subtitles">
                            <h4 className="h4-plant"> { plants[56].Categories } </h4>  
                            <h6 className="h6-plant"> { plants[56].Climat } </h6> 
                        </div> 
                    </div>
               </div>
            }
             
            
        </div>
     ); 
}

export default BodyHome;