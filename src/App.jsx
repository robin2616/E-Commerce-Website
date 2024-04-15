import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Header from "./component/Header";
import { Cartingsystem } from "./context/Mycontext";
import { Myuser } from "./context/User";
import Footer from "./component/Footer";
import Signup from "./component/Signup";
import Userdetail from "./component/Userdetail";
import ViewProduct from "./component/ViewProduct";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Itemlist from "./component/Itemlist";
import Purchase from "./component/Purchase";
import Push from "./component/Push";
import About from "./component/About";

import Booked from "./component/Booked";



const App = () => {
  return (<>
  <Cartingsystem>
    <Header/>
    <BrowserRouter>
        <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign" element={<Signup/>}></Route>
        <Route path="/Itemlist" element={<Itemlist/>}></Route>
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/user" element={<Userdetail />} />
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/purchase" element={<Purchase/>}></Route>
        <Route path="/push" element={<Push/>}></Route>
        <Route path="/booking" element={<Booked/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        
        </Routes>
    </BrowserRouter>
     {/* <Footer/> */}
    </Cartingsystem>
 
    </>
  );
};

export default App;