
import { FaRegUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import  "/src/css/Header.module.css";
import { Mycontext } from "../context/Mycontext";
import { FaBorderNone } from "react-icons/fa6";





function Header(){
  const {name,addnameinmenu}=useContext(Mycontext)
  const userdetail=()=>{
    if(name=="Login"){window.open("/log","_self")}
    else{window.open("/user","_self")}
  }


  const [hovered,updatehovered]=useState(false)
  const updatetrue=()=>{updatehovered(true)}
  const updatefalse=()=>{updatehovered(false)}
  const [userhovered,updateuserhovered]=useState(false)
  const updateusertrue=()=>{updateuserhovered(true)}
  const updateuserfalse=()=>{updateuserhovered(false)}

  useEffect(()=>{
    if(name==="Login"){
      updateuserhovered(false)
    }
  

  })
  
    return(<>
    <div className="h-[70px] w-full bg-blue-100 drop-shadow-xl rounded-lg	font-serif">


<a href="/" className="fixed  no-underline top-4 left-14 italic font-bold font-Poppins text-3xl">
  <h3 className="shadow-3xl text-black">CMART</h3></a>


<div >
    <span><IoMdSearch className="border-black text-xl fixed top-3 h-[38px] w-[35px] translate-x-[220px] translate-y-[4px] bg-blue-100  rounded-lg z-10  "/></span>
  <input type="text" className="fixed top-4 rounded-lg w-[530px] h-[38px] translate-x-[260px] focus:border-red-500 shadow-3xl
  " placeholder="             Search Here . . .  " list="listofitemstosearch"  >
    
  </input>
</div>

<datalist className="w-[500px] bg-red-200" id="listofitemstosearch">
  <option  value="iphone x"></option>
  <option value="samsung s20"></option>
  <option value="Dell Series"></option>
  <option value="Nokia 420"></option>
  <option value="Accessories"></option>
</datalist>

<div className="h-8 w-[160px] hover:scale-105 bg-zinc-700 fixed top-5 rounded-lg translate-x-[820px]">

<button onClick={userdetail} onMouseEnter={updateusertrue} onMouseLeave={updateuserfalse} className="text-[19px] text-white no-underline fixed top-[15px] translate-y-[-12px]
 translate-x-[35px] font-medium font-serif hover:scale-110">{name}</button>

<span className="text-white text-2xl fixed top-1 left-[105px]"><MdKeyboardArrowDown/></span>
  <div className="text-3xl h-8 fixed top-0 rounded-lg bg-indigo-500 translate-y-[0.1px] translate-x-[130px]"><FaRegUserCircle /></div>
</div>

<div className=" fixed top-5 rounded-lg right-[225px]">
  <button onClick={()=>{window.open("/booking","_self")}}><FaBorderNone className="text-2xl translate-y-[0px] translate-x-3 hover:scale-125"/></button>
</div>
<span className=" fixed top-10 rounded-lg right-[205px] font-medium ">Order</span>

<a href="/cart" className="fixed top-4 translate-x-[1100px] text-4xl text-black  "><FiShoppingCart className=" hover:scale-110"/></a>

<div className="h-5 w-5 bg-blue-100 fixed top-2 translate-x-[1130px] translate-y-[-4px] rounded-full ">
</div>
<button onMouseEnter={updatetrue} onMouseLeave={updatefalse}  className="fixed top-5 text-3xl translate-x-[1200px] "><HiDotsVertical className="hover:scale-110"/></button>

<nav>
  {userhovered &&
<ul onMouseEnter={updateusertrue} onMouseLeave={updateuserfalse} className=" text-xl font-medium fixed top-[52px] w-[160px] right-[283px] bg-white shadow-2xl rounded-lg" >
  <li className="p-2 translate-x-[-10px] hover:text-blue-500 " ><button onClick={()=>{window.open("/user","_self")}}>User Profile</button></li>
  <li className="p-2 translate-x-[-10px]  hover:text-blue-500 "><button onClick={()=>{addnameinmenu("Login")}}>Log Out</button></li>

</ul>}
</nav>


<nav>
{hovered &&
<ul onMouseEnter={updatetrue} onMouseLeave={updatefalse} className=" text-xl font-medium fixed top-10 w-[180px] right-8 bg-white shadow-2xl rounded-lg" >
  <li className="p-2 translate-x-[-10px]  hover:text-blue-500" ><button onClick={()=>{window.open("/contact","_self")}}>Contact Us</button></li>
 
</ul>}
</nav>








</div>
    </>)
}
export default Header;