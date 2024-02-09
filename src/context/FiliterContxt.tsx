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
 interface ErrorAlertsProps{
  status:number
  error:string

}

export const FilterContext = createContext<{
  filterData: IData[], filterError: ErrorAlertsProps[], setFilterData: (arg:IData[]) => void, ref:any , isLoading: boolean,
  filter:string, setFilter: (arg:string) => void

} | null >(null)

export const FilterContextProvider: React.FC<FilterContextProviderProps> =({children})=>{
  const [filterData, setFilterData]=useState<IData[]>()
  const [filter,setFilter] = useState('')
  const [filterError, setFilterError]=useState<ErrorAlertsProps[]>([])
  const { ref, data,errorData, isLoading } =  useBooks(filter)
  return (
   
      <FilterContext.Provider value={{filterData:data ?? [],  setFilterData, filterError: errorData ?? [], ref, isLoading, filter,setFilter}}>
              {children} 
      </FilterContext.Provider>

  );
};


// ErrorHandler : HOC
// show spinner on data loading
