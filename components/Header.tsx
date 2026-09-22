"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "lucide-react";
import { useTheme } from "next-themes";
import { montez, zain } from "../app/font";
import Switch from "@/components/ThemeToggle";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    // ستيت جديدة عشان نتأكد إن الـ component عمل render في البراوزر الأول
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // بنأخر تغيير الـ state عشان React ميزعلش
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);

        // بننضف الـ timer لو الكومبوننت اتشال
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-cream dark:bg-espresso z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">

                {/* T&D Chef and Logo */}
                <a href="#hero" className="flex items-center gap-2">
                    <Image
                        src="/icon.png"
                        alt="T&D Logo"
                        width={32}
                        height={32}
                        className="
                            w-auto h-auto m-1 p-1.5 
                            rounded-full 
                            bg-mustard 
                            transition-all duration-300
                        "
                    />
                    <h1 className={`${montez.className} text-2xl sm:text-3xl text-mustard whitespace-nowrap`}>
                        Tasty & Delicious
                    </h1>
                </a>

                {/* Desktop Nav Links */}
                <nav className={`${zain.className} hidden md:flex items-center gap-6 font-semibold text-xl text-espresso/80 dark:text-cream`}>
                    <a href="#hero" className="hover:text-mustard transition-colors">الرئيسة</a>
                    <a href="#offers" className="hover:text-mustard transition-colors">العروض</a>
                    <a href="#menu" className="hover:text-mustard transition-colors">المنيو</a>
                    <a href="#story" className="hover:text-mustard transition-colors">قصتنا</a>
                    <a href="#whyChooseUs" className="hover:text-mustard transition-colors">لية تختارنا</a>
                </nav>

                {/* Right Controls: Theme Switcher & Order Button & Mobile Toggle */}
                <div className="flex items-center gap-3">

                    {/* Dark / Light Mode Switcher - desktop only */}
                    {/* شيلنا الـ button واستخدمنا div عادي */}
                    <div className="hidden md:inline-flex p-1 hover:opacity-80 transition-opacity">
                        {mounted && (
                            <Switch checked={theme === "dark"} onChange={toggleTheme} />
                        )}
                    </div>

                    {/* WhatsApp Order Button */}
                    <a
                        href="https://wa.me/201228134545?text=أهلاً،%20عايز%20أطلب%20أوردر"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${zain.className} bg-mustard text-cream dark:bg-mustard dark:text-espresso font-bold text-base sm:text-lg px-4 sm:px-5 py-1.5 rounded-full hover:bg-cream hover:border-mustard hover:border-2 hover:text-mustard dark:hover:bg-cream dark:hover:text-espresso transition-all duration-300 shadow-md transform hover:scale-105 whitespace-nowrap`}
                    >
                        اطلب الآن
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-espresso dark:text-cream hover:text-mustard focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <List size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer / Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-cream/95 dark:bg-espresso/95 backdrop-blur-md border-b border-mustard/20 w-full py-6 px-4 shadow-lg transition-all duration-300">
                    <nav className={`${zain.className} flex flex-col items-center justify-center gap-5 text-2xl font-bold text-espresso dark:text-cream text-center`}>
                        <a
                            href="#hero"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-mustard transition-colors w-full"
                        >
                            الرئيسة
                        </a>
                        <a
                            href="#offers"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-mustard transition-colors w-full"
                        >
                            العروض
                        </a>
                        <a
                            href="#menu"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-mustard transition-colors w-full"
                        >
                            المنيو
                        </a>
                        <a
                            href="#story"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-mustard transition-colors w-full"
                        >
                            قصتنا
                        </a>

                        {/* Dark / Light Mode Switcher - mobile only */}
                        {/* استخدمنا label عشان الـ click يسمّع في الـ input اللي جوه الـ Switch مباشرة */}
                        {mounted && (
                            <label className="flex items-center gap-2 text-lg hover:text-mustard transition-colors cursor-pointer">
                                <Switch checked={theme === "dark"} onChange={toggleTheme} />
                                <span>الوضع الليلي</span>
                            </label>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;