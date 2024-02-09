import React, { useState, useContext } from 'react'
import { FilterContext } from "../context/FiliterContxt"

const categories = ["All Categories", "Fiction", "Non-Fiction", "Essay", "Science","Science-Fiction", "Fantasy","Mystery"]
export default function Sidebar() {
  const [tabIndex, setTabIndex] = useState<number>(0)

  const setTab = (index: number) => {
    setTabIndex(index)
  }

  const context = useContext(FilterContext)

  if (!context) {
    throw Error('No context')
  }

  const { setFilter } = context;


  return (
    <div className='ml-3'>
      <div>
      <ul >
        {categories.map((category, index) => {
          return (
              <li key={category} className={tabIndex === index ? 'text-[#211922] font-normal pl-2 text-lg mt-3 mb-3 hover:bg-[#e5ffe5	] bg-[#e5ffe5] rounded pt-2 pb-2 hover:cursor-pointer' : 'text-[#211922] pl-2 rounded font-normal text-lg mt-3 mb-3 bg-[#fff] hover:bg-[#f7f7f7] pt-2 pb-2 hover:cursor-pointer'}
                onClick={() => { 
                setTab(index); 
                setFilter(`&tag=${category}`)
                }}>
                {category}
              </li>
          )
        })}
             </ul>
      </div>
    </div>
  )
}
