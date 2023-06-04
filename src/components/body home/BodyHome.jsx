import { Link } from "react-router-dom";
import "./bodyHome.css"
import Header from "../header/Header";

function BodyHome() {

    return ( 
        <div className="container-bodyHome">
            <Header />
            
            <div className="div-all-links">
                <Link to="/" className="link-h3" >
                    <div className="div-h3">
                        <h3 className="h3-body">Plants make life <br/> better</h3>                                
                    </div>
                </Link>
                <Link to="/categories/c9697ff8-b0c4-5a87-aff1-eb7437dd4ac0" className="link-body" >
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Areca palm</h3>
                        <img className="img-body" 
                        src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/07/Areca-Palm-1.jpg"/>                                                      
                    </div>
                </Link>
                <Link to="/categories/537f9c6b-9a10-5cf4-b319-9dfca5c52fbf" className="link-body" >
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Corn plant</h3>
                        <img className="img-body" src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/07/Corn-Plant.jpg" />
                    </div>
                </Link>
                <Link to="/categories/f1562485-44fa-5395-9086-275d22649789" className="link-body" >
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Snake plant</h3>
                        <img className="img-body" src="https://indiagardening.b-cdn.net/wp-content/uploads/2020/04/4Snake-Plant.jpg" />
                    </div>
                </Link>
                <Link to="/categories/88724c5f-bfce-57f9-a226-c3bda0cbeb82" className="link-body">
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Dragon tree</h3>
                        <img className="img-body" src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/07/Madagascar-Dragon-Tree.jpg" />
                    </div>
                </Link>
                <Link to="/categories/0fc4faa6-2945-5b76-9051-3955bfca8af9" className="link-body" >
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Weeping fig</h3>
                        <img className="img-body" src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/07/Weeping-Fig-1.jpg" />
                    </div>
                </Link>
                <Link to="/categories/a19b63d3-3615-59ec-ab2f-0531e71553d5" className="link-body" >
                    <div className="div-name-img">
                        <h3 className="h3-plant-body">Heartleaf philodendron</h3>
                        <img className="img-body" src="https://indiagardening.b-cdn.net/wp-content/uploads/2021/07/Heartleaf-Philodendron.jpg" />
                    </div>
                </Link>
                <Link to="/" className="link-h3-connect" >
                    <div className="div-h3">
                        <h3 className="h3-body-connect">Connect <br/> with <br/> nature.</h3>                                
                    </div>
                </Link>
            </div>   
        </div>
     ); 
}

export default BodyHome;