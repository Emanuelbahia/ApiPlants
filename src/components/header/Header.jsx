import { RiPlantFill, RiMenuLine } from "react-icons/ri";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import "./header.css"


function Header() {

    return (
      <div className="navbar-principal">
        <Link to="/home" style={{ textDecoration: "none"}}>
          <div className="icon-title-plant">
            <RiPlantFill className="plant-principal"/>
            <h3 className="h3-principal-plants">Plants for the soul</h3>
          </div>
        </Link>
        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              <RiMenuLine style={{ color: "white"}} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item ><Link className="menu-link" to="body">styles </Link> </Dropdown.Item>
              <Dropdown.Item ><Link className="menu-link" to="categories">Categories </Link> </Dropdown.Item>                  
              <Dropdown.Item ><Link className="menu-link" to="register">Register </Link> </Dropdown.Item>
              <Dropdown.Item ><Link className="menu-link" to="login">Login </Link> </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/home/body" className="link-principal-cel">
          <h4 className="h4-principal">Most demanded</h4>
        </Link>
        <Link to="/home/categories" className="link-principal-cel">
          <h4 className="h4-principal">Categories</h4>
        </Link>
        <Link to="/home/register" className="link-principal-cel">
          <h4 className="h4-principal">Register</h4>
        </Link>
        <Link to="/home/login" className="link-principal-cel">
          <h4 className="h4-principal">Login</h4> 
        </Link>
      </div>
     );
}

export default Header;