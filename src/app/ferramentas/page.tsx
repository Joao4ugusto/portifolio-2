"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Borboleta from "@/components/icons/borboleta";
import Figma from "@/components/icons/figma1";
import Icons from "@/components/icons/icons";
import IconJavascript from "@/components/icons/javaScript";
import IconBxlPostgresql from "@/components/icons/postgreSql";
import IconReact from "@/components/icons/react";
import IconBxlSass from "@/components/icons/scss";
import Svg from "@/components/icons/svg";
import IconBxlTailwindCss from "@/components/icons/taiwind";
import Typescript from "@/components/icons/typescript";
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
      <div className=" mx-5 my-28 md:my-28 lg:my-14 md:mx-[55px] md:ml-[330px] lg:ml-[312px] xl:ml-[480px] 2xl:ml-[565px] 2xl:mx-[300px] md:absolute">
        <h1 className=" text-white font-semibold text-2xl">Ferramentas</h1>
        <div className=" flex flex-wrap gap-4 mt-5">
          
          <a href="https://www.figma.com/signup">
          <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><Figma /></div>
           <div>
            <h1 className=" font-semibold">Figma</h1>
            <p className=" text-sm text-gray-300">Software para Prototipagem</p>
           </div>
          </div> 
          </a>
          
          <a href="https://reactsvgicons.com/">
          <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><Borboleta /></div>
           <div>
            <h1 className=" font-semibold">React Devicons</h1>
            <p className=" text-sm text-gray-300">Biblioteca de componentes</p>
           </div>
          </div> 
          </a>
          
          <a href="https://iconscout.com/">
           <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><Icons /></div>
           <div>
            <h1 className=" font-semibold">Iconscout</h1>
            <p className=" text-sm text-gray-300">Biblioteca de icones</p>
           </div>
          </div>
          </a>

          <a href="https://www.svgshapes.in/">
           <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
           <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><Svg /></div>
           <div>
            <h1 className=" font-semibold">Svg Shapes</h1>
            <p className=" text-sm text-gray-300">Biblioteca de Svg Shapes</p>
           </div>
          </div>
          </a>

        </div>
        <h1 className=" mt-8 text-white font-semibold text-2xl">Tecnologias</h1>
        <div className=" flex flex-wrap gap-4 mt-5">

          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
            <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
            <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><IconJavascript width={28} height={28} className=" text-amber-500" /></div>
            <div>
            <h1 className=" font-semibold">JavaScript</h1>
            <p className=" text-sm text-gray-300">Documentação</p>
            </div>
            </div> 
          </a>

          <a href="https://www.typescriptlang.org/pt/docs/">
            <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
            <div className=" p-3 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><Typescript /></div>
            <div>
            <h1 className=" font-semibold">Typescript</h1>
            <p className=" text-sm text-gray-300">Documentação</p>
            </div>
            </div> 
          </a>

          <a href="https://react.dev/">
            <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
            <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><IconReact width={28} height={28}  className=" text-cyan-500"/></div>
            <div>
            <h1 className=" font-semibold">React Js</h1>
            <p className=" text-sm text-gray-300">Documentação</p>
            </div>
            </div> 
          </a>

          <a href="https://sass-lang.com/">
            <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
            <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><IconBxlSass width={28} height={28}  className=" text-rose-400"/></div>
            <div>
            <h1 className=" font-semibold">Sass</h1>
            <p className=" text-sm text-gray-300">Documentação</p>
            </div>
            </div> 
          </a>

          <a href="https://tailwindcss.com/">
            <div className=" hover:bg-color-black-sidebar md:hover:bg-color-black-sidebar-2 rounded w-80 h-16  p-2 flex gap-3">
            <div className=" p-2.5 items-center justify-center text-center w-12 h-12 bg-color-black-sidebar border rounded border-stone-900"><IconBxlTailwindCss width={28} height={28}  className=" text-cyan-500"/></div>
            <div>
            <h1 className=" font-semibold">Tailwind css</h1>
            <p className=" text-sm text-gray-300">Documentação</p>
            </div>
            </div> 
          </a>

        </div>
      </div>
      <Footer />
    </div>
  )
}