import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer"
import "./home.css"

//en la posicion del Outlet me van cambiando los componentes de bodyHome, register, login y categories!

function Home() {
    return (
        <div className="container-home">
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
      );
}

export default Home;