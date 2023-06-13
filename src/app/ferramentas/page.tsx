"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import IconBxlPostgresql from "@/components/icons/postgreSql";
import IconBxlTailwindCss from "@/components/icons/taiwind";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Ferramentas(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);

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
        <h1 className=" text-white font-semibold text-2xl">Ferramentas</h1>
        <div className=" flex flex-wrap gap-4 mt-5">

          <div className=" hover:bg-color-black-sidebar rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-black border rounded border-stone-900"><IconBxlTailwindCss className=" text-cyan-700" width={24} height={24} /></div>
           <div>
            <h1 className=" font-semibold">Taiwind css</h1>
            <p className=" text-sm text-gray-300">Software para criação de design</p>
           </div>
          </div> 

          <div className=" hover:bg-color-black-sidebar rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-black border rounded border-stone-900"><IconBxlTailwindCss className=" text-cyan-700" width={24} height={24} /></div>
           <div>
            <h1 className=" font-semibold">Taiwind css</h1>
            <p className=" text-sm text-gray-300">Software para criação de design</p>
           </div>
          </div> 

           <div className=" hover:bg-color-black-sidebar rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-black border rounded border-stone-900"><IconBxlTailwindCss className=" text-cyan-700" width={24} height={24} /></div>
           <div>
            <h1 className=" font-semibold">Taiwind css</h1>
            <p className=" text-sm text-gray-300">Software para criação de design</p>
           </div>
          </div> 

        </div>
      </div>
      <Footer />
    </div>
  )
}