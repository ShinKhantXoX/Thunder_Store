
import {Routes,Route} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import Register from "./pages/Register";
import Success from "./pages/Success";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<ProductList/>}/>
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/success'} element={<Success/>}/>
                <Route path={'/detail/:id'} element={<ProductDetails/>}/>
                <Route path={"/cart"} element={<Cart/>} />
            </Routes>
        </div>
    )
}

export default App