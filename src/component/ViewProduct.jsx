import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Mycontext } from "../context/Mycontext";
import Header from "./Header";
import Cart from "./Cart";
import { IoMdArrowDropright } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";





function ViewProduct({ onclose, i }) {
  const { addbuyingitem, name, xuv } = useContext(Mycontext)
  const [isdisale, updable] = useState(true)
  const [a, b] = useState(false);
  const [reviewval, updreview] = useState("")
  const [reviewlist, updatelistofreview] = useState([])

  useEffect(() => {
    const fcth = async () => {

      const items = { name: xuv.name }

      const response = await fetch('http://localhost:3000/showreview', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: { 'Content-Type': 'application/json' }
      })

      const findedone = await response.json()

      updatelistofreview(findedone.at(0).review)
    }
    fcth()
  }, [])


  return (<>


    <div className="bg-white overflow-scroll inset-0 backdrop-blur-lg fixed opacity-[10px] h-[full] w-[full]">
      <Header />

      <img src={xuv.image} alt="fdsf" className=" shadow-2xl hover:scale-105 rounded-lg h-[300px] w-[400px] ml-20 mt-10" />
      <br></br>

      <span className="text-[40px] fixed top-24 font-semibold right-[30%] ">{xuv.name}</span>
      <span className="fixed top-[160px] right-[540px] bg-blue-100 shadow-2xl rounded-lg text-2xl font-medium p-2">{xuv.category}-{xuv.company}</span>
      <div className="w-[700px] fixed right-10 top-[220px] text-[18px] mb-5" >{xuv.description}</div>


      <div className="flex gap-2 fixed top-[350px] mt-3 right-[350px]">
        <span className=" text-4xl font-semibold">Rs.{xuv.price}</span>
        <span className=" text-xl line-through translate-y-2 font-semibold">Rs.{xuv.price + 0.3 * xuv.price}</span>
        <span className=" text-blue-700 text-2xl translate-y-1  font-semibold">30% off</span>
      </div>




      {isdisale &&
        <button className="bg-yellow-200 fixed hover:scale-105 left-[120px] text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32  border-black border-2" onClick={async () => {





          const items = { name: name, cartitem: xuv }

          const response = await fetch('http://localhost:3000/view', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
          })

          const findedone = await response.json()
          console.log(findedone)

          b(true)

        }}>CART</button>}
      {!isdisale && <button className="bg-yellow-200 fixed left-[120px] text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32 border-black border-2"

      >Added</button>}

      <button onClick={() => {

        addbuyingitem(xuv)
        window.open("/purchase", "_self")
      }} className="bg-yellow-200 fixed left-[320px] hover:scale-105  text-3xl font-semibold drop-shadow-2xl p-1 rounded-lg w-32 border-black border-2">Buy</button>


      <div className="flex fles-row gap-[1px] mt-2 text-xl text-yellow-500 top-[500px] left-[200px] fixed  ">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <span className="top-[525px] left-[220px] fixed mt-1  ">4.5 rating</span>



      <div className="fixed left-[600px] flex g-2 flex-col mb-8">
        <div class="form-floating w-[500px] ">
          <textarea value={reviewval} onChange={(e) => {
            updreview(e.target.value)
            console.log(reviewval)
          }} className="form-control w-[200px]" placeholder="Leave a comment here"></textarea>
          <label htmlFor="floatingTextarea2">Review of this Product</label>
        </div>
        <button className="bg-green-600 p-2 w-[100px] rounded-xl translate-x-[400px] mt-2" onClick={async () => {


          const items = { name: xuv.name, personname: name, value: reviewval }

          const response = await fetch('http://localhost:3000/review', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
          })

          const findedone = await response.json()

          location.reload()

        }


        }>Add</button>

      </div>
      <FaArrowDown className="translate-y-[134px] translate-x-[655px] text-2xl" />
      <h1 className=" fixed flex right-4 text-xl translate-y-[100px] translate-x-[-300px] p-2 bg-orange-100 rounded-md">Reviews by other customer</h1>
      <div className="w-[320px] h-auto translate-y-[160px] translate-x-[-300px] fixed flex flex-col gap-1 p-1 right-4 ">
        {reviewlist.map((g) => (
          <div className="w-[400px] h-auto border-black bg-zinc-100 border-2 shadow-2xl rounded-sm ">
            <span className="p-1 text-[15px] font-medium opacity-60">{g.by}</span><br></br>
            <span className="p-1 text-[24px] font-semibold font-mono">{g.personalreview}</span>

          </div>
          
        ))}

      </div>



    </div>

  </>)

}
export default ViewProduct;