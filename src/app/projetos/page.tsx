"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";
import IconArrowUpRightSquareFill from '@/components/icons/arrow';
import IconJavascript from '@/components/icons/javaScript';
import Gradiente from '@/components/icons/gradiente';
import Header from '@/components/header';

export default function Principal(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);
  
  const nome = 'Projeto em JavaScript';

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Header openSaidebarClick={openSaidebar}/>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
      <div className=" mx-4 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[570px] xl:mx-[310px] md:absolute">
          <h1 className="text-white text-2xl font-semibold">Projetos</h1>

          <div className=' mb-5 hover:bg-color-black-sidebar/50 mt-10 bg-color-black-sidebar w-[560px] h-60 border rounded border-stone-800'>
          <div className=' flex h-[70%] justify-center items-center center'>
            <Gradiente />
          </div>
          <div className=' justify-between flex border-t border-stone-800 p-3'>
            <div className=' flex gap-2'>
              <div className='p-2 bg-black border rounded border-stone-800 inline-block'>
                <h1>{nome}</h1>
              </div>
              <div className=' p-2 bg-black border rounded border-stone-800 inline-block'>
                <IconJavascript width={28} height={28} />
              </div>
            </div>
            <div className=' flex items-center'>
              <IconArrowUpRightSquareFill width={30} height={30} />
            </div>
          </div>
          </div>

          <div className=' mb-5 hover:bg-color-black-sidebar/50  bg-color-black-sidebar w-[560px] h-60 border rounded border-stone-800'>
          <div className=' flex h-[70%] justify-center items-center center'>
            <Gradiente />
          </div>
          <div className=' justify-between flex border-t border-stone-800 p-3'>
            <div className=' flex gap-2'>
              <div className='p-2 bg-black border rounded border-stone-800 inline-block'>
                <h1>{nome}</h1>
              </div>
              <div className=' p-2 bg-black border rounded border-stone-800 inline-block'>
                <IconJavascript width={28} height={28} />
              </div>
            </div>
            <div className=' flex items-center'>
              <IconArrowUpRightSquareFill width={30} height={30} />
            </div>
          </div>
          </div>

          <div className=' mb-5 hover:bg-color-black-sidebar/50  bg-color-black-sidebar w-[560px] h-60 border rounded border-stone-800'>
          <div className=' flex h-[70%] justify-center items-center center'>
            <Gradiente />
          </div>
          <div className=' justify-between flex border-t border-stone-800 p-3'>
            <div className=' flex gap-2'>
              <div className='p-2 bg-black border rounded border-stone-800 inline-block'>
                <h1>{nome}</h1>
              </div>
              <div className=' p-2 bg-black border rounded border-stone-800 inline-block'>
                <IconJavascript width={28} height={28} />
              </div>
            </div>
            <div className=' flex items-center'>
              <IconArrowUpRightSquareFill width={30} height={30} />
            </div>
          </div>
          </div>

        </div>
    </div>
  )
}