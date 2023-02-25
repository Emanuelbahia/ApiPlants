
import { Outlet } from "react-router-dom";

function Layout() {

    //utilizo el Outlet para q el header y footer se vean siempre y solo vayan cambiando los componentes q van en el medio
    return ( 
        <div>
            
            <Outlet/>
            
        </div>
     );
}

export default Layout;