import React from 'react';
import "./style.css";

const useState = () => {
        const initialData=10;
        const[myNum, setmyNum] =React.useState(initialData);
        console.log(myNum);
  return (
    <>
    <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={()=> setmyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button2" onClick={()=>myNum >0 ?setmyNum(myNum-1): setmyNum(0)}>
        <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default useState
