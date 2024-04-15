import { useContext, useState ,useEffect} from "react"
import { Mycontext } from "../context/Mycontext"

function Userdetail(){
    const {name,adduserdata,detail}=useContext(Mycontext)
    // const [userdetail,adduserdata]=useState([])


    // useEffect(()=>{const cartindb=async()=>{
   
    //     const items={name:name}
    
    //     const response = await fetch('http://localhost:3000/userdetail',{
    //         method: 'POST',
    //         body: JSON.stringify(items),
    //         headers: {'Content-Type': 'application/json'}
    //     })
        
    //     const findedone=await response.json()
    //      upduserdetail([...userdetail,findedone])
    //      }
    //   cartindb()
    // },[])
    
    // console.log(userdetail)
        console.log(detail)

 
return(<>
<div className="h-[320px] w-[600px] bg-blue-100 rounded-xl border-black border-3 translate-x-[330px] translate-y-[20px]">
<h1 className=" flex justify-center p-2 font-semibold shadow-2xl ">MY PROFILE</h1>

<div className=" flex flex-col mb-[55px] ml-8 mt-7" >
<h1 className="text-[30px] p-2">Name : {detail.at(0).name}</h1>
<h1 className="text-[30px] p-2">Email : {detail.at(0).email}</h1>
<h1 className="text-[30px] p-2">Phone : {detail.at(0).phone}</h1></div>

<button
 className="bg-green-200 rounded-lg p-2 text-xl font-medium relative translate-x-[240px] translate-y-[-60px] hover:opacity-80"
onClick={()=>{
alert("confirm logout")
adduserdata("Login")
window.open("/","_self")}} >Sign Out</button>

</div>







</>)
}
export default Userdetail