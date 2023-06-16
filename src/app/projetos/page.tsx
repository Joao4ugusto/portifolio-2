"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";
import IconArrowUpRightSquareFill from '@/components/icons/arrow';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Projetos(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);
  
  const nome = 'Projeto em JavaScript';

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
       <section className="flex flex-col w-full">
       <Header openSaidebarClick={openSaidebar}/>
       <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
       </section>
      
       <div className=" mx-5 my-28 md:my-28 lg:my-14 md:mx-[55px] md:ml-[330px] lg:mx-[100px] lg:ml-[400px] xl:ml-[520px] xl:mx-[240px] 2xl:ml-[565px] 2xl:mx-[300px] md:absolute">
       <h1 className=" text-white font-semibold text-2xl">Projetos</h1>

       <div className=' mt-5 w-full sy:w-[540px] h-52 bg-color-black-sidebar border rounded border-stone-900'>
       <div className=' h-[65%]'>
        
       </div>
       <div className=' h-[35%] border-t border-stone-800 bg-black'>
         <div className=' flex m-4 justify-between items-center'>
            <div className=' bg-black p-2 border rounded border-stone-800 justify-center'>
              <h2 className=' font-normal'>Computação visual</h2>
            </div>
            <div>
              <IconArrowUpRightSquareFill width={26} height={26} />
            </div>
         </div>
       </div>
       </div>
       </div>
    
    <Footer />
    </div>
  )
}