"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";
import Header from '@/components/header';

export default function Blog(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Header openSaidebarClick={openSaidebar}/>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
    </div>
  )
}