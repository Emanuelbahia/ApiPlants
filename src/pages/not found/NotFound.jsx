import plant from "../../../public/images/Captura_de_pantalla_2023-06-03_122309-removebg-preview.png"
import "./notFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-notfound">
        <div className="container-404">
            <h2 className="h2-notfound">4</h2>
            <img className="img-notfound" src={ plant } />
            <h2 className="h2-notfound">4</h2>
        </div>
        <h3 className="h3-notfound">PAGE NOT FOUND</h3>
        <h3 className="h3-error">The page you are looking is not available</h3>
        <button className="button-back-home"><Link style={{textDecoration:"none", color:"#eeeeee"}} to="/">Back to home</Link></button>     
    </div>
  )
}
