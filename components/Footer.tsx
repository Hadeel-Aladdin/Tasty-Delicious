import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { montez, zain } from "../app/font";

function Footer() {
    return (
        <footer className="bg-cream text-espresso dark:bg-espresso dark:text-cream pt-10 pb-6 border-t border-mustard/20">

            {/* =====================================================
                Desktop Footer (md and up) - 3 Columns Layout
            ===================================================== */}
            <div className="hidden md:block">
                {/* تم تعديل الحشو الجانبي px-10 md:px-16 إلى px-4 md:px-8 لتقليل المسافات الجانبية */}
                <div dir="rtl" className={`${zain.className} max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-3 gap-8 items-start`}>

                    {/* العمود الأول (يمين): تواصل معنا */}
                    <div className="flex flex-col items-start gap-3">
                        <h3 className="text-lg md:text-xl font-bold text-mustard">
                            تواصل معنا
                        </h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                                <Clock size={18} className="text-mustard shrink-0" />
                                <span>يوميًا من 12 ظهرًا حتى 2 صباحًا</span>
                            </div>
                            <div className="flex items-center gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                                <MapPin size={18} className="text-mustard shrink-0" />
                                <span>القاهرة، مصر</span>
                            </div>
                        </div>
                    </div>

                    {/* العمود الثاني (في النص): روابط سريعة */}
                    <div className="flex flex-col items-center gap-3">
                        <h3 className="text-lg md:text-xl font-bold text-mustard">
                            روابط سريعة
                        </h3>
                        <nav className="flex flex-col items-start gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                            <a href="#hero" className="hover:text-mustard transition-colors">الرئيسة</a>
                            <a href="#menu" className="hover:text-mustard transition-colors">المنيو</a>
                            <a href="#offers" className="hover:text-mustard transition-colors">العروض</a>
                            <a href="#story" className="hover:text-mustard transition-colors">قصتنا</a>
                            <a href="#whyChooseUs" className="hover:text-mustard transition-colors">ليه تختارنا</a>
                        </nav>
                    </div>

                    {/* العمود الثالث (شمال): اللوجو، السلوجان، والسوشيال ميديا */}
                    <div className="flex flex-col items-end gap-3">
                        {/* Brand Logo & Slogan */}
                        <a href="#hero" className="flex flex-col items-start group">
                            <div className="flex items-center gap-2">
                                <span className={`${montez.className} text-3xl md:text-4xl text-mustard transition-transform duration-300 group-hover:scale-105`}>
                                    Tasty & Delicious
                                </span>
                                <Image
                                    src="/icon.png"
                                    alt="T&D Logo"
                                    width={30}
                                    height={30}
                                    className="w-auto h-auto m-0.5 p-1 rounded-full dark:bg-mustard transition-all duration-300 group-hover:rotate-12"
                                />
                            </div>
                            {/* السلوجان */}
                            <span className="text-sm font-normal text-espresso/70 dark:text-cream/70 mt-1">
                                تجربة مختلفة... طعم مختلف ✨
                            </span>
                        </a>

                        {/* Social Media Icons */}
                        <div className="flex items-end gap-2.5 mt-1 ml-22">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61593298442552" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300 transform hover:scale-110">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/tasty_and_delicious0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300 transform hover:scale-110">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="https://wa.me/201228134545?text=أهلاً،%20عايز%20أطلب%20أوردر" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300 flex items-center justify-center">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.261-.095-.451-.143-.641.143-.19.285-.737.929-.903 1.119-.166.19-.333.214-.618.071-.285-.143-1.205-.444-2.296-1.417-.848-.757-1.421-1.692-1.587-1.977-.166-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.166.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.641-1.546-.879-2.118-.231-.557-.466-.481-.641-.49-.166-.008-.356-.01-.547-.01-.19 0-.5.071-.761.357-.261.285-.998.976-.998 2.38 0 1.404 1.022 2.76 1.165 2.951.143.19 2.012 3.073 4.875 4.31.681.294 1.212.47 1.626.601.684.217 1.307.186 1.8.113.549-.082 1.689-.69 1.927-1.356.238-.666.238-1.237.167-1.356-.071-.12-.261-.19-.546-.333z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className={`max-w-[1400px] mx-auto px-4 md:px-8 mt-8 pt-4 border-t border-black/10 dark:border-cream/10 text-center ${zain.className} text-sm font-normal text-espresso/70 dark:text-cream/70`}>
                    © {new Date().getFullYear()} Tasty & Delicious جميع الحقوق محفوظة لـ
                </div>
            </div>


            {/* =====================================================
                Mobile Footer (md and below) - Stacked vertically
            ===================================================== */}
            <div dir="rtl" className={`${zain.className} md:hidden flex flex-col items-center gap-8 px-6 text-center`}>

                {/* 1. Brand & Slogan & Socials */}
                <div className="flex flex-col items-center gap-3 group">
                    <a href="#hero" className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                            <span className={`${montez.className} text-3xl text-mustard`}>
                                Tasty & Delicious
                            </span>
                            <Image
                                src="/icon.png"
                                alt="T&D Logo"
                                width={28}
                                height={28}
                                className="w-auto h-auto m-0.5 p-1 rounded-full dark:bg-mustard transition-all duration-300"
                            />
                        </div>
                        <span className="text-sm font-normal text-espresso/70 dark:text-cream/70 mt-1">
                            تجربة مختلفة... طعم مختلف ✨
                        </span>
                    </a>

                    {/* Social Media */}
                    <div className="flex items-center justify-center gap-3 mt-1">
                        <a href="https://www.facebook.com/profile.php?id=61593298442552" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/tasty_and_delicious0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://wa.me/201228134545?text=أهلاً،%20عايز%20أطلب%20أوردر" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full bg-cream/10 text-mustard border-mustard border hover:bg-mustard hover:text-cream transition-all duration-300 flex items-center justify-center">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.261-.095-.451-.143-.641.143-.19.285-.737.929-.903 1.119-.166.19-.333.214-.618.071-.285-.143-1.205-.444-2.296-1.417-.848-.757-1.421-1.692-1.587-1.977-.166-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.166.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.641-1.546-.879-2.118-.231-.557-.466-.481-.641-.49-.166-.008-.356-.01-.547-.01-.19 0-.5.071-.761.357-.261.285-.998.976-.998 2.38 0 1.404 1.022 2.76 1.165 2.951.143.19 2.012 3.073 4.875 4.31.681.294 1.212.47 1.626.601.684.217 1.307.186 1.8.113.549-.082 1.689-.69 1.927-1.356.238-.666.238-1.237.167-1.356-.071-.12-.261-.19-.546-.333z" /></svg>
                        </a>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-bold text-mustard mb-1">
                        روابط سريعة
                    </h3>
                    <nav className="flex flex-col items-center gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                        <a href="#hero" className="hover:text-mustard transition-colors">الرئيسة</a>
                        <a href="#menu" className="hover:text-mustard transition-colors">المنيو</a>
                        <a href="#offers" className="hover:text-mustard transition-colors">العروض</a>
                        <a href="#story" className="hover:text-mustard transition-colors">قصتنا</a>
                        <a href="#whyChooseUs" className="hover:text-mustard transition-colors">ليه تختارنا</a>
                    </nav>
                </div>

                {/* 3. Contact Us */}
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-bold text-mustard mb-1">
                        تواصل معانا
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                            <Clock size={18} className="text-mustard shrink-0" />
                            <span>يوميًا من 12 ظهرًا حتى 2 صباحًا</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-base font-normal text-espresso/80 dark:text-cream/80">
                            <MapPin size={18} className="text-mustard shrink-0" />
                            <span>القاهرة، مصر</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-4 border-t border-black/10 dark:border-cream/10 text-sm font-normal text-espresso/70 dark:text-cream/70">
                    © {new Date().getFullYear()} Tasty & Delicious جميع الحقوق محفوظة
                </div>

            </div>

        </footer>
    );
}

export default Footer;