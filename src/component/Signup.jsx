import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Mycontext";
function Signup(){
  const {addnameinmenu,adduserdata}=useContext(Mycontext)
  const [a,b]=useState("")
  const [a1,b1]=useState(false)
  const [c,d]=useState()
  const [c1,d1]=useState(false)
  const[e,f]=useState()
  const[e1,f1]=useState(false)
  const [g,h]=useState()
  const [g1,h1]=useState(false)

  

  useEffect(()=>{

    if(a==""){b1(false)}else{b1(true)}
    if(c==""){d1(false)}else{d1(true)}
    if(e==""){f1(false)}else{f1(true)}
    if(g==""){h1(false)}else{h1(true)}

  })



   
    return(<>

<div className="h-[500px] w-[500px] bg-blue-100 shadow-2xl rounded-xl border-black border-3 translate-x-[400px] translate-y-[20px]">

<h1 className="text-3xl font-semibold fixed translate-x-[100px] translate-y-[20px] ">Create New Account</h1>

<div className="flex flex-col gap-2 fixed top-20 left-[9%] w-[400px]">
<div class="form-floating mb-3 ">
  <input value={e} onChange={(e)=>{
    f(e.target.value)}} type="text" class="form-control"  placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Name</label>
</div>


<div class="form-floating mb-3">
  <input value={g} onChange={(e)=>{
    h(e.target.value);
    
}} type="number" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Phone No</label>
</div>



<div class="form-floating mb-3 ">
  <input value={a} onChange={(e)=>{
    b(e.target.value);
    
}} type="email" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Email</label>
</div>


<div class="form-floating mb-3">
  <input value={c} onChange={(e)=>{
    d(e.target.value);
    
}} type="text" class="form-control"  placeholder="Password"/>
  <label htmlFor="floatingInput">Password</label>
</div>




 <button className="bg-green-500 text-2xl  hover:border-black hover:border-2 hover:scale-103 font-semibold p-1 rounded-md" onClick={async ()=>{

var detail={name:e,phone:g,email:a, password:c}


const response = await fetch('http://localhost:3000/sign',{
    method: 'POST',
    body: JSON.stringify(detail),
    headers: {'Content-Type': 'application/json'}
})



const data=await response.json();
console.log(data)


addnameinmenu(data.name)
adduserdata(data)
window.open('/','_self')









}}>Sign Up</button>
</div>
<span className="fixed top-[460px] left-20 text-xl  ">Already have an account?</span>
<a className="fixed top-[460px] left-[310px] text-xl no-underline " href="/log">Log in</a>
</div>



    </>)
}
export default Signup;