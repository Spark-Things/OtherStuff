import {React,useEffect,useState} from 'react';
import  axios  from 'axios';

function Apifetching() {
  const[posts,setPosts] = useState([]);
  useEffect(() =>{
    axios.get('https://api.publicapis.org/entries')
    .then(res =>{
      console.log(res);
      setPosts(res.data.entries);
      // setPosts(res.data);
    })
    .catch(err =>{
      console.error(err);
    })
    },[])
  return (<div>
           <h1>Site Loaded</h1>
         <ul>  
        {
         posts.map( (post)=> <li><h2>{post.API}</h2>
                                 <div>{post.Link}</div></li>)
          }
          </ul>
  </div>)
}

export default Apifetching;
