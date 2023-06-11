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
    <div className=" z-30 mx-5 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[580px] xl:mx-[315px] 2xl:ml-[620px]  2xl:mx-[350px] md:absolute">
      <div className=" flex items-center gap-3">
         <h1 className=" text-[46px] text-5xl font-semibold">João <span className=" text-roxo">  Augusto </span></h1>
         <div className="">
          <IconReact style={{ animationDuration: 's', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} width={32} height={32} className="text-cyan-500 flex animate-spin" />
         </div>
      </div>
      <h3 className=" text-white mt-3 text-lg font-light">Desenvolvedor de software | Estudante de <br/> Ciências da Computação</h3>
      <h3 className=" lg:w-[380px] flex-wrap text-gray-300 mt-2 text-base font-light">Por meio de prática e aprendizado constantes, produzo software estético com um padrão extremamente alto.</h3>

      <div className=" flex my-5 gap-5 cursor-pointer">
      <div className=" py-2 px-3 bg-color-black-sidebar border rounded border-stone-800 text-center"><a href="">Projetos</a></div>
      <div className="flex py-2 px-3 border rounded border-stone-800 text-center">
      <div className="flex items-center mr-2 cursor-pointer">
      <IconEmail width={18} />
      </div>
      <div className=" cursor-pointer flex items-center">
      <a href="mailto:joaoaugusto311016@gmail.com">E-mail</a>
      </div>
       </div>
      </div>

      <div className=" hover:bg-color-black-sidebar/50 mt-8 w-full bg-color-black-sidebar  border border-stone-800 rounded p-4">
      <h4 className=" text-lg text-roxo">Quem eu sou?</h4>
      <p className=" font-light mt-5 leading-10 ">Sou um Desenvolvedor especializado em HTML, CSS, JavaScript e TypeScript, com conhecimento em ReactJS, NextJS, Tailwind CSS. Também possuo habilidades avançadas em Java e Spring para o desenvolvimento do backend.
        Com paixão pela inovação, crio experiências cativantes e humanas, buscando sempre aprender novas tecnologias para fornecer soluções criativas e eficientes. Meu objetivo principal é proporcionar uma experiência excepcional ao usuário, em qualquer dispositivo.</p>
      </div>
    </div>
  )
}