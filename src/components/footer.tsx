export default function Footer() {
  return (
    <footer className=" fixed bottom-0 z-30 p-5 w-full h-[70px] bg-color-black-sidebar border-t-2 border-stone-900">
      <div className=" flex items-center justify-center gap-x-10">
       <a href="">Feito por <span className="hover:underline">João Augusto</span>💜</a>
       <a href="" className=" hidden">Siga-me Twitter</a>
      </div>
    </footer>
  );
}
