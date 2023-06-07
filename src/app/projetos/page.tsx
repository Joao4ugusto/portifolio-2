"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";
import IconArrowUpRightSquareFill from '@/components/icons/arrow';

export default function Principal(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);
  
  const nome = 'React';

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
       <div className='mx-4 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[550px] xl:mx-[310px] md:absolute'>
        <h1 className=' text-white text-2xl font-semibold'>Projetos</h1>
        <div className=' mt-10 xl:w-[550px] xl:h-[240px] hover:bg-color-black-sidebar/50 w-full bg-color-black-sidebar border border-stone-800 rounded'>
          <h1 className=' justify-center items-center text-center'>ooi</h1>
          <div className='border-t mt-36 border-stone-800 p-3'>
            <div className=' flex justify-between items-center'>
             <h2 className=' text-center w-16 bg-black border rounded p-2 border-stone-800 cursor-pointer'>{nome}</h2>
             <div className=' cursor-pointer'>
              <IconArrowUpRightSquareFill width={28} height={28} />
             </div>
            </div>
         </div>
        </div>
       </div>
    </div>
  )
}