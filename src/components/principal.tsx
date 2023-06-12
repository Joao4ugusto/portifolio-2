import IconEmail from "./icons/Email";
import IconBxlGithub from "./icons/iconGithub";
import IconBxlInstagram from "./icons/iconInsta";
import IconBxlLinkedinSquare from "./icons/iconLinkedin";
import IconComputerLaptop from "./icons/laptop";
import IconReact from "./icons/react";



export default function Principal(){
  return (
    <div className=" z-30 mx-5 my-28 md:mx-18 md:ml-[280px] md:my-14 lg:mx-96 xl:ml-[570px] xl:mx-[300px] 2xl:ml-[590px]  2xl:mx-[300px] md:absolute">
      <div className=" flex items-center gap-3">
         <h1 className=" text-[46px] text-5xl xl:text-[55px] font-semibold">João <span className=" text-roxo">  Augusto </span></h1>
         <div className="">
          <IconReact style={{ animationDuration: 's', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} width={36} height={36} className="text-cyan-500 flex animate-spin" />
         </div>
      </div>
      <h3 className=" text-white mt-3 text-[17px] font-normal 2xl:text-xl ">Desenvolvedor de software | Estudante de <br/> Ciências da Computação</h3>
      <h3 className=" lg:w-[380px] flex-wrap text-gray-300 mt-2 text-base font-light 2xl:text-lg 2xl:w-[430px]">Por meio de prática e aprendizado constantes, produzo software estético com um padrão extremamente alto.</h3>

      <div className=" flex my-5 gap-5">
      <div className=" cursor-pointer py-2 px-3 bg-color-black-sidebar border rounded border-stone-800 text-center"><a href="/projetos">Projetos</a></div>
      <div className="flex py-2 px-3 border rounded border-stone-800 text-center">
      <div className="flex items-center mr-2 cursor-pointer">
      <IconEmail width={18} />
      </div>
      <div className=" cursor-pointer flex items-center">
      <a href="mailto:joaoaugusto311016@gmail.com">E-mail</a>
      </div>
       </div>
      </div>

      <div className=" xl:mb-16 hover:bg-color-black-sidebar/50 mt-8 w-full bg-color-black-sidebar  border border-stone-800 rounded p-4">
      <h4 className=" text-lg text-roxo">Quem eu sou?</h4>
      <p className=" font-light mt-5 leading-8 ">Sou um Desenvolvedor especializado em HTML, CSS, JavaScript e TypeScript, com conhecimento em ReactJS, NextJS, Tailwind CSS. Também possuo habilidades avançadas em Java e Spring para o desenvolvimento do backend.
        Com paixão pela inovação, crio experiências cativantes e humanas, buscando sempre aprender novas tecnologias para fornecer soluções criativas e eficientes. Meu objetivo principal é proporcionar uma experiência excepcional ao usuário, em qualquer dispositivo.</p>

      <div className=" mt-5 flex gap-2">
        <a href="https://www.instagram.com/___joao_augusto___/" className=" p-4 bg-black border border-stone-800 rounded"><IconBxlInstagram width={24} height={24} className=" hover:text-roxo" /></a>
        <a href="" className=" p-4 bg-black border border-stone-800 rounded"><IconBxlLinkedinSquare width={24} height={24} className=" hover:text-roxo" /></a>
        <a href="" className=" p-4 bg-black border border-stone-800 rounded"><IconBxlGithub width={24} height={24} className=" hover:text-roxo" /></a>
        <a href="" className=" p-4 bg-black border border-stone-800 rounded"><IconComputerLaptop width={24} height={24} className=" hover:text-roxo" /></a>
      </div>  
      </div>
    </div>
  )
}