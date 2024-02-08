import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios"
import React from "react";

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
  filterData: IData[], callFilters: (arg:string) => void, setFilterData: (arg:IData[]) => void

} | null >(null)

export const FilterContextProvider: React.FC<FilterContextProviderProps> =({children})=>{
  const [filterData, setFilterData]=useState<IData[]>([])
  

  const callFilters = async (filter: string) => {
    const { data } = await axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/book', {
      params:{tag: filter}
    })

    setFilterData(data)

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
   
      <FilterContext.Provider value={{filterData, callFilters, setFilterData }}>
              {children}
      </FilterContext.Provider>

  );
};

