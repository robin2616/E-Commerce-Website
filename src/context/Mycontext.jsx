import { createContext, useState } from "react";
import { useEffect } from "react";



const Mycontext = createContext();

function Cartingsystem({ children }) {

  ////////////////////////////////////////////////////////
  const [buy, editbuy] = useState(() => {
    const b = localStorage.getItem('buyingitem');
    return b ? JSON.parse(b) : "";
  });

  function addbuyingitem(u) {
    editbuy(u)
  }

  useEffect(() => {
    localStorage.setItem('buyingitem', JSON.stringify(buy));
  }, [buy]);


  /////////////////////////////////////////////////////////////

  const [name, editname] = useState(() => {
    const y = localStorage.getItem('naming');
    return y ? JSON.parse(y) : "Login";

  });

  function addnameinmenu(name) {
    editname(name)
  }
  useEffect(() => {
    localStorage.setItem('naming', JSON.stringify(name));
  }, [name]);

  //////////////////////////////////////////////////////////////

  const [detail, adddetail] = useState(() => {
    const z = localStorage.getItem('userdata');
    return z ? JSON.parse(z) : "";
  })

  function adduserdata(data) {
    adddetail(data)
  }

  useEffect(() => {
    localStorage.setItem('userdata', JSON.stringify(detail));
  }, [detail]);

  /////////////////////////////////////////////////////////////////

  const [noofcart, editcartno] = useState(() => {
    const n = localStorage.getItem('noofcarti');
    return n ? JSON.parse(n) : 0;
  })

  function addnoofcart(h) {
    editcartno(h)
  }
  useEffect(() => {
    localStorage.setItem('noofcarti', JSON.stringify(noofcart));
  }, [noofcart]);

  ////////////////////////////////////////////////////////////////////////////


  const [xuv, updxuv] = useState(() => {
    const uv = localStorage.getItem('xuvlist');
    return uv ? JSON.parse(uv) : "";
  })

  function addinxuv(v) {
    updxuv(v)
  }

  useEffect(() => {
    localStorage.setItem('xuvlist', JSON.stringify(xuv));
  }, [xuv]);


  //////////////////////////////////////////////////////////////////////


  return (<>
    <Mycontext.Provider value={{ buy, addbuyingitem, name, addnameinmenu, detail, adduserdata, noofcart, addnoofcart, xuv, addinxuv }}>
      {children}
    </Mycontext.Provider>

  </>)
}

export { Cartingsystem, Mycontext }