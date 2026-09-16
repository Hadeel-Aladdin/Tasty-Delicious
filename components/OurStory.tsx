'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zain } from 'next/font/google';
import { Quote, HeartPulse } from 'lucide-react';

const zain = Zain({ weight: ['400', '700', '800', '900'], subsets: ['arabic'] });

export default function OurStory() {
    return (
        <section dir="rtl" id='story' className="relative w-full bg-cream dark:bg-espresso py-16 md:py-24 overflow-hidden">
            
            {/* =====================================================
                1. Melted Cheese Top Divider (أعرض وأكبر)
            ===================================================== */}
            <div className="relative w-full h-25 md:h-50 -mt-1 z-10 mb-4">
                <svg 
                    viewBox="0 0 1440 200" 
                    preserveAspectRatio="none" 
                    className="absolute top-0 w-full h-full fill-mustard drop-shadow-md"
                >
                    {/* تعديل مسار الـ SVG عشان الجبنة تبان أعرض وأتقل */}
                    <path d="M0,0 C240,160 480,40 720,130 C960,200 1200,60 1440,150 L1440,0 L0,0 Z" />
                    
                    {/* نقط الجبنة اللي بتقع */}
                    <circle cx="250" cy="140" r="12" />
                    <circle cx="260" cy="175" r="7" />
                    <circle cx="850" cy="155" r="16" />
                    <circle cx="865" cy="190" r="9" />
                    <circle cx="1200" cy="130" r="11" />
                </svg>
            </div>

            {/* =====================================================
                Background Decorative Elements (Subtle)
            ===================================================== */}

            <div className="max-w-4xl mx-auto px-5 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/60 dark:bg-white/5 border border-espresso/10 dark:border-cream/10 rounded-[2.5rem] p-8 md:p-14 shadow-sm relative"
                >
                    {/* Quote Icon Top Right */}
                    <div className="absolute -top-6 -right-4 md:-right-6 text-mustard bg-cream dark:bg-espresso p-2 rounded-full shadow-sm">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 rotate-180 opacity-80" fill="currentColor" />
                    </div>

                    {/* Section Title */}
                    <div className="text-center mb-10">
                        <h2 className={`${zain.className} text-4xl md:text-5xl font-black text-espresso dark:text-cream mb-4 flex items-center justify-center gap-3`}>
                            قصتنا
                        </h2>
                        <div className="w-16 h-1.5 bg-mustard rounded-full mx-auto"></div>
                    </div>

                    {/* Story Content */}
                    <div className={`${zain.className} space-y-8 text-espresso/85 dark:text-cream/85 text-lg md:text-2xl font-bold leading-relaxed`}>
                        
                        {/* Intro */}
                        <p className="text-center text-xl md:text-3xl font-black text-espresso dark:text-cream leading-normal">
                            بخبرة أكتر من <span className="text-mustard">10 سنين</span>، Tasty & Delicious بتقدملك كل المكونات اللي محتاجها عشان تكون الشيف في مطبخك.
                        </p>

                        <p className="text-right">
                            إحنا حبينا نحل فجوة بسيطة:<br/>
                            بين طعم البرجر اللي بتحبه في المطاعم، وبين البرجر اللي نفسك تاكله بالظبط على مزاجك.
                        </p>

                        {/* The Pain Points (Questions) */}
                        <div className="bg-mustard/10 dark:bg-mustard/5 border-r-4 border-mustard p-6 rounded-l-2xl my-8 text-right">
                            <ul className="space-y-3">
                                <li>كام مرة حبيت برجر في مطعم، بس تمنيت إنهم يشيلوا الصوص ده؟</li>
                                <li>كام مرة حسيت إنه محتاج شوية مخلل زيادة؟</li>
                                <li>أو تمنيت تضيف حاجة بتحبها، أو تشيل حاجة مش على ذوقك؟</li>
                            </ul>
                        </div>

                        {/* The Solution */}
                        <p className="text-right text-xl md:text-2xl font-black text-mustard">
                            إحنا فاهمينك.
                        </p>

                        <p className="text-right">
                            عشان كده، بنقدملك كل المكونات جاهزة للطبخ، وإنت اللي بتكمل الباقي.<br/>
                            نفس طعم وتجربة المطاعم اللي بتحبها، بس المرة دي… <span className="text-mustard font-black underline decoration-mustard/40 underline-offset-8">إنت اللي متحكم</span>.
                        </p>

                        <p className="text-right">
                            حط اللي بتحبه. شيل اللي مش بتحبه.<br/>
                            واعمل ساندوتشك بالطعم اللي بتحبه بالظبط.
                        </p>

                        {/* Climax / Conclusion */}
                        <div className="pt-8 mt-8 border-t border-espresso/10 dark:border-cream/10 text-center">
                            <HeartPulse className="w-8 h-8 text-mustard mx-auto mb-4 animate-pulse" />
                            <p className="text-2xl md:text-4xl font-black text-espresso dark:text-cream leading-normal">
                                لأن أحلى برجر مش بس هو اللي طعمه حلو…<br/>
                                <span className="text-mustard">هو اللي معمول على مزاجك إنت.</span>
                            </p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}