import {React,useEffect,useState} from 'react';
import axios from 'axios';

function Data2() {
   const[show,setShow] = useState([]);
   useEffect(()=>{
    axios.get('https://covid-api.mmediagroup.fr/v1/cases')
    .then(res =>{
      console.log(res);
      setShow(res.data);
      console.log(res.data.India.Gujarat);
    })
    .catch(err =>{
      console.log(err);
    })
   },[])
  return(<>
       <h1>Site Loaded</h1>
       <ul>
       {
          show.map(posts =><li>{posts.India.Gujarat}</li>)
       }
       </ul>
       {/* <h1>{show.India.Gujarat}</h1> */}
  </>);
}

export default Data2;
