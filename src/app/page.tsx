"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Principal from "@/components/principal";
import Sidebar from "@/components/sidebar";
import {useState} from 'react'

export default function Page() {
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)

  return (
     <main className="flex min-h-screen">
       <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
       </Sidebar>
       <section className="flex flex-col w-full">
        <Header openSaidebarClick={openSaidebar}/>
       <Principal />
       </section>
       <Footer />
     </main>
  );
}
