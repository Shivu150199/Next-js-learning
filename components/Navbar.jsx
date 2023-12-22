import Link from 'next/link'
import React from 'react'


const links=[
  {
    href:'/client',
    label:'client'
  },
  {
    href:'/drink',
    label:'drink'
  },
  {
    href:'/tasks',
    label:'tasks'
  },
  {
    href:'/query',
    label:'query'
  },
]

const Navbar = () => {
  return (
    <nav className='bg-base-300 py-4'>
      <div className='navabr px-8 flex align-items-center  max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
   Next js
        </Link>
        <ul className='menu menu-horizontal md:ml-6'>
        {
          links.map((item)=>{
            return (
                <li key={item.href}>
                  {' '}
                  <Link href={item.href} className='capitalize'>{item.label}</Link>{' '}
                </li>
                
            )
          })
        }
        </ul>
       
      </div>
    </nav>
  )
}

export default Navbar
