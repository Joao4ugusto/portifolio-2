"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";

export default function Principal(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
       <div className='mx-4 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[550px] xl:mx-[310px] md:absolute'>
        <h1 className=' text-white text-2xl font-semibold'>Projetos</h1>
        <div className=' mt-10 xl:w-[500px] xl:h-[250px] hover:bg-color-black-sidebar/50 w-full bg-color-black-sidebar border border-stone-800 rounded'>
         <div className='border-t mt-36 border-stone-800 p-3'>
         <div>
          <h2>Titulo</h2>
          
         </div>
         </div>
        </div>
       </div>
    </div>
  )
}