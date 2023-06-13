"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";
import IconArrowUpRightSquareFill from '@/components/icons/arrow';
import IconJavascript from '@/components/icons/javaScript';
import Gradiente from '@/components/icons/gradiente';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Projetos(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);
  
  const nome = 'Projeto em JavaScript';

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Header openSaidebarClick={openSaidebar}/>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
    
    <Footer />
    </div>
  )
}