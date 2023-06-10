import IconEmail from "./icons/Email";
import IconBxlCss3 from "./icons/css";
import IconLanguageHtml5 from "./icons/html";
import IconJavascript from "./icons/javaScript";
import IconBxlMongodb from "./icons/mongo";
import IconBxlPostgresql from "./icons/postgreSql";
import IconReact from "./icons/react";
import IconBxlSass from "./icons/scss";
import IconBxlSpringBoot from "./icons/spring";
import IconBxlTailwindCss from "./icons/taiwind";

export default function Principal(){
  return (
    <div className=" z-30 mx-5 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[530px] xl:mx-[310px] md:absolute">
      <h1 className=" text-5xl font-semibold">Desenvolvedor de Software..</h1>
      <div className="absolute right-16 top-[170px] text-cyan-500 rotating-icon animate-spin duration-400"><IconReact  width={38} height={38}/></div>
      <h3 className=" mt-3 text-lg font-light">Por meio de prática e aprendizado constantes, produzo software estético com um padrão extremamente alto.</h3>

      <div className=" flex my-5 gap-5">
      <div className=" cursor-pointer p-3 bg-color-gray/20 border rounded border-stone-700 text-center"><a href="">Contato</a></div>
      <div className="flex p-3 border rounded border-stone-700 text-center">
      <div className="flex items-center mr-2">
      <IconEmail width={18} />
      </div>
      <div className=" cursor-pointer flex items-center">
      <a href="mailto:joaoaugusto311016@gmail.com">E-mail</a>
      </div>
       </div>
      </div>

      <div className=" mt-8 w-full  bg-color-gray/20  border border-stone-600 rounded p-4">
      <h4 className="text-base">Quem eu sou?</h4>
      <p className=" font-light mt-5 leading-8 ">Sou um Desenvolvedor especializado em HTML, CSS, JavaScript e TypeScript, com conhecimento em ReactJS, NextJS, Tailwind CSS. Também possuo habilidades avançadas em Java e Spring para o desenvolvimento do backend.
        Com paixão pela inovação, crio experiências cativantes e humanas, buscando sempre aprender novas tecnologias para fornecer soluções criativas e eficientes. Meu objetivo principal é proporcionar uma experiência excepcional ao usuário, em qualquer dispositivo.</p>
      </div>
      
      <div className="flex flex-wrap mt-12 gap-y-4 gap-x-1 justify-between">
        <div className=" hover:text-cyan-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconReact  width={24} height={24} /></div>
        <div className=" hover:text-yellow-400 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconJavascript width={24} height={24} /></div>
        <div className=" hover:text-orange-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconLanguageHtml5 width={24} height={24} /></div>
        <div className=" hover:text-sky-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlCss3 width={24} height={24}  /></div>
        <div className=" hover:text-pink-400 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlSass  width={24} height={24} /></div>
        <div className=" hover:text-teal-600 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlTailwindCss  width={24} height={24} /></div>
        <div className=" hover:text-green-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlSpringBoot width={24} height={24} /></div>
        <div className=" hover:text-cyan-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlPostgresql width={24} height={24}  /></div>
        <div className=" hover:text-green-500 transition-transform duration-500 transform hover:-translate-y-3 p-5  w-16 h-16 bg-color-black-sidebar border border-stone-800 rounded"><IconBxlMongodb width={24} height={24} /></div>
      <div>
       </div>
      </div>
    </div>
  )
}