import { useContext, useState } from "react";
import { Mycontext } from "../context/Mycontext";
import { faker } from '@faker-js/faker';
import Moving from "./Moving";
import Item from "./Item";
import Itemlist from "./Itemlist";
import { Link } from "react-router-dom";
import  './Home.module.css'

function Home(){


    return(<>
    
 <Moving></Moving>
<Item></Item>
<Itemlist></Itemlist> 


  


    </>)
}
export default Home;