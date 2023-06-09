"use client"
import {useState} from 'react'
import Sidebar from "@/components/sidebar";

export default function Blog(){
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)
  return(
    <div>
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
    </div>
  )
}