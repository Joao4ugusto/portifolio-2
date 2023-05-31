import IconBxlGithub from "./icons/iconGithub";
import IconBxlInstagram from "./icons/iconInsta";
import IconBxlLinkedinSquare from "./icons/iconLinkedin";

export default function Footer() {
  return (
    <footer className=" bottom-0 fixed px-14 py-6 w-full h-[80px] md:bg-color-black-sidebar border-t-2 border-stone-900">
      <div className="flex items-center justify-between">
        <div>
          <a href="#"><IconBxlInstagram width={22} height={22} /></a>
        </div>
        <div>
          <a href="#"><IconBxlGithub width={22} height={22} /></a>
        </div>
        <div>
          <a href="#"><IconBxlLinkedinSquare width={22} height={22} /></a>
        </div>
      </div>
    </footer>
  );
}
