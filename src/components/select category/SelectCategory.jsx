//estructura de cada detalle de planta elegida

import "./selectCategory.css"

function SelectCategory(props) {

    return ( 
        
            <div className="div-plant" >
                <img className="img-plant" src={ props.Img } alt={ props.id }  />
                <div className="div-subtitles">
                    <h4 className="h4-plant"> { props.Appeal } </h4>  
                    <h6 className="h6-plant"> { props.Climat } </h6> 
                </div>
            </div>
        
     );
}

export default SelectCategory;