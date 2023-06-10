import IconMenu from "./icons/iconMenu";

type props = {
  openSaidebarClick: () => void;
}

export default function Header({ openSaidebarClick }: props){
  return(
    <header className=" z-40 md:hidden fixed bg-black w-full">
      <div className=" h-[56px] my-4 mx-4 flex justify-between items-center">
      <div>
        <h1 className="underline text-base font-medium">João <br/> Augusto</h1>
      </div>
      <div onClick={openSaidebarClick}>
        <IconMenu width={24} height={24} />
      </div>
      </div>
      <hr className=" border-stone-900" />
    </header>
  )
}