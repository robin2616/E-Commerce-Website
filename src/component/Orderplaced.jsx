function Orderplaced({a,buy}){

  var currenttime=new Date()
var currentdate=currenttime.getDate()
currenttime.setDate(currentdate+7)
var deldate=currenttime.toLocaleDateString()
    return(<>

    <div className="w-[100%] h-[700px] inset-0 fixed top-0 bg-blue-100 ">
  
  <div className=" flex flex-col drop-shadow-2xl h-[300px] w-[500px] bg-yellow-100 border-black border-3 rounded-2xl fixed left-[30%] top-[20%]">
    
    <span className="text-3xl font-semibold relative left-[60px] top-8"> {a} quantity of {buy.name}
    <br/> ordered Placed</span>
    <span className="text-3xl font-semibold relative left-[120px] top-24">Delivery on {deldate}</span>
    <button className="bg-pink-200 p-2 block relative top-[100px] text-3xl font-semibold" onClick={()=>{window.open("/","_self")}}>Back to Home</button>



  </div>
    </div>
    </>)
}



export default Orderplaced;