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
      
       <div className=" mx-5 my-28 md:my-28 lg:my-14 md:mx-[55px] md:ml-[300px] mf:ml-[315px] lg:mx-[100px] lg:ml-[400px] xl:ml-[520px] xl:mx-[240px] 2xl:ml-[565px] 2xl:mx-[300px] md:absolute">
       <h1 className=" text-white font-semibold text-2xl">Blog</h1>

       <div className=' mt-5 w-full mf:w-[450px] md:w-[430px] sy:w-[540px] h-52 bg-color-black-sidebar border rounded border-stone-900'>
      
      
       </div>
       </div>
    
    <Footer />
    </div>
  )
}