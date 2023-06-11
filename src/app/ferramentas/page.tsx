"use client"
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Ferramentas(){
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