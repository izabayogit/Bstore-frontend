import React,{useEffect,useState, useContext} from 'react'
import Card from "../components/Card"
import axios from "axios"
import { FilterContext } from '../context/FiliterContxt'

interface data  {
  id: Number,
   authorId: Number,
   coverImage: string,
   price: Number,
   createdAt: String,
   tag: String,
   title: String,
   writer: String,
   updatedAt: string,
 }
export default function Home(){

const context = useContext(FilterContext)

useEffect(() => {
  console.log("Data in home component")
},[])


  if(!context) {
    throw new Error('No context')
  }

  const { filterData, callFilters, setFilterData , ref} = context;

  


  
 
  
  return (
    <div className=' static items-center md:ml-5 md:mr-5 lg:ml-5 lg:mr-5 grid sm:grid-cols-1 gap-4  md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
     {
      filterData.map((book, idx, arr)=>{
       return  (
          <div ref={
            arr.length - 5 === idx ? ref: null
          } key={book.id}><Card book={book}/></div>
        )
      })
     }
        
          
  
  
    </div>
  )
}
