'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zain } from 'next/font/google';
import { 
    Clock, 
    ChefHat, 
    BadgeCheck, 
    Sparkles, 
    CheckCircle2, 
    XCircle,
    Store,
    Truck,
    Utensils,
    ShoppingBag,
    Star // ضفنا أيقونة النجمة هنا
} from 'lucide-react';
import { aref } from '@/app/font';

// توحيد الخط لـ Zain فقط
const zain = Zain({ weight: ['400', '700', '800', '900'], subsets: ['arabic'] });

function WhyChooseUs() {
    return (
        <section dir="rtl" id='whyChooseUs' className="relative w-full bg-cream dark:bg-espresso overflow-hidden">

            <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
                
                {/* =====================================================
                    2. Section Header
                ===================================================== */}
                <div dir="rtl" className="text-center mb-16 md:mb-24">
                    <h2 className={`${zain.className} text-4xl md:text-5xl font-black text-espresso dark:text-cream mb-4`}>
                        ليه تختار Tasty & Delicious؟
                    </h2>
                    <p className={`${zain.className} text-lg md:text-2xl text-espresso/80 dark:text-cream/80 max-w-2xl mx-auto font-semibold`}>
                        لأننا بنقدملك تجربة مختلفة تماماً.. طعم وجودة المطاعم الكبيرة، بس بمتعة ونضافة عمايل إيدك في البيت، ومن غير ما تضيع وقتك في التحضير!
                    </p>
                </div>

                {/* =====================================================
                    3. Timeline (اللاين في النص والكاردز يمين وشمال)
                ===================================================== */}
                <div className="relative mb-24 md:mb-32 max-w-5xl mx-auto">
                    
                    {/* الخط المنقط الثابت في النص للديسكتوب، وعلى اليمين للموبايل */}
                    <div className="absolute right-[23px] md:right-auto md:left-1/2 top-0 bottom-0 w-0.5 border-l-4 border-dashed border-mustard/40 md:-translate-x-1/2 z-0"></div>

                    <div className="space-y-12 relative z-10">
                        
                        {/* Feature 1 (كارت يمين - أيكون في النص - فاضي شمال) */}
                        <div dir='rtl' className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                            
                            {/* الموبايل بيظهر الكارت هنا عادي، في الديسكتوب الكارت ده بيبقى على اليمين */}
                            <div dir='rtl' className="order-2 md:order-1 ml-12 md:ml-0 md:text-right">
                                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/60 dark:bg-black/20 p-6 md:p-8 rounded-3xl border-2 border-mustard/20 shadow-sm relative">
                                    <h3 className={`${zain.className} text-3xl font-black text-mustard mb-3`}>جودة مستحيل تلاقيها بره</h3>
                                    <p className={`${zain.className} text-lg md:text-xl font-bold text-espresso/80 dark:text-cream/80`}>
                                        مكوناتنا بريميوم، اللحمة فريش والعيش مخبوز مخصوص ليك. لو دورت على الجودة دي في السوبر ماركت عشان تعملها بنفسك، هتكلفك أكتر بكتير.
                                    </p>
                                </motion.div>
                            </div>

                            {/* الأيقونة في النص */}
                            <div className="order-1 md:order-2 flex justify-end md:justify-center relative z-10 w-12 md:w-16 h-12 md:h-16">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-mustard rounded-full border-4 border-cream dark:border-espresso flex items-center justify-center shadow-lg">
                                    <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-espresso" />
                                </div>
                            </div>

                            {/* مساحة فاضية عشان نظبط بيها التصميم على الديسكتوب */}
                            <div className="hidden md:block order-3"></div>
                        </div>


                        {/* Feature 2 (فاضي يمين - أيكون في النص - كارت شمال) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                            
                            <div className="hidden md:block order-1"></div>

                            <div className="order-1 md:order-2 flex justify-end md:justify-center relative z-10 w-12 md:w-16 h-12 md:h-16">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-mustard rounded-full border-4 border-cream dark:border-espresso flex items-center justify-center shadow-lg">
                                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-espresso" />
                                </div>
                            </div>

                            <div className="order-2 md:order-3 ml-12 md:ml-0 md:text-right">
                                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/60 dark:bg-black/20 p-6 md:p-8 rounded-3xl border-2 border-mustard/20 shadow-sm relative">
                                    <h3 className={`${zain.className} text-3xl font-black text-mustard mb-3`}>وفر وقتك ومجهودك</h3>
                                    <p className={`${zain.className} text-lg md:text-xl font-bold text-espresso/80 dark:text-cream/80`}>
                                        بدل ما تلف تشتري مكونات وتحضر.. البوكس بيجيلك جاهز بمقادير موزونة بالميللي، كل اللي عليك تسوّي وتستمتع في دقايق.
                                    </p>
                                </motion.div>
                            </div>
                        </div>


                        {/* Feature 3 (كارت يمين - أيكون في النص - فاضي شمال) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                            
                            <div className="order-2 md:order-1 ml-12 md:ml-0 md:text-right">
                                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/60 dark:bg-black/20 p-6 md:p-8 rounded-3xl border-2 border-mustard/20 shadow-sm relative">
                                    <h3 className={`${zain.className} text-3xl font-black text-mustard mb-3`}>أنت الشيف المحترف</h3>
                                    <p className={`${zain.className} text-lg md:text-xl font-bold text-espresso/80 dark:text-cream/80`}>
                                        متعة إنك تاكل البرجر متفصل بالطعم اللي انت بتحبه فريش، لا تقارن بالديليفري اللي بيوصل بارد أو طعمه متغير.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="order-1 md:order-2 flex justify-end md:justify-center relative z-10 w-12 md:w-16 h-12 md:h-16">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-mustard rounded-full border-4 border-cream dark:border-espresso flex items-center justify-center shadow-lg">
                                    <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-espresso" />
                                </div>
                            </div>

                            <div className="hidden md:block order-3"></div>
                        </div>

                        {/* Feature 4 الكارت الجديد (فاضي يمين - أيكون في النص - كارت شمال) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                            
                            <div className="hidden md:block order-1"></div>

                            <div className="order-1 md:order-2 flex justify-end md:justify-center relative z-10 w-12 md:w-16 h-12 md:h-16">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-mustard rounded-full border-4 border-cream dark:border-espresso flex items-center justify-center shadow-lg">
                                    <Star className="w-6 h-6 md:w-8 md:h-8 text-espresso" />
                                </div>
                            </div>

                            <div className="order-2 md:order-3 ml-12 md:ml-0 md:text-right">
                                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/60 dark:bg-black/20 p-6 md:p-8 rounded-3xl border-2 border-mustard/20 shadow-sm relative">
                                    <h3 className={`${zain.className} text-3xl font-black text-mustard mb-3`}> مفهوم جديد للبرجر </h3>
                                    <p className={`${zain.className} text-lg md:text-xl font-bold text-espresso/80 dark:text-cream/80`}>
                                         تجربة مختلفة... طعم مختلف يخليك تستمتع بكل قطمة على مزاجك!
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* =====================================================
                    4. Comparison Table (Us vs Them)
                ===================================================== */}
                <div className="max-w-5xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        
                        {/* The Ordinary Way */}
                        <div className="bg-espresso/5 dark:bg-white/5 rounded-3xl p-6 md:p-8 border border-espresso/10 dark:border-white/10">
                            <h4 className={`${zain.className} text-2xl font-black text-center text-espresso/60 dark:text-cream/60 mb-6 bg-espresso/10 dark:bg-white/10 py-3 rounded-full`}>
                                الأكل العادي / الديليفري
                            </h4>
                            <ul className={`${zain.className} space-y-5 text-lg md:text-xl font-bold text-espresso/80 dark:text-cream/80`}>
                                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> وقت طويل في التحضير أو انتظار الطلب</li>
                                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> الديليفري بيوصل بارد أو العيش بايش</li>
                                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> تكلفة أعلى لو هتشتري المكونات بنفسك</li>
                                <li className="flex items-center gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0" /> جودة اللحوم والمكونات غير مضمونة</li>
                            </ul>
                        </div>

                        {/* Tasty & Delicious */}
                        <div className="bg-mustard/20 dark:bg-mustard/10 rounded-3xl p-6 md:p-8 border-2 border-mustard relative transform md:-translate-y-4 shadow-xl">
                            <div className={`${zain.className} absolute -top-4 left-1/2 -translate-x-1/2 bg-mustard text-espresso font-black px-5 py-1.5 rounded-full text-sm md:text-base shadow-md flex items-center gap-2`}>
                                <Sparkles className="w-4 h-4 md:w-5 md:h-5" /> الخيار الأذكى
                            </div>
                            <h4 className={`${zain.className} text-3xl font-black text-center text-espresso dark:text-mustard mb-6 bg-mustard/30 py-3 rounded-full mt-2`}>
                                Tasty & Delicious
                            </h4>
                            <ul className={`${zain.className} space-y-5 text-lg md:text-xl font-black text-espresso dark:text-cream`}>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" /> مكونات جاهزة وموزونة بدقة</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" /> لحوم طازجة وجودة 100% مضمونة</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" /> أوفر وأسهل من عمايل البيت</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" /> أنت الشيف.. أكل سخن بمزاجك</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    5. Order Steps
                ===================================================== */}
                <div className="bg-[#edd0b9]/30 dark:bg-black/30 rounded-3xl p-8 md:p-12 border-2 border-mustard/20">
                    <h3 className={`${zain.className} text-4xl font-black text-center text-espresso dark:text-cream mb-12`}>
                        إزاي تطلب وجبتك؟
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 text-center relative">
                        {/* Hidden line connecting steps on desktop */}
                        <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 border-t-2 border-dashed border-mustard/40 z-0"></div>

                        {[
                            { step: '01', icon: Store, title: 'اختار وجبتك', desc: 'نقّي البوكس اللي يعجبك من المينيو' },
                            { step: '02', icon: Truck, title: 'هنوصلك بسرعة', desc: 'مكوناتك هتوصلك فريش لحد الباب' },
                            { step: '03', icon: Utensils, title: 'سوّيها بمزاجك', desc: 'في دقايق معدودة بطريقتك المفضلة' },
                            { step: '04', icon: ShoppingBag, title: 'استمتع بالطعم', desc: 'أحلى برجر مطاعم من عمايل إيديك' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-cream dark:bg-espresso border-2 border-mustard flex items-center justify-center mb-5 relative shadow-md">
                                    <item.icon className="w-10 h-10 text-espresso dark:text-mustard" />
                                    <span className={`${zain.className} absolute -bottom-2 -right-2 bg-mustard dark:bg-espresso text-espresso dark:text-mustard text-sm font-black w-8 h-8 rounded-full flex items-center justify-center border-2 border-cream dark:border-espresso`}>
                                        {item.step}
                                    </span>
                                </div>
                                <h4 className={`${zain.className} font-black text-2xl text-espresso dark:text-cream mb-2`}>{item.title}</h4>
                                <p className={`${zain.className} text-lg font-bold text-espresso/70 dark:text-cream/70 leading-tight`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;