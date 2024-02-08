import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios"
import React from "react";
const forceUpdate = React.useCallback(() => updateState({}), []);

type FilterContextProviderProps ={
  children: React.ReactNode
}
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
export const FilterContext = createContext(null)

export const FilterContextProvider =({children}: FilterContextProviderProps)=>{
  const [filterData, setFilterData]=useState<data[]>([])
  const [newData, setNewData]=useState<data[]>([])
  const [update, setUpdate] =useState<boolean>(false)
  
  useEffect(() => {
    console.log(filterData,"wwwwwwwwwww")
    axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/books')
    .then(response => {
      setFilterData(response.data)
    })
    .catch(error => {
      console.error(error,"....................");
    });
  }, []);

  useEffect(() => {
 console.log(update, "updatexxxxxxxxxxxxxxx")
 console.log(filterData,";;;;;;;;;;;;;;;;;;;")
 forceUpdate()
  }, [update]);

  
  const callFilters = async (filter: string) => {
    
    await axios.get('https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/book', {
      params:{tag: filter}
    })
    .then((response: object) => {
      console.log("hallooooooo")
      setFilterData(response.data);
      setUpdate(!update)
    
    }, (error) => {
      console.log(error);
    });
    console.log(filterData)
  };

  return (
   
      <FilterContext.Provider value={{filterData, callFilters, setFilterData }}>
              {children}
      </FilterContext.Provider>

  );
};

