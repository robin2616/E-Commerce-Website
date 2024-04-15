import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Mycontext";
import ViewProduct from "./ViewProduct";
import img from '/src/assets/26.jpg'
import axios from 'axios'
import '/src/css/Item.css'






function Item() {
    const { addinxuv, addnoofcart, name } = useContext(Mycontext);
    const [prod, adddata] = useState([])
    const [arr1, updarr1] = useState([])
    const [arr2, updarr2] = useState([])
    const [arr3, updarr3] = useState([])


    useEffect(() => {
        axios.get("https://api.pujakaitem.com/api/products")
            .then((res) => {
                adddata(res.data)
            })
    }, [])

    if (name === "Login") {
        addnoofcart(0)
    }


    //     useEffect(()=>{const cartindb=async()=>{

    //         const items={name:name}

    //         const response = await fetch('http://localhost:3000/item',{
    //             method: 'POST',
    //             body: JSON.stringify(items),
    //             headers: {'Content-Type': 'application/json'}
    //         })

    //         const findedone=await response.json()

    //          addnoofcart(findedone.length)
    // }
    // cartindb()
    // },[])

    useEffect(() => {
        const vfromdb = async () => {



            const response = await fetch('http://localhost:3000/prod', {
                method: 'POST',
                body: JSON.stringify(),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            const a1 = findedone.at(0).itemlist.at(0)
            console.log(findedone.at(0).itemlist.at(0))
            updarr1(a1)
            updarr2(findedone.at(0).itemlist.at(1))
            updarr3(findedone.at(0).itemlist.at(2))

        }
        vfromdb()
    }, [])


    var currenttime = new Date()
    var currentdate = currenttime.getDate()
    currenttime.setDate(currentdate + 7)
    var deldate = currenttime.toLocaleDateString()


    return (<>



        <div className="h-[440px] mb-4 flex flex-row flex-wrap  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">
            {arr1.map((i) => (

                <div onClick={() => {
                    addinxuv(i)
                    window.open("/viewproduct", "_self")

                }}

                    className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
 hover:shadow-2xl hover:border-2 hover:scale-105">

                    <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-md" alt="1234" />
                    <h3 className="text-black font-md text-center shadow-sm rounded-lg  bg-red-200">{i.name}</h3>
                    <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
                    <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
                        <span className="line-through">{i.price + i.price * 0.3}</span>
                        <span className=" font-medium">30% OFF</span>
                    </div>
                    <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
                    <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

                </div>

            ))}
            <span className="text-3xl font-semibold relative top-[-390px]  left-[40%]">Top Deal On Laptop</span>

        </div>

        <div className="h-[440px] flex flex-row flex-wrap mb-4  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">

            {arr2.map((i) => (

                <div onClick={() => {
                    addinxuv(i)
                    window.open("/viewproduct", "_self")

                }}

                    className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
                    hover:shadow-2xl hover:border-2 hover:scale-105">

                    <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-md" alt="1234" />
                    <h3 className="text-black font-md text-center shadow-xl rounded-lg  bg-red-200">{i.name}</h3>
                    <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
                    <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
                        <span className="line-through">{i.price + i.price * 0.3}</span>
                        <span className=" font-medium">30% OFF</span>
                    </div>
                    <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
                    <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

                </div>

            ))}
            <span className="text-3xl font-semibold relative top-[-390px] left-[40%]">Top Deal On SmartPhone</span>

        </div>

        <div className="h-[440px] flex flex-row flex-wrap  shadow-zinc-400 shadow-md  w-[1150px] translate-x-[70px] rounded-sm bg-zinc-300 shadow-3xl">

            {arr3.map((i) => (

                <div onClick={() => {
                    addinxuv(i)
                    window.open("/viewproduct", "_self")
                }}

                    className="h-[330px] w-[200px] mr-20 translate-x-12  mt-20 shadow-3xl rounded-md bg-white
                    hover:shadow-2xl hover:border-2 hover:scale-105">

                    <img src={i.image} className="h-[180px] w-[200px] hover:scale-105 rounded-md" alt="1234" />
                    <h3 className="text-black font-md text-center shadow-xl rounded-lg  bg-red-200">{i.name}</h3>
                    <div className=" translate-x-9 translate-y-[-10px] text-[18px]">{i.category}-{i.company}</div>
                    <div className="flex flex-row gap-2 translate-x-7 translate-y-[-12px] text-[18px]">
                        <span className="line-through">{i.price + i.price * 0.3}</span>
                        <span className=" font-medium">30% OFF</span>
                    </div>
                    <h3 className=" shadow-2xl bg-blue-100 text-center font-bold text-xl translate-y-[-12px] text-[24px]">Rs.{i.price}</h3>
                    <div className=" translate-x-4 translate-y-[-12px] text-[18px]">Delivery on {deldate}</div>

                </div>

            ))}
            <span className="text-3xl font-semibold relative top-[-390px] left-[40%]">Top Deal On Watch</span>


        </div>






        {/* <div className="flex flex-col fixed left-[42%] top-[0px] text-3xl font-semibold  gap-[370px]">
            <span>Top Deal On Laptop</span>
            <span>Top Deal On SmartPhone</span>
            <span>Top Deal On Watch</span>
        </div> */}




    </>)
}
export default Item;