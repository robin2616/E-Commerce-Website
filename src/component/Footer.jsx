import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";



function Footer(){
    return(<>
<div className="h-[200px] mt-10 rounded-lg w-full bg-slate-800 relative top-[100%] text-white text-">

<div>
    <span className="text-[20px]">Contact Us:</span><br/>
    <span>Phone No: 7091071889 <br/>
    Email : manyakumar26@gmail.com</span>

</div> 

<div className="relative left-[400px]  top-[-70px]">
    <span className="text-[20px]">Office Adress:</span><br/>
    <span>Flat No : 32-B<br/>
        Amber Hostel<br/>
    IIT DHANBAD<br/>
    846002</span>
    
</div>

<div className="relative left-[900px] top-[-190px]" >
    <span className="text-[20px]">Social Media Handle</span>
    <div className="text-2xl translate-x-[-40px] translate-y-3 ">
    <ul className="flex flex-row gap-3 ">
    <li><FaInstagram/></li>
    <li><FaWhatsapp/></li>
    <li><FaYoutube/></li>
    <li><RiTwitterXLine/></li>
    <li><FaFacebook/></li>
    </ul>
    </div>
    
</div>
   
   
   </div>


    </>)
}
export default Footer;