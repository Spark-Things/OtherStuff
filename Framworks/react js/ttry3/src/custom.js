import React, { useState } from 'react'
function useCounter() {
  const[ count, setCount] = useState(0);
  const handleicrement = () =>{
    setCount(count+1);
  }
  return{
    count,
    handleicrement
  }
  
}
export default useCounter;