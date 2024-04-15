import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


import img1 from '/src/assets/25.webp'
import img3 from '/src/assets/27.webp'
import img4 from '/src/assets/28.webp'
import img5 from '/src/assets/29.webp'
import { useState } from "react";

function Moving() {
    const imglist = [img1, img3, img4, img5]
    const [a, b] = useState(0);
    setInterval(() => {
        if (a === imglist.length - 1) { b(0) }
        else{b(a+1)}
    }, 1000);

    return (<>

        <div>

            <img src={imglist.at(a)} alt="no" onClick={() => { console.log("sxakjsx") }} />

            <span onClick={() => {
                if (a == imglist.length - 1) { b(0) }
                else { b(a + 1) }
            }
            } className="animation-spin relative top-[-110px] left-[1215px] text-2xl "><button><FaArrowRight /></button></span>
            <span onClick={() => {
                if (a == 0) { b(imglist.length - 1) }
                else { b(a - 1) }
            }} className="relative top-[-110px] left-[-10px] text-2xl"><button><FaArrowLeft /></button></span>
        </div>
    </>)
}
export default Moving