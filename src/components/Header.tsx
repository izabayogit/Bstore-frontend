import React, {useContext,useState}from 'react'
import MobileMenu from './MobileMenu'
import { useMediaQuery } from 'react-responsive';
import { FilterContext } from "../context/FiliterContxt"

type ButtonProps={
  openMenu:()=>void
}

export default function Header({openMenu}: ButtonProps) {

  const [search, setSearch] =useState<string>("")
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    const {target} = event
     setSearch(target.value)
   }
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const context = useContext(FilterContext)
  if (!context) {
    throw Error('No context')
  }

  const { setFilter } = context;
  const handleSearch = (event: React.KeyboardEvent)=>{
    if (event.key === 'Enter') {
      event.preventDefault();
      setFilter(`&search=${search}`);
      setSearch("")
    }
  }

  return (
    <div>
      <div className="flex ml-5 mr-5 ">
         <div className=' w-[30%] md:w-[40%] lg:w-[30%] flex '>
          {!isMobile?(<div className=' md:w-[30%] lg:block md:block lg:w-[30%] lg:pt-3 lg:pb-3 md:pt-4 md:pb-4 hover:cursor-pointer'>
            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
                  className='rounded-[50%] h-14 w-14 md:mr-20 lg:mr-10'
                />
                <p className='text-[#002147] font-bold md:text-sm lg:text-base ' > James Bolls</p>
          </div>):null}
           { isMobile? (<div className=' pt-4 pb-4 mr-4' onClick={openMenu} >
              <MobileMenu />
            </div>): null}
            <h2 className='text-[#002147] font-bold mr-8 text-xs md:text-base  lg:text-xl pt-6 pb-6 hover:cursor-pointer'> BStore</h2>
         </div>
         <div className='w-[60%] md:w-[40%] lg:w-[40%] pt-6 pb-6 '>
            
            <input onKeyDown={handleSearch}  onChange={handleChange} type="text" value={search} name="search" placeholder='Type Anything  to Search your book' className='outline-none h-6 md:h-10 lg:h-10 placeholder:text-xs placeholder:pl-4 focus:border-slate-200 border-slate-200 border-[1px] rounded w-[100%]'/>
         </div>
         <div className='w-[5%] ml-16 md:w-[20%] flex justify-end text-[#002147] font-bold pt-6 pb-6 text-xs md:text-base  lg:text-xl'>
            <div>
            <p className='hover:cursor-pointer mr-5'> Logout</p>
            </div>
           
         </div>
      </div>
    </div>
  )
}
