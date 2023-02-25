import { Link } from "react-router-dom";
import "./presentation.css"

function Presentation() {

    const image =  new URL("../../../public/images/hojas de plantas.jpg", import.meta.url)

    return ( 
        <div className="container-home">
            <div className="info-home">
                <Link to="home" style={{ textDecoration: "none" }}> <h1 className="h1-home">ApiPlants</h1> </Link>
                <h3 className="h3-home">Choose the plants for your house...</h3>
                <Link to="home/register"> <button className="button-signup">Register</button> </Link>
                <Link to="home/login"> <button className="button-signup">Log in</button> </Link>
            </div>
            <img className="img-back" src= { image } />
        </div>
     );
}

export default Presentation;