import IconMenu from "./icons/iconMenu";

type props = {
  openSaidebarClick: () => void;
}

export default function Header({ openSaidebarClick }: props){
  return(
    <header className="md:hidden fixed bg-black w-full">
      <div className=" h-[56px] m-3 flex justify-between items-center">
      <div>
        <h1 className="underline text-lg font-medium">João <br/> Augusto</h1>
      </div>
      <div onClick={openSaidebarClick}>
        <IconMenu width={24} height={24} />
      </div>
      </div>
      <hr className=" border-stone-800" />
    </header>
  )
}