"use client"
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Ferramentas(){
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