'use client'
import React, { useState } from 'react'

const ClientPage = () => {
  const [count,setCount]=useState(0)
  const handleCount=()=>{
    setCount(count+1)
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <div>
    <h1 className='text-7xl mb-6'>{count}</h1>
    <button className='btn btn-warning hover:btn-accent' onClick={handleCount}>Count</button>
    <button className='btn btn-warning hover:btn-accent' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ClientPage




