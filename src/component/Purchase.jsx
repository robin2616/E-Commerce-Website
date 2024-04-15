import { useContext, useState,useEffect } from "react"
import { Mycontext } from "../context/Mycontext"
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import Orderplaced from "./Orderplaced";
import { RxPinLeft } from "react-icons/rx";

function Purchase(){

const {buy,name}=useContext(Mycontext)
const [a,b]=useState(1)
const [showorder,updorder]=useState(false)
console.log(buy)
const [showadress,updshowadress]=useState(true)

const[nam,updname]=useState()
const[street,updstreet]=useState()
const[pin,updpin]=useState()
const[city,updcity]=useState()
const[adress,updadress]=useState()
const[state,upsstate]=useState()
const[phon,updphon]=useState()
const[altphon,updaltphon]=useState()

const [addresstoshow,updasresstoshow]=useState([])


useEffect(()=>{

  const sendingtodb=async()=>{

    const items = { name: name,street: street,pincode:pin,city: city,state: state,adress: adress,phon: phon,altphon:altphon}
  
    const response2 = await fetch('http://localhost:3000/buy2', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: { 'Content-Type': 'application/json' }
    })
  
   
    const findedone2 = await response2.json()
    updasresstoshow(findedone2.at(0).adress)
  
  
  }
  sendingtodb()



},[])

const sendingtodb=async()=>{

  updorder(true)
  const items = { name: name,street: street,pincode:pin,city: city,state: state,adress: adress,phon: phon,altphon:altphon}

  const response = await fetch('http://localhost:3000/buy', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: { 'Content-Type': 'application/json' }
  })

  const findedone = await response.json()

  const itemforbooking={name:name,buy:buy}
  const response3 = await fetch('http://localhost:3000/book', {
      method: 'POST',
      body: JSON.stringify(itemforbooking),
      headers: { 'Content-Type': 'application/json' }
  })
  const findedone3 = await response3.json()
  console.log(findedone3)



}

console.log(addresstoshow)



    return(<>
    
   <img src={buy.image} className="h-[250px] w-[300px] m-10 border-yellow-200 border-2" alt="no" />
     <h2 className="relative font-bold left-24 top-[-30px]">{buy.name}</h2>
     <h2 className="relative left-28 top-[-20px] text-2xl bg-yellow-200 inline p-1 rounded-lg">Rs.{buy.price}</h2>
     <div className="flex flex-row gap-3 translate-x-[130px] ">
     <button  onClick={() => { b(a + 1) }} className="text-xl"><GoPlus className=" border-black border-2 text-2xl p-1 rounded-sm" /></button>
    <h1 className="text-xl font-semibold ">{a}</h1>
     <button onClick={() => { 
        if(a==1){
            b(1)
        }
        else{
        b(a - 1) }}} className="text-xl "><TiMinus className=" border-black border-2 text-2xl p-1 rounded-sm" /></button>
     </div>

     <div className="bg-blue-50 border-black border-3 h-auto w-[600px] translate-y-[-410px] translate-x-[490px] ">
      <span className="flex justify-center font-semibold text-2xl shadow-2xl ">Saved Adress </span>
      <div className="w-[600px] h-[200px]  border-black border-2" >
        {addresstoshow.map((i)=>(
          <>
          
          <div className="flex flex-col">
            <span>{i.name}</span>
            <span>{i.street}</span>
            <span>{i.adress}</span>
            <span>{i.city}</span>
            <span>{i.state}</span>
            <span>{i.pincode}</span>
            <span>{i.phon}</span>
            <span>{i.altphon}</span>
            <button className="bg-blue-500 p-2 w-[100px] rounded-xl font-semibold text-xl translate-x-[490px] translate-y-[-48px]">Order</button>
          </div>
          </>
        ))

        }
      </div>
      
     </div>

<div className="h-[500px] w-[750px] bg-blue-50 rounded-md relative border-black border-3 translate-y-[-300px] translate-x-[400px]">

    <span className=" flex justify-center text-4xl shadow-2xl pt-3 font-bold">Place Order</span>


<div className="flex flex-col gap-2 m-10 fixed left-8">

<div class="form-floating mb-3 w-[280px]">
  <input type="text" class="form-control" value={nam} onChange={(e)=>{updname(e.target.value)}} id="floatingInput" placeholder="name@example.com" required/>
  <label htmlFor="floatingInput">Name</label>
</div>

<div class="form-floating mb-3 w-[280px] ">
  <input type="text" class="form-control" value={pin} onChange={(e)=>{updpin(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Pincode</label>
</div>

<div class="form-floating mb-3 w-[280px] ">
  <input type="text" class="form-control " value={adress} onChange={(e)=>{updadress(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Adress</label>
</div>

<div class="form-floating mb-3 w-[280px] ">
  <input type="text" class="form-control" value={phon} onChange={(e)=>{updphon(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Phone No</label>
</div>


</div>

 
<div className="flex flex-col gap-2 m-10 fixed translate-x-[350px]">

<div class="form-floating mb-3 w-[280px]">
  <input type="text" class="form-control" value={street} onChange={(e)=>{updstreet(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Street</label>
</div>

<div class="form-floating mb-3 w-[280px] ">
  <input type="text" class="form-control" value={city} onChange={(e)=>{updcity(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">City</label>
</div>

<div class="form-floating mb-3 w-[280px]">
  <input type="text" class="form-control" value={state} onChange={(e)=>{upsstate(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">State</label>
</div>

<div class="form-floating mb-3 w-[280px] ">
  <input type="text" class="form-control" value={altphon} onChange={(e)=>{updaltphon(e.target.value)}} id="floatingInput" placeholder="name@example.com" required/>
  <label for="floatingInput">Alternate Phone No</label>
</div>


</div>

<button onClick={sendingtodb} className="bg-blue-500 p-2 rounded-lg font-semibold fixed top-[430px] left-[35%]">Save Adress and order now</button>



</div>


<div className=" flex flex-col gap-3 font-semibold text-xl shadow-2xl h-[320px] w-[320px] bg-yellow-50 border-black border-3 rounded-lg relative top-[-700px] ml-10">
<span className="m-2 relative left-16 text-2xl">Purchase Detail</span>
<span className="m-2 relative left-3 text-xl">Price (1 item) : Rs. {buy.price}</span>
<span className="m-2 relative left-3 text-xl">Price ({a} item): Rs.{buy.price*a}</span>
<span className="m-2 relative left-3 text-xl">Delivery charge :FREE</span>
<span className="m-2 relative left-0  text-xl rounded-2xl bg-orange-300 p-2">Total : Rs.{buy.price*a}</span>
</div>


{showorder && <Orderplaced a={a} buy={buy}/> }
    </>)
}
export default Purchase