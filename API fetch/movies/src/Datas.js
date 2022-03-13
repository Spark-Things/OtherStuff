import {React,useState,useEffect} from 'react';
import axios from 'axios';
function Datas() {
       const[disp,setDisp] = useState([]);
 useEffect(()=>{
        axios.get('https://covid-api.mmediagroup.fr/v1/cases')
       .then(res =>{
         console.log(res);
         setDisp(res.data);
       })
       .catch(err =>{
         console.log(err);
       })},[])
  return(
    <>
      <h1>Site Loaded</h1>
      <ul>  
        {
         disp.map( (post)=> <li><h2>{post}</h2>
                                </li>)
          }
          </ul>
    </>
  );
}

export default Datas;