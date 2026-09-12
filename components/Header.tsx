import Image from "next/image";
import { montez, zain } from "../app/font";


function Header() {
    return (
        <header className="flex top-0 w-full h-20 items-center bg-cream justify-between p-4 dark:bg-espresso z-50">

            {/* T&D */}
            <div className="flex items-center gap-2">
                <Image
                    src="/icon.png"
                    alt="T& D Logo"
                    width={32}
                    height={32}
                    className="h-auto w-auto m-3"
                />
                <h1 className={`${montez.className} text-3xl text-mustard`}>
                    Tasty & Delicious
                </h1>
            </div>

            {/* Nav Links */}
            <nav className={`${zain.className} hidden md:flex items-center gap-6 font-semibold text-lg text-espresso/80 dark:text-cream ml-auto`}>

                <a href="#menu" className="hover:text-mustard transition-colors cursor-pointer">
                    المنيو
                </a>

                <a href="#story" className="hover:text-mustard transition-colors cursor-pointer">
                    قصتنا
                </a>

                <a href="#chif-tips" className="hover:text-mustard transition-colors cursor-pointer">
                    أسرار الشيف
                </a>

            </nav>

            {/* WhatsApp Order Button */}
            <a
                href="https://wa.me/201228134545?text=أهلاً،%20عايز%20أطلب%20أوردر"
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-15 mr-4 ${zain.className} bg-mustard text-cream text-center dark:bg-mustard dark:text-espresso font-bold text-lg px-5 py-2 rounded-full hover:bg-cream hover:border-mustard hover:border-2 hover:text-mustard dark:hover:bg-cream dark:hover:text-espresso transition-all duration-500 shadow-md transform hover:scale-105`}>
                اطلب الآن
            </a>
        </header>
    );
}

export default Header;