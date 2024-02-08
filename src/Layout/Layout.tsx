import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useMediaQuery } from 'react-responsive'

type LayoutProps = {
  children?: React.ReactNode;
};


export default function Layout({children}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen]=useState(false)
  const [update, setUpdate] = useState();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const openMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div >
      <div className=''>
        <div className=''>
          <Header openMenu={openMenu} />
        </div>
        <div className=' flex  ' > 

          {isMobile && !isMenuOpen || !isMobile? (<div className={!isMobile?'w-[15%]  h-[100%] z-10':'w-[30%] h-auto' }style={!isMobile?{height:'100vh'}:{height:"auto"}}>
            <Sidebar/>
          </div>):null}
        
          <div className='w-[100%] items-center ml-4 mr-4'>
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}
