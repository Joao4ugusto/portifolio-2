import {ReactNode} from 'react'
import IconClose from './icons/iconClose';
import IconExplore from './icons/iconExplore';
import IconSquarePen from './icons/iconPen';
import Icon24px from './icons/iconTools';
import IconCodeOfConduct16 from './icons/codeOf';

type props = {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({open, onClose}: props){
  return(
    <section className={`fixed z-50 left-0 top-0 bottom-0 text-white border-r-2 border-stone-900 ${open ? ' w-[280px] md:w-screen bg-color-black-sidebar' : 'w-0'} md:w-[260px] md:left-0 md:bg-color-black-sidebar`} >
      <div className={` transition-all duration-200 ${open ? 'ml-0' : '-ml-96'} `}>
        <div className={` text-white m-3 flex items-center justify-between`}>
           <div>
              <a href='#' className='underline text-base font-normal '>João <br/> Augusto</a>
           </div>
           <div onClick={onClose} className=' md:hidden'>
              <IconClose width={28} height={28} />
           </div>
        </div>
        <div className='mt-32 md:mt-28 lg:mt-24 m-5'>
          <ul className=' flex flex-col text-sm font-medium space-y-11'>
            <a href='#' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconExplore width={18} height={18} /> Principal</a>
            <a href='#' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconCodeOfConduct16 width={20} height={20} /> Projetos</a>
            <a href='#' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconSquarePen width={20} height={20} /> Blog</a>
            <a href='#' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><Icon24px width={22} height={22} /> Ferramentas</a>
          </ul>
        </div>
      </div>


    </section>
  )
}



