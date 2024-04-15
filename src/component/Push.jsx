function Push(){
    const x="abc"
    return(<>
         <button onClick={async()=>{
             
             const response = await fetch('http://localhost:3000/push',{
                method: 'POST',
                body: JSON.stringify(detail),
                headers: {'Content-Type': 'application/json'}
            })




             
         }}>dsgyugsdyug</button>  
    </>)
}


export default Push;