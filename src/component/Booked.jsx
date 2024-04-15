import { useContext ,useEffect ,useState} from "react"
import { Mycontext } from "../context/Mycontext"

function Booked(){
    const {name}=useContext(Mycontext)
    const [g,h]=useState([])

    useEffect(() => {
        const cartindb = async () => {

            const items = { name: name }

            const response = await fetch('http://localhost:3000/buyfind', {
                method: 'POST',
                body: JSON.stringify(items),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone.at(0).booking)
            h(findedone.at(0).booking)
            
        }

        cartindb()

    }, [])

    var currenttime=new Date()
    var currentdate=currenttime.getDate()
    currenttime.setDate(currentdate+7)
    var deldate=currenttime.toLocaleDateString()
return(<>

<h1 className="flex justify-center translate-y-6">CART</h1>

{g.map((i) => (

    <div className="flex flex-row  h-[150px] w-[850px] bg-white ml-14 mb-2 translate-x-8 translate-y-10">
        <img className=" w-[180px]  bg-white hover:scale-105 rounded-xl" src={i.image} alt="" />

        <div className=" w-[400px] bg-yellow-100 rounded-2xl">
            <h2 className="text-xl translate-x-[40%] mt-2">{i.name}</h2>
            <span className="relative left-36 text-xl top-[-10px]">{i.category}-{i.company}</span>
            <div className="flex flex-row gap-3 translate-x-14 translate-y-[-20px] text-[18px] mt-3">
                <span className="line-through">Rs.{i.price + i.price * 0.3}</span>
                <span className="">30% OFF</span>
                <span className=" font-medium text-2xl">Rs. {i.price}</span>
            </div>
            
            <div className='text-xl font-bold translate-x-24'>
                Delivery on {deldate}
            </div>
           
        </div>

    </div>
))}
</>)
    

}
export default Booked
