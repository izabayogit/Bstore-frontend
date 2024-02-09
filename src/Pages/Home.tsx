import React,{useEffect,useState, useContext} from 'react'
import Card from "../components/Card"
import axios from "axios"
import { FilterContext } from '../context/FiliterContxt'
import ErrorAlerts from '../components/ErrorAlerts'
import Loading from '../components/Loading'

export default function Home(){

const context = useContext(FilterContext)

useEffect(() => {
  console.log("Data in home component")
},[])


  if(!context) {
    throw new Error('No context')
  }

  const { filterData,filterError,  setFilterData , ref, isLoading} = context;
  
  return (
    <div>
            { !filterData.length && !filterError.length?(
            <div className='flex justify-center mt-[20%]'> <Loading/></div>
            ): (<div>

            
              {filterError.length ?(filterError.map((data)=>{
              return ( <ErrorAlerts filterError ={data}/>)
              })):(
                <div className=' static items-center md:ml-5 md:mr-5 lg:ml-5 lg:mr-5 grid sm:grid-cols-1 gap-4  md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
                {
                  filterData.map((book, idx, arr)=>{
                  return  (
                      <div ref={
                        arr.length - 5 === idx ? ref: null
                      } key={book.id}><Card book={book} isLoading={isLoading}/></div>
                    )
                  })
                }
              
            </div>
            )}
          </div>)}
    </div>
  )
}
