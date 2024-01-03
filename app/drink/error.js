'use client'

import React from 'react'

const error = (error) => {
    console.log(error)
  return (
    <div>
        {/* <h1>There was an error...............</h1> */}
        <h1>{error.error.message}</h1>
    </div>
  )
}

export default error
