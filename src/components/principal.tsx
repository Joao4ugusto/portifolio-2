import Footer from "./footer";
import IconEmail from "./icons/Email";
import IconBxlDevTo from "./icons/dev";
import IconBxlGithub from "./icons/iconGithub";
import IconBxlInstagram from "./icons/iconInsta";
import IconBxlLinkedinSquare from "./icons/iconLinkedin";
import IconComputerLaptop from "./icons/laptop";
import IconReact from "./icons/react";



export default function Principal(){
  return (
    <div>
    <div className=" z-30 mx-5 my-28 md:my-28 lg:my-14 md:mx-[55px] md:ml-[330px]  lg:mx-[100px] lg:ml-[400px] xl:ml-[520px] xl:mx-[240px] 2xl:ml-[565px]  2xl:mx-[300px] md:absolute">
      <div className=" flex items-center gap-3">
         <h1 className=" text-[46px] text-5xl xl:text-[55px] font-semibold">João <span className=" text-roxo">  Augusto </span></h1>
         <div className="">
          <IconReact style={{ animationDuration: '1s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} width={36} height={36} className="text-cyan-500 flex animate-spin" />
         </div>
      </div>
      <h2 className="  text-white mt-3 text-[17px] font-normal xl:text-xl 2xl:text-xl ">Desenvolvedor de software | Estudante de <br/> Ciências da Computação</h2>
      <p className="   flex-wrap text-gray-200 mt-2 text-base font-light sy:w-[420px] lg:w-[470px] xl:w-[470px] 2xl:text-base 2xl:w-[490px]">Dedicando-me à prática e ao aprendizado constante, busco aprimorar minha habilidade na criação de software, almejando um padrão estético elevado e a excelência em cada projeto.</p>

      <div className=" flex my-5 gap-5 ">
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

      <div className=" lg:mb-16 xl:mb-16 hover:bg-color-black-sidebar/50 mt-8 w-full bg-color-black-sidebar border border-stone-800 rounded p-4">
      <h4 className="  text-lg text-roxo font-bold">Quem eu sou?</h4>
      <p className=" font-light mt-5 leading-8 ">Sou um Desenvolvedor especializado em HTML, CSS, JavaScript e TypeScript, com conhecimento em ReactJS, NextJS, Tailwind CSS. Também possuo habilidades avançadas em Java e Spring para o desenvolvimento do backend.
        Com paixão pela inovação, crio experiências cativantes e humanas, buscando sempre aprender novas tecnologias para fornecer soluções criativas e eficientes. Meu objetivo principal é proporcionar uma experiência excepcional ao usuário, em qualquer dispositivo.</p>

      <div className=" mt-5 flex gap-2">
        <a href="https://www.instagram.com/___joao_augusto___/" className="  p-4 bg-black border border-stone-800 rounded"><IconBxlInstagram width={26} height={26} className=" text-roxo md:text-white md:hover:text-roxo" /></a>
        <a href="" className="  p-4 bg-black border border-stone-800 rounded"><IconBxlLinkedinSquare width={26} height={26} className=" text-roxo md:text-white md:hover:text-roxo" /></a>
        <a href="" className="  p-4 bg-black border border-stone-800 rounded"><IconBxlGithub width={26} height={26} className=" text-roxo md:text-white md:hover:text-roxo " /></a>
        <a href="" className="  p-4 bg-black border border-stone-800 rounded"><IconBxlDevTo width={28} height={28} className=" text-roxo md:text-white md:hover:text-roxo" /></a>
      </div>  
      </div>
     
    </div>
    <Footer />
    </div>
  )
}