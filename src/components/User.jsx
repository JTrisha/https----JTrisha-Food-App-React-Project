import React from 'react'
import { useState } from 'react';
export default function User({name}) {

    const[count]=useState(0);
    const[count2]=useState(2);
    useEffect=(()=>{

    },[])
  return (
    <div className='user-card'>
        <h1>count={count}</h1>
        <h2>count2={count2}</h2>
      <h1>Name:{name} </h1>
      <p>Location:{Location}</p>
    </div>
  )
}
