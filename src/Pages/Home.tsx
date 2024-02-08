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
const [data, setData]=useState<data[]>([]);

const{filterData, update}= useContext(FilterContext)


useEffect(() => {
  
    console.log("nnnnnnnnnnnnnnnnnnnnnn")

  
}, [update]);

  
  return (
    <div className=' static items-center md:ml-5 md:mr-5 lg:ml-5 lg:mr-5 grid sm:grid-cols-1 gap-4  md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
     {
      filterData.map((book)=>{
       return  (
          <div><Card book={book}/></div>
        )
      })
     }
        
          
  
  
    </div>
  )
}