import {ReactNode} from 'react'
import IconClose from './icons/iconClose';
import IconExplore from './icons/iconExplore';
import IconSquarePen from './icons/iconPen';
import Icon24px from './icons/iconTools';
import IconCodeOfConduct16 from './icons/codeOf';
import IconIconEmotionHappy from './icons/logo';


type props = {
  children: never[],
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({open, onClose, children}: props){
  return(
    <section className={`z-50 transition-all duration-500 fixed  left-0 top-0 bottom-0 text-white border-r-2 border-stone-900 ${open ? ' w-screen bg-color-black-sidebar' : 'w-0'} md:w-[260px]  md:bg-color-black-sidebar`} >
      <div className={`${open ? 'ml-0' : '-ml-96'} md:ml-0`}>
        <div className={`text-white m-5 md:m-3 flex items-center justify-between`}>
           <div>
              <IconIconEmotionHappy width={29} height={29} className=' text-roxo' />
           </div>
           <div onClick={onClose} className=' md:hidden'>
              <IconClose width={28} height={28} />
           </div>
        </div>
        <div className='mt-32 md:mt-32 lg:mt-28'>
          <ul className=' flex flex-col text-sm font-medium space-y-12 m-6 md:m-3'>
            <a href='/' className=' flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-black  md:hover:bg-stone-900 hover:rounded-md'><IconExplore width={18} height={18} /> Principal</a>
            <a href='/projetos' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-black  md:hover:bg-stone-900 hover:rounded-md  '><IconCodeOfConduct16 width={20} height={20} /> Projetos</a>
            <a href='/blog' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-black  md:hover:bg-stone-900 hover:rounded-md  '><IconSquarePen width={20} height={20} /> Blog</a>
            <a href='/ferramentas' className='flex font-normal text-base items-center gap-3 px-4 py-3 hover:bg-black  md:hover:bg-stone-900 hover:rounded-md  '><Icon24px width={22} height={22} /> Ferramentas</a>
          </ul>
        </div>
        </div>
    </section>
  )
}





