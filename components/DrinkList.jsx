
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DrinkList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {/* console.log(drinks) */}
      {drinks.map((item) => {
        return (
          <li key={item.idDrink}>
            <Link
              href={`/drinks/${item.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={item.strDrinkThumb}
                  // loader={() => src} 
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
                  alt={item.strDrink}
                  className="rounded-md object-cover "
                />
              </div>

              {item.strDrink}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DrinkList
