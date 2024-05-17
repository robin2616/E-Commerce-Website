import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Mycontext } from "../context/Mycontext";
function Login() {
  const { addnameinmenu, adduserdata } = useContext(Mycontext)
  const [a, b] = useState();
  const [c, d] = useState()

  const loginform = async () => {

    const logindetail = { email: a }

    const response = await fetch('http://localhost:3000/log', {
      method: 'POST',
      body: JSON.stringify(logindetail),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json();



    if (data.at(0).password === c) {
      console.log(data.at(0))
      addnameinmenu(data.at(0).name)
      adduserdata(data)

    }
    else {
      console.log("no")
    }
  }

  return (<>
    <div className="h-[400px] w-[500px] bg-blue-100 rounded-xl border-black border-3 translate-x-[400px] translate-y-[20px]">

      <h1 className="text-4xl font-semibold fixed translate-x-[200px] translate-y-[17px] ">Log In</h1>

      <div className="flex flex-col gap-4 fixed top-24 left-[9%] w-[400px]">






        <div className="form-floating mb-3 ">
          <input value={a} onChange={(e) => {
            b(e.target.value);

          }} type="email" className="form-control" placeholder="Password" />
          <label htmlFor="floatingInput">Email</label>
        </div>


        <div className="form-floating mb-3">
          <input value={c} onChange={(e) => {
            d(e.target.value);

          }} type="text" className="form-control" placeholder="Password" />
          <label htmlFor="floatingInput">Password</label>
        </div>




        <button onClick={loginform} className="bg-green-500 text-2xl font-semibold p-1 rounded-md hover:border-black hover:border-2 hover:scale-105"

        >Log In</button>
      </div>
      <span className="fixed top-[350px] left-20 text-xl  ">Create a New account?</span>
      <a className="fixed top-[350px] left-[310px] text-xl no-underline " href="/sign">Sign Up</a>
    </div>


  </>)
}
export default Login;