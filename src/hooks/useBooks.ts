import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useBooks(
filter?:string
) {
  const getKey: (
    ...base: Parameters<SWRInfiniteKeyLoader>
  ) => ReturnType<SWRInfiniteKeyLoader> = (pageIndex, prevPageData) => {

    if (prevPageData && !prevPageData.length) {
      return null
    }else if(filter==="&tag=All Categories"){
      return `https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/books?pageNumber=${pageIndex+1}&pageSize=10`
    }

    return `https://bstorebackend-2bbe1f9d2f75.herokuapp.com/api/books?pageNumber=${pageIndex+1}&pageSize=10${filter}`
  }

  const { ref, inView } = useInView()

  const { data, setSize, isValidating, isLoading } = useSWRInfinite(
    getKey,
    fetcher, {
        revalidateOnMount: true,
        fallbackData: [],
        revalidateFirstPage: false,
    }
  )

  useEffect(() => {
    if (inView) {
      setSize((prevSize) => prevSize + 1)
    }
  }, [inView])
  console.log(isLoading,"kkkkkkkkkkkkkkkkkkkkkkkk")
  if(data?.length && data[0].error){
    return{
      errorData: data?.flatMap(item => item) ,
      isLoading,
      ref,
    }
  
  }else{
    return {
      data: data?.flatMap(item => item) ,
      isLoading,
      ref,
    }
  } 
 
}

// HOC: 
