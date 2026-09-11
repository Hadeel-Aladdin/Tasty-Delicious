import Image from "next/image";
import { montez, zain, aref } from "../app/font";

function HeroSection() {
    return (
        <section className="relative bg-cream min-h-[calc(100vh-80px)] overflow-hidden dir-rtl py-12 px-6 md:px-16 flex items-center justify-center">

            {/* Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                {/* Left Column: Text & Content (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-8 z-10 text-right">

                    {/* Main Title */}
                    <h1 className={`${zain.className} font-bold text-3xl md:text-5xl lg:text-6xl text-espresso leading-tight`}>
                        برجر فراخ ولا لحمة؟ فرايد ولا مشوى؟ صوص زيادة؟
                        <br></br>
                        احنا عملناها على مزاجك
                    </h1>

                    {/* Subtitle / Paragraphs */}
                    <div className={`${zain.className} text-xl md:text-2xl text-black/70 space-y-4 leading-relaxed font-semibold`}>
                        <p>
                            بتقدملك برجر متفصل بالظبط زي ماتحبه
                            <span className={` ${montez.className} font-light text-mustard text-5xl`}>  Tasty &amp; Delicious</span>
                        </p>
                        <p>
                            اختار اللي بتحبه، شيل اللي مش بتحبه، واعمل ساندوتشك بمواصفاتك، بمكونات فريش، غنية، وبأعلى جودة. بس على طريقتك انت
                        </p>
                    </div>

                    {/* Bottom Badge Section */}
                    <div className="pt-4">
                        <a
                            href="https://wa.me/20112233?text=أهلاً،%20عايز%20أطلب%20أوردر"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${zain.className} inline-block bg-mustard text-cream hover:bg-cream hover:text-mustard border-2 border-transparent hover:border-mustard font-zain text-2xl md:text-3xl font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                        >
                            حضرنالك كل حاجة... والباقي عليك يا شيف
                        </a>
                    </div>

                </div>

                {/* Right Column: Visual Elements & Image (lg:col-span-5) */}
                <div className="lg:col-span-5 relative flex justify-center items-center">

                    <div className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] bg-mustard/70 rounded-full blur-2xl z-0 scale-110 pointer-events-none" />

                    {/* Background Shape (Organic Blob / Canvas Shape) */}
                    <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-espresso/90 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] transition-all duration-700 hover:rotate-6 scale-105" />

                    {/* Accent Sauce Splatter / Layer (Yellow Shape behind burger) */}
                    <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-mustard opacity-90 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -translate-x-4 translate-y-4 rotate-12" />

                    {/* Burger Image */}
                    <div className="relative z-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]">
                        <Image
                            src="/hero-img.png"
                            alt="Tasty Burger"
                            fill
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    {/* Premium Quality Badge */}
                    <div className="absolute top-2 right-2 sm:-top-4 sm:right-4 z-20 bg-cream/90 backdrop-blur-sm border-2 border-espresso p-3 rounded-full shadow-xl flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 text-center text-espresso transform -rotate-12 hover:rotate-0 transition-transform">
                        <span className="text-xs font-bold uppercase tracking-wider">★ ★ ★ ★ ★</span>
                        <span className={`${aref.className} font-aref font-bold text-sm sm:text-base leading-tight`}>Premium Quality</span>
                        <span className="text-xs font-bold text-mustard">100%</span>
                    </div>



                </div>

            </div>

        </section>
    );
}

export default HeroSection;