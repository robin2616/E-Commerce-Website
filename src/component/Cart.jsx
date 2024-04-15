import { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { TiMinus } from "react-icons/ti";
import { useEffect } from "react";
import { Mycontext } from "../context/Mycontext";
import { RiDivideLine } from "react-icons/ri";



function Cart() {

    const { name, editcartno } = useContext(Mycontext)

    const [a, b] = useState(0)
    const [x, u] = useState([])

    useEffect(() => {
        const cartindb = async () => {

            const items = { name: name }

            const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                body: JSON.stringify(items),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone)
            u(findedone)
        }

        cartindb()

    }, [])
    console.log(x)

    const deletfromcart = async (i) => {

        const items = { name: name, nameofprod: i.name }

        const response2 = await fetch('http://localhost:3000/delcart', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: { 'Content-Type': 'application/json' }
        })
        const findedone2 = await response2.json()
        console.log(findedone2)


    }
    return (<>



        <h1 className="flex justify-center translate-y-6">SHOPPING CART</h1>

        {x.map((i) => (

            <div className="bg-zinc-100 w-[850px] flex mb-3 flex-row h-[210px]  shadow-zinc-400 shadow-md translate-x-[80px] translate-y-[50px]">

                <div>
                    <img src={i.image} className="h-[210px] w-[250px] p-3" />
                </div>
                <div>
                    <span className=" relative left-[250px] text-2xl font-normal ">{i.name}</span>
                    <span className=" text-sm fixed left-[250px] translate-y-9 p-2 ">{i.description}</span>
                    <span className="line-through fixed left-[250px] top-[160px]">Rs.{i.price + i.price * 0.3}</span>
                    <span className="fixed left-[335px] top-[160px]">30% OFF</span>
                    <span className=" font-medium text-2xl fixed left-[410px] top-[160px] translate-y-[-6px]">Rs. {i.price}</span>
                    <button onClick={()=>{deletfromcart(i)
                          location.reload()}} className="bg-red-300 fixed left-[720px] hover:scale-105 top-[150px] font-bold p-[8px] rounded-md ">Delete</button>



                </div>

            </div>





           
        ))}


    </>)
}

export default Cart

