import { createContext, useState } from "react";

const Myuser=createContext();

function Userdetails({children}){
       const[name,username]=useState("");

       const changename=(idname)=>{
        username(idname)
       }

return(<>
<Myuser.Provider value={{name,changename}}>
    {children}
</Myuser.Provider>

</>)
}

export {Myuser,Userdetails}