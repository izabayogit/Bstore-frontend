import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios"
import React from "react";
import  { useInView } from 'react-intersection-observer'
import useSWRInfinite from 'swr/infinite'
import useBooks from '../hooks/useBooks'

type FilterContextProviderProps ={
  children: React.ReactNode
}
interface IData  {
  id: number,
   authorId: number,
   coverImage: string,
   price: number,
   createdAt: string,
   tag: string,
   title: string,
   writer: string,
   updatedAt: string,
 }

export const FilterContext = createContext<{
  filterData: IData[], callFilters: (arg:string) => void, setFilterData: (arg:IData[]) => void, ref:any , 
  filter:string, setFilter: (arg:string) => void

} | null >(null)

export const FilterContextProvider: React.FC<FilterContextProviderProps> =({children})=>{
  const [filterData, setFilterData]=useState<IData[]>([])
  const [filter,setFilter] = useState('')
  

  const { ref, data } =  useBooks(filter)




  const callFilters = async (filter: string) => {
    if(filter === "All Categories"){
      const { data }= await axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/books')
      setFilterData(data)
  }else{
    const { data } = await axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/book', {
      params:{tag: filter}
    })
    setFilterData(data)
  }
  };

  useEffect(() => {
    (async () => {
     try {
      const { data }= await axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/books')
      setFilterData(data)
     } catch (error) {
      console.log(error)
     }
    })()
  }, []);



  return (
   
      <FilterContext.Provider value={{filterData:data ?? [], callFilters, setFilterData  , ref, filter,setFilter}}>
              {children} 
      </FilterContext.Provider>

  );
};


// ErrorHandler : HOC
// show spinner on data loading
