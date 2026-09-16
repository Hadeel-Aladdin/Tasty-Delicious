import Image from "next/image";
import { montez, zain, aref } from "../app/font";

function HeroSection() {
    return (
        <section
            id="hero"
            className="
                relative 
                bg-cream dark:bg-espresso
                transition-colors duration-300
                overflow-hidden
                min-h-[100dvh]
                pt-30 pb-12 px-6 md:px-16 
                flex items-center justify-center
                dir-rtl
            "
        >
            {/* Container: تحويله إلى Flex في الموبايل و Grid في الشاشات الكبيرة */}
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center w-full">

                {/* صورة البرجر: ترتيبها 1 في الموبايل (عشان تظهر فوق) */}
                <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center">

                    {/* الدوائر الخلفية للبرجر */}
                    <div className="absolute w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] bg-mustard/35 dark:bg-mustard/20 rounded-full blur-[10px] z-0 scale-110 pointer-events-none transition-colors duration-300" />
                    <div className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] bg-espresso/90 dark:bg-cream/5 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] transition-all duration-700 hover:rotate-6 scale-105" />
                    <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] bg-mustard opacity-90 dark:opacity-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -translate-x-4 translate-y-4 rotate-12 transition-opacity duration-300" />

                    <div className="relative z-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px]">
                        <Image
                            src="/hero-img.png"
                            alt="Tasty Burger"
                            fill
                            sizes="260px"
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    {/* بادج التقييم */}
                    <div className="absolute top-0 right-0 sm:-top-4 sm:right-4 z-20 bg-cream/90 dark:bg-espresso/80 backdrop-blur-sm border-2 border-espresso dark:border-mustard p-2 sm:p-3 rounded-full shadow-xl flex flex-col items-center justify-center w-20 h-20 sm:w-28 sm:h-28 text-center text-espresso dark:text-cream transform -rotate-12 hover:rotate-0 transition-all duration-300">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-mustard">★ ★ ★ ★ ★</span>
                        <span className={`${aref.className} font-aref font-bold text-xs sm:text-base leading-tight mt-1`}>Premium Quality</span>
                        <span className="text-[10px] sm:text-xs font-bold text-mustard mt-0.5">100%</span>
                    </div>

                </div>

                {/* قسم النصوص: ترتيبه 2 في الموبايل (عشان يظهر تحت البرجر) */}
                <div className="order-2 lg:order-1 lg:col-span-7 space-y-8 z-10 text-right">

                    <h1 className={`${zain.className} font-bold text-4xl md:text-5xl lg:text-7xl text-espresso dark:text-cream leading-tight transition-colors duration-300`}>
                        عملناها على مزاجك
                    </h1>

                    <div className={`${zain.className} text-xl md:text-2xl text-espresso/80 dark:text-cream/80 space-y-4 leading-relaxed font-semibold transition-colors duration-300`}>

                        {/*  عُرض في الموبايل والتابلت فقط (يختفي من الشاشات الكبيرة lg) */}
                        <div className="block lg:hidden space-y-4">
                            <p className={`${montez.className} font-light text-mustard text-5xl sm:text-6xl drop-shadow-sm`}>
                                Tasty &amp; Delicious
                            </p>
                            <p>
                                بتقدملك بوكسات برجر متفصلة على ذوقك
                            </p>
                            <p>
                                بأعلى جودة ومكونات فريش جاهزة لتجربة تسوية فريدة
                            </p>
                        </div>

                        {/* يُعرض في الشاشات الكبيرة lg فقط (مخفي في الموبايل والتابلت) */}
                        <div dir="rtl" className="hidden lg:block space-y-4">
                            <p>
                                <span className={`${montez.className} font-light text-mustard text-5xl sm:text-6xl inline-block mr-2`}>
                                    Tasty &amp; Delicious
                                </span>
                                بتقدملك بوكسات برجر
                                <br/>
                                 متفصلة على ذوقك
                            </p>
                            <p>
                                بأعلى جودة ومكونات فريش جاهزة لتجربة تسوية فريدة
                            </p>
                        </div>

                    </div>

                    <div className="pt-4 flex justify-center">
                        <a
                            href="#menuBoxes"
                            rel="noopener noreferrer"
                            className={`${zain.className} inline-block bg-mustard text-cream dark:text-espresso hover:bg-cream dark:hover:bg-espresso hover:text-mustard dark:hover:text-mustard border-2 border-transparent hover:border-mustard dark:hover:border-mustard font-zain text-xl sm:text-2xl md:text-3xl font-bold px-8 sm:px-10 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                        >
                            اختار بوكس السهرة
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;