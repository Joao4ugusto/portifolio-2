export default function Footer() {
  return (
    <footer className=" md:hidden fixed bottom-0 z-30 p-5 w-full h-[70px] bg-black border-t-2 border-stone-800">
      <div className=" flex items-center justify-center gap-x-10">
       <a href="">° Feito por <span className="underline text-roxo">João Augusto</span></a>
       <a href="" className=" hidden">Siga-me Twitter</a>
      </div>
    </footer>
  );
}
