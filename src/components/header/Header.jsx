import { Link } from "react-router-dom";
import "./header.css"
import { RiPlantFill, RiMenuLine } from "react-icons/ri";
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {

    return (
        <>
          <div className="container-header"> 
            <div className="div1-header">
              <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <RiMenuLine style={{ color: "white"}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item ><Link className="menu-link" to="categories">Categories </Link> </Dropdown.Item>
                      <Dropdown.Item ><Link className="menu-link" to="register">Register </Link> </Dropdown.Item>
                      <Dropdown.Item ><Link className="menu-link" to="login">Login </Link> </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </div> 
            <div className="div2-header">  
              <div className="div-icon-plant">
                  <RiPlantFill className="icon-plant"/>
              </div>  
              <Link style={{textDecoration : "none"}} to=""> <h2 className="h2-home"> ApiPlants </h2> </Link>
            </div>
          </div>
          <div className="div3-header"> 
              <div className="navbar-link"><p className="p-link"><Link className="name-link" to="categories">Categories</Link></p></div> 
              <div className="navbar-link"><p className="p-link"><Link className="name-link" to="Register">Register</Link></p></div>
              <div className="navbar-link"><p className="p-link"><Link className="name-link" to="Login">Login</Link></p></div>
          </div>
        </>
     );
}

export default Header;