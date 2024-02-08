import React,{useState, useContext} from 'react'
import{FilterContext } from "../context/FiliterContxt"

const categories =["All Categories ","Fiction", "Non-Fiction","Essay", "New Release"]
export default function Sidebar() {
  const [tabIndex, setTabIndex] =useState<number>(0)
  const setTab=(index:number)=>{
setTabIndex(index)
  }

  const {callFilters} = useContext(FilterContext)
  const filter =(data:string)=>{
callFilters(data)
  }

  return (
    <div className='ml-3'>
        <div>
          {categories.map((category,index)=>{
            return (
              <ul key={index}>
                <li  className={tabIndex=== index?'text-[#211922] font-normal pl-2 text-lg mt-4 mb-4 hover:bg-[#e5ffe5	] bg-[#e5ffe5] rounded pt-2 pb-2 hover:cursor-pointer' :'text-[#211922] pl-2 rounded font-normal text-lg mt-4 mb-4 bg-[#fff] hover:bg-[#f7f7f7] pt-2 pb-2 hover:cursor-pointer'}onClick={()=>{setTab(index); callFilters(category)}}>
                  {category}
                </li>
              </ul>
            )
          }) }
        </div>
    </div>
  )
}
