import {ReactNode} from 'react'
import IconClose from './icons/iconClose';
import IconExplore from './icons/iconExplore';
import IconSquarePen from './icons/iconPen';
import Icon24px from './icons/iconTools';
import IconAtlasian from './icons/iconPapel';

type props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}
export default function Sidebar({open, onClose, children}: props){
  return(
    <section className={` z-40 fixed md:relative right-0 top-0 bottom-0 text-white ${open ? 'w-screen bg-color-black-sidebar' : 'w-0'} md:w-[320px] md:left-0 md:bg-color-black-sidebar md:border-r-2 md:border-stone-900`}>
      <div className={` m-5 transition-all duration-500 ease-in-out ${open ? ' ml-5' : ' -ml-[100%]'} md:ml-5`}>
        <div className='flex items-center justify-between'>
           <div>
              <a href='#' className='underline text-base font-normal '>João <br/> Augusto</a>
           </div>
           <div onClick={onClose} className='md:hidden'>
              <IconClose width={28} height={28} />
           </div>
        </div>
        <div className='mt-32 md:mt-32 lg:mt-24'>
          <ul className=' flex flex-col text-sm font-medium space-y-11'>
            <a href='#' className='flex items-center gap-2 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconExplore width={18} height={18} /> Principal</a>
            <a href='#' className='flex items-center gap-2 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconAtlasian width={22} height={22} /> Projetos</a>
            <a href='#' className='flex items-center gap-2 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><IconSquarePen width={20} height={20} /> Blog</a>
            <a href='#' className='flex items-center gap-2 px-4 py-3 hover:bg-stone-900 hover:rounded-md  '><Icon24px width={22} height={22} /> Ferramentas</a>
          </ul>
        </div>
      </div>
    </section>
  )
}




