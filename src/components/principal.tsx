import IconEmail from "./icons/Email";
import IconBxlCss3 from "./icons/css";
import IconJavascript from "./icons/javaScript";
import IconReact from "./icons/react";
import IconBxlTailwindCss from "./icons/taiwind";

export default function Principal(){
  return (
    <div className="mx-3 my-52 md:mx-96 md:my-14 lg:mx-96 xl:mx-96 md:absolute md:z-40">
     <h1 className=" text-slate-200 text-lg font-medium">OLÁ, EU SOU O <br/>
         <span className=" text-white font-semibold text-5xl ">João <span className=" font-bold bg-gradient-to-br from-pink-600 to-orange-500 text-transparent bg-clip-text">Augusto..</span></span></h1>
      <h3 className=" mt-2 text-lg font-light">Desenvolvedor de Software | Estudante <br/> de Ciências da Computação.</h3>
      <div className=" mt-5 w-full bg-color-black-sidebar border border-stone-800 p-3">
      <h4 className=" underline text-base">Quem eu sou?</h4>
      <p className=" font-light mt-5 leading-8 ">Sou um Desenvolvedor especializado em HTML, CSS, JavaScript e TypeScript, com conhecimento em ReactJS, NextJS, Tailwind CSS. Também possuo habilidades avançadas em Java e Spring para o desenvolvimento do backend.
        Com paixão pela inovação, crio experiências cativantes e humanas, buscando sempre aprender novas tecnologias para fornecer soluções criativas e eficientes. Meu objetivo principal é proporcionar uma experiência excepcional ao usuário, em qualquer dispositivo.</p>
      </div>
      <div className=" flex my-5 gap-5">
      <div className=" p-2 bg-color-black-sidebar border rounded border-stone-800 text-center">Contato</div>
      <div className="flex p-2 bg-color-black-sidebar border rounded border-stone-800 text-center">
      <div className="flex items-center mr-2">
      <IconEmail width={18} />
      </div>
  <div className="flex items-center">
    E-mail
  </div>
       </div>
      </div>
      <h3 className=" mt-10 text-lg underline">Tecnologias</h3>
      <div className="flex mt-8 gap-6 w-full">
        <div className=" transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconReact width={24} height={24} /></div>
        <div className=" transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconJavascript width={24} height={24} /></div>
        <div className=" transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlCss3 width={24} height={24}  /></div>
        <div className=" transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlTailwindCss width={24} height={24} /></div>
      </div>
      {/* <div className="flex mt-4 gap-6 w-full">
        <div className=" p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconReact width={24} height={24} /></div>
        <div className=" p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconJavascript width={24} height={24} /></div>
        <div className=" p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlCss3 width={24} height={24}  /></div>
        <div className=" p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlTailwindCss width={24} height={24} /></div>
      </div> */}
    </div>
  )
}