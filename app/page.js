import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
    <h1 className='mb-8 font-bold text-6xl'>Next Js Tutorial</h1>
      <Link className='btn btn-accent' href="/client">Go to Client</Link>
    </div>
  )
}

export default Homepage
