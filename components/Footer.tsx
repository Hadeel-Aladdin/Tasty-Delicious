import Image from "next/image";
import { montez, zain } from "../app/font";

function Footer() {
    return (
        <footer className="bg-cream text-cream dark:bg-zinc-950 dark:text-zinc-300 pt-12 pb-8 border-t border-mustard/20">
            <div className={`${zain.className} max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8`}>

                {/* T&D */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/icon.png"
                        alt="T& D Logo"
                        width={32}
                        height={32}
                        className="w-auto h-auto m-3"
                    />
                    <span className={`${montez.className} text-3xl text-mustard`}>
                        Tasty & Delicious
                    </span>
                </div>

                {/* Nav Links */}
                <nav className="flex items-center gap-6 text-lg text-espresso/80 font-semibold text-lg">
                    <a href="#menu" className="hover:text-mustard transition-colors">المنيو</a>
                    <a href="#about" className="hover:text-mustard transition-colors">قصتنا</a>
                    <a href="#offers" className="hover:text-mustard transition-colors">أسرار الشيف</a>
                </nav>

                {/*Icons*/}
                <div className="flex items-center gap-4">

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61593298442552&rdid=iLRHCZ3k8DxvVRbs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CRAU5jngX%2F#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="p-2.5 rounded-full bg-cream/10 text-mustard border-mustard border-2 hover:bg-mustard hover:text-cream transition-all duration-300 transform hover:scale-110"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/tasty_and_delicious0?igsh=MWN1cWdqN2Zwa3dyNg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2.5 rounded-full bg-cream/10 text-mustard border-mustard border-2 hover:bg-mustard hover:text-cream transition-all duration-300 transform hover:scale-110"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/201228134545?text=أهلاً،%20عايز%20أطلب%20أوردر"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="p-2.5 rounded-full bg-cream/10 text-mustard border-mustard border-2 hover:bg-mustard hover:text-cream transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.261-.095-.451-.143-.641.143-.19.285-.737.929-.903 1.119-.166.19-.333.214-.618.071-.285-.143-1.205-.444-2.296-1.417-.848-.757-1.421-1.692-1.587-1.977-.166-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.166.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.641-1.546-.879-2.118-.231-.557-.466-.481-.641-.49-.166-.008-.356-.01-.547-.01-.19 0-.5.071-.761.357-.261.285-.998.976-.998 2.38 0 1.404 1.022 2.76 1.165 2.951.143.19 2.012 3.073 4.875 4.31.681.294 1.212.47 1.626.601.684.217 1.307.186 1.8.113.549-.082 1.689-.69 1.927-1.356.238-.666.238-1.237.167-1.356-.071-.12-.261-.19-.546-.333z" />
                        </svg>
                    </a>

                </div>

            </div>

            <div className={`max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-cream/10 text-center ${zain.className} text-sm text-black/70`}>
                © {new Date().getFullYear()} Tasty & Delicious جميع الحقوق محفوظة لـ 
            </div>
        </footer>
    );
}

export default Footer;