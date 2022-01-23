import React, { useState, useEffect } from 'react'
import useCounter from './custom'
function App(){
 const Sv = useState("rahul");
 const [ count, setCount ] = useState(1);
 const data = useCounter();
 const hac = () =>{
   Sv[1]("dilu");
 }
 const incremet = () =>{
   setCount(count +1); 
 }
 useEffect(()=>{
   console.log("use effect called")
 }, [count]);
 return (<>
    <h1>{Sv[0]}</h1>
    <button onClick={hac}>Chnage</button>
    <h1> you have clicked : {count} times</h1>
    <button onClick={incremet}>CLICK </button>
    <h2> second btn clicked {data.count}</h2>
    <button onClick={data.handleicrement}>sec</button>
 </>);

}
export default App;