import DrinkList from '@/components/DrinkList'
import React from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks=async()=>{
await new Promise((resolve)=>setTimeout(resolve,1000))

    const response=await fetch(url)
    if(!response.ok){
      throw new Error('failed to fetch Drinks')
    }
  const data=await response.json()
  return data
}

const DrinkPage = async () => {
 
  const data=await fetchDrinks()
  console.log(data)
  return (
    <div>
      <DrinkList drinks={data.drinks}/>
    </div>
  )
}

export default DrinkPage
