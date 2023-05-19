import { Link } from "react-router-dom";
import "./principal.css";
import Header from "../header/Header";


export default function Principal() {
  return (
    <div className="container-principal">
        <Header/>
        <div className="wraper-ledt-right">
            <div className="div-left">
              <img className="img-cel" src="https://indiagardening.b-cdn.net/wp-content/uploads/2020/04/succulents.jpg" />
              <img className="img-tablet" src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/12/What-to-Grow.jpg" />
              <div className="z-index">
                <h3 className="h3-principal">INTERIOR</h3>
                <div className="h2-div">
                  <h2 className="h2-principal">Renew the decoration</h2>
                </div>
                <p className="p-principal">Enter and discover which plants go with your decoration style.<br/>
                  Beautify your space and give life to the rooms, improve your feeling of well-being and happiness.<br/>
                  Indoor plants improve air quality, increase humidity, and can reduce stress and improve mood.
                </p>
                <Link to="body">
                  <button className="button-principal">Some styles</button>
                </Link>
              </div>
            </div>
            <div className="div-right">
                <img className="img-principal" src="https://indiagardening.b-cdn.net/wp-content/uploads/2020/05/Sitting-Arrangement-1.jpg" />  
            </div>  
        </div>         
    </div>    
  )
}
