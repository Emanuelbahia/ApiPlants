import Layout from "./pages/layout/Layout";
import { Routes, Route } from "react-router-dom"
import './App.css'
import Presentation from "./components/presentation/Presentation";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./components/home/Home";
import BodyHome from "./components/body home/BodyHome";
import Categories from "./components/categories/Categories";


function App() {
  
 {/* poniendo el index, el primer componente q aparece en el layout es el home */}
  return (
    <div className="app-container" >
      <Routes>
         <Route path="/" element= { <Layout/> } >
            <Route index element= { <Presentation/> } />     
         </Route> 
         <Route path="/home" element= { <Home/> } > 
            <Route index element= { <BodyHome/> } /> 
            <Route path="register" element= { <Register/> } />
            <Route path="login" element= { <Login/> } />
            <Route path="categories" element= { <Categories/> } />
         </Route>
      </Routes>
    </div>
  )
}

export default App;
