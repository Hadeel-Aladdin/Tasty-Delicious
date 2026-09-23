'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Crown,
    Plus,
    Minus,
    ShoppingBag,
} from 'lucide-react';

import { Aref_Ruqaa, Zain } from 'next/font/google';

import { boxes } from '@/data/box';
import type { Box } from '@/types/product';

const aref = Aref_Ruqaa({
    weight: ['400', '700'],
    subsets: ['arabic'],
});

const zain = Zain({
    weight: ['400', '700', '800'],
    subsets: ['arabic'],
});


/* =====================================================
    Ingredient icons
===================================================== */

function getIngredientIcon(item: string) {
    const value = item.toLowerCase();

    // Sauces & Cheese
    if (
        value.includes('صوص') ||
        value.includes('مايونيز') ||
        value.includes('كاتشب') ||
        value.includes('جبنة') ||
        value.includes('جبن') ||
        value.includes('شيدر')
    ) {
        return '/sauce.png';
    }

    // Bun
    if (
        value.includes('خبز') ||
        value.includes('بريوش') ||
        value.includes('عيش')
    ) {
        return '/bun.png';
    }

    // All Burgers (Beef & Chicken)
    if (
        value.includes('فراخ') ||
        value.includes('دجاج') ||
        value.includes('تشيكن') ||
        value.includes('كوردن') ||
        value.includes('cordon') ||
        value.includes('لحم') ||
        value.includes('برجر')
    ) {
        return '/burger.png';
    }

    // Pickles
    if (
        value.includes('مخلل') ||
        value.includes('خيار')
    ) {
        return '/pickle.png';
    }

    // Jalapeno / spicy
    if (
        value.includes('هالوبينو') ||
        value.includes('هالبينو') ||
        value.includes('حار')
    ) {
        return '/spicy.png';
    }

    // Default icon just in case
    return '/burger.png';
}


/* =====================================================
    Sanitize order notes
===================================================== */

const MAX_NOTES_LENGTH = 250;

function sanitizeNotes(value: string): string {
    return value
        // strip links (http://, https://, www.)
        .replace(/(https?:\/\/|www\.)\S+/gi, '')
        // strip anything that looks like an HTML/script tag
        .replace(/<[^>]*>/g, '')
        // collapse repeated whitespace/newlines from pasted text
        .replace(/\s{2,}/g, ' ')
        .slice(0, MAX_NOTES_LENGTH);
}


/* =====================================================
    Menu Section
===================================================== */

export default function MenuSection() {

    const [selectedBox, setSelectedBox] = useState<Box>(boxes[0]);
    const [quantity, setQuantity] = useState<number>(1);

    // Customer notes for the order
    const [orderNotes, setOrderNotes] = useState('');

    // Tracks whether the user has actively picked a box,
    // so the box image only locks in after a real selection
    const [isSelectedBox, setIsSelectedBox] = useState<boolean>(false);


    /* =====================================================
        Quantity
    ===================================================== */

    const handleQuantity = (type: 'inc' | 'dec') => {
        if (type === 'dec' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }

        if (type === 'inc') {
            setQuantity((prev) => prev + 1);
        }
    };


    /* =====================================================
        Box categorization
    ===================================================== */

    const beefBoxes = [
        boxes.find((box) => box.id === 'classic-box'),
        boxes.find((box) => box.id === 'volcano-box'),
        boxes.find((box) => box.id === 'matching-box'),
    ].filter((box): box is Box => Boolean(box));


    const chickenBoxes = [
        boxes.find((box) => box.id === 'grill-cordon-box'),
        boxes.find((box) => box.id === 'fried-cordon-box'),
        boxes.find((box) => box.id === 'cordon-mix-box'),
    ].filter((box): box is Box => Boolean(box));


    const mixBoxes = [
        boxes.find((box) => box.id === 'bbq-box'),
        boxes.find((box) => box.id === 'T&D box'),
    ].filter((box): box is Box => Boolean(box));


    /* =====================================================
        Current box contents
    ===================================================== */

    const boxContentsList = Object.values(
        selectedBox.contents
    ).filter(
        (val): val is string => Boolean(val)
    );


    /* =====================================================
        WhatsApp order message
    ===================================================== */

    const whatsappText = encodeURIComponent(
        `أهلاً، عايز أطلب أوردر:
        - ${selectedBox.name}
        - العدد: ${quantity}
        - الإجمالي: ${selectedBox.price * quantity} ج.م
        - ملاحظات: ${orderNotes.trim() || 'لا توجد ملاحظات'}`
    );


    /* =====================================================
        Select box
    ===================================================== */

    const selectBox = (box: Box) => {
        setSelectedBox(box);
        setQuantity(1);
        setOrderNotes('');
        setIsSelectedBox(true);
    };



    /* =====================================================
        Box Selector
    ===================================================== */

    const BoxSelector = ({ box }: { box: Box }) => {
        // Only count as "selected" once the user has actually
        // picked a box — otherwise nothing looks pre-chosen
        const isSelected = isSelectedBox && selectedBox.id === box.id;
        const isVolcano = box.id === 'volcano-box';
        const isSpecial = box.id === 'T&D box';

        const displayName = box.name
            .replace(/box|بوكس/gi, '')
            .trim();

        // Single, longer names (like "Matching") don't have a
        // natural line-break point — shrink them to fit on one line
        const isSingleLongWord = !displayName.includes(' ') && displayName.length > 6;

        // Every box shares the same light/dark colors, selected or not —
        // only T&D gets a distinct, special treatment
        const textColorClass = isSpecial
            ? isSelected
                ? 'text-cream'
                : 'text-mustard'
            : 'text-espresso';


        return (
            <button
                key={box.id}
                onClick={() => selectBox(box)}
                title={box.name}
                className={`
                    relative
                    w-13 h-13
                    md:w-[65px] md:h-[65px]
                    rounded-full
                    border-2
                    transition-all
                    duration-200
                    shrink-0
                    flex
                    items-center
                    justify-center
                    p-0.5
                    text-center
                    ${aref.className}

                    ${isSelected
                        ? 'scale-110 shadow-md ring-2 bg-white/60 dark:bg-peach ring-espresso/20 dark:ring-cream/20'
                        : 'hover:scale-105'
                    }

                    ${isSpecial
                        ? isSelected
                            ? 'border-mustard bg-mustard'
                            : 'border-mustard/60 bg-mustard/30'
                        : isSelected
                            ? 'border-mustard bg-cream'
                            : 'border-mustard/40 bg-cream/20'
                    }
                `}
            >

                <span
                    className={`
                        w-full
                        ${textColorClass}
                        dark:text-mustard
                        font-bold
                        leading-[1.1]
                        ${isSingleLongWord
                            ? 'text-[10px] md:text-[12px] whitespace-nowrap'
                            : 'text-[9px] md:text-[12px] break-words hyphens-auto'
                        }
                    `}
                >
                    {displayName}
                </span>


                {/* Volcano */}
                {isVolcano && (
                    <div className="absolute -top-3 -left-1 w-6 h-7 rounded-xl flex items-center justify-center z-10">
                        <Image
                            src="/cheese.png"
                            alt="Melted cheese"
                            fill
                            sizes="25px"
                            className="object-contain"
                        />
                    </div>
                )}


                {/* T&D */}
                {isSpecial && (
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-mustard flex items-center justify-center shadow-sm z-10"
                    >
                        <Crown
                            className="w-2.5 h-2.5 text-espresso"
                            fill="#553e2b"
                        />
                    </motion.div>
                )}

            </button>
        );
    };


    return (
        <>

            {/* =====================================================
                Menu Intro
            ===================================================== */}

            <div
                id="menu"
                dir='rtl'
                className="
                    bg-cream
                    dark:bg-espresso
                    w-full
                    px-5
                    pt-30
                    pb-8
                    text-center
                "
            >
                <div className="max-w-3xl mx-auto">

                    <h2
                        className={`
                            ${zain.className}
                            text-4xl
                            md:text-5xl
                            font-bold
                            text-espresso
                            dark:text-cream
                            mb-8
                        `}
                    >
                        المنيو والبوكسات
                    </h2>


                    <div
                        className={`
                            ${zain.className}
                            text-base
                            md:text-lg
                            leading-8
                            text-espresso/75
                            dark:text-cream/75
                        `}
                    >
                        <p>
                            كل بوكس فيه المكونات والصوصات اللي بتوفرلك تجربة مختلفة
                            عشان تعمل برجر على مزاجك،
                            كل اللي ناقصه هو التسوية بالطريقة اللي تحبها.
                        </p>

                        <p>
                            مكوناتك بتوصلك طازة ومحافظة على حرارتها،
                            لأن كل بوكس بيجيلك جوه
                            <span className="font-bold text-mustard ml-1">
                                {' '}Cooling Bag
                            </span>
                            مخصوص يحافظ عليه لحد ما يوصل لك
                            <span className='text-mustard'> خلال 24 ساعة </span>
                            عشان تبدأ تختار هتعمل كل ساندوتش ازاي بالصوصات اللي تنقيها والمخلل اللي تحبه.
                        </p>
                    </div>

                </div>
            </div>


            {/* =====================================================
                Main Menu
            ===================================================== */}

            <div
                id="menuBoxes"
                dir="rtl"
                className="
                    bg-cream
                    dark:bg-espresso
                    overflow-x-hidden
                    scroll-mt-20
                    w-full min-h-[100dvh]
                    min-h-screen
                    lg:min-h-screen
                    px-2
                    md:px-6
                    py-6
                    lg:py-8
                "
            >

                <div
                    className="
                        max-w-[1440px]
                        w-full
                        mx-auto
                        grid
                        grid-cols-1
                        lg:grid-cols-12
                        gap-8
                        lg:gap-10
                        items-center
                    "
                >


                    {/* =====================================================
                        Boxes Photos
                    ===================================================== */}

                    <div
                        className="
                            order-1
                            lg:order-2
                            lg:col-span-5
                            flex
                            flex-col
                            items-center
                            justify-center
                            relative
                            w-full
                        "
                    >

                        {isSelectedBox ? (
                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={`${selectedBox.id}-stack`}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    transition={{
                                        duration: 0.32,
                                        ease: 'easeInOut',
                                    }}
                                    className="
                                        relative
                                        w-full
                                        max-w-[360px]
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        py-4
                                        md:py-6
                                    "
                                >

                                    {/* Sandwich Image */}

                                    <div
                                        className="
                                            relative
                                            w-[300px]
                                            h-[300px]
                                            md:w-[450px]
                                            md:h-[450px]
                                        "
                                        style={{
                                            zIndex: 1,
                                        }}
                                    >

                                        <Image
                                            src={selectedBox.image.image}
                                            alt={selectedBox.image.alt}
                                            fill
                                            priority
                                            sizes="500px"
                                            className="object-contain"
                                        />

                                    </div>

                                </motion.div>

                            </AnimatePresence>
                        ) : (
                            // Simple prompt shown until the user
                            // actually picks a box — no image at all
                            <div
                                className="
                                    relative
                                    w-full
                                    max-w-[360px]
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    py-4
                                    md:py-6
                                "
                            >
                                <div
                                    className="
                                        relative
                                        w-[300px]
                                        h-[300px]
                                        md:w-[450px]
                                        md:h-[450px]
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-4
                                    "
                                >
                                    <ShoppingBag
                                        className="
                                            w-14 h-14
                                            md:w-20 md:h-20
                                            text-espresso/25
                                            dark:text-cream/25
                                        "
                                    />

                                    <p
                                        className={`
                                            ${zain.className}
                                            text-center
                                            text-base
                                            md:text-lg
                                            font-bold
                                            text-espresso/60
                                            dark:text-cream/60
                                            px-6
                                        `}
                                    >
                                        اختار بوكس من القايمة
                                    </p>
                                </div>
                            </div>
                        )}


                        {/* Under Burger */}

                        <div
                            className={`
                                text-center
                                text-espresso
                                dark:text-cream
                                ${zain.className}
                                mt-1
                                md:mt-4
                            `}
                        >
                            <p className="text-md md:text-lg text-espresso/70 dark:text-cream/70 font-bold">
                                البوكس للعرض فقط، الاكل بيجيلك في cooling bag
                            </p>
                        </div>

                    </div>


                    {/* =====================================================
                        Box Information
                    ===================================================== */}

                    <div
                        className="
                            order-2
                            lg:order-1
                            lg:col-span-7
                            flex
                            flex-col
                            justify-between
                            h-auto
                            space-y-6
                            w-full
                        "
                    >

                        <AnimatePresence mode="wait">

                            {isSelectedBox ? (
                                <motion.div
                                    key={`${selectedBox.id}-info`}
                                    initial={{
                                        opacity: 0,
                                        y: 12,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -12,
                                    }}
                                    transition={{
                                        duration: 0.28,
                                        ease: 'easeInOut',
                                    }}
                                    className="space-y-3"
                                >

                                    {/* Box Title */}

                                    <div className="flex items-center gap-3 flex-wrap">

                                        <h2
                                            className={`
                                                ${aref.className}
                                                text-3xl
                                                sm:text-4xl
                                                md:text-5xl
                                                text-espresso
                                                dark:text-cream
                                                font-bold
                                            `}
                                        >
                                            {selectedBox.name}
                                        </h2>


                                        {/* Volcano */}

                                        {selectedBox.id === 'volcano-box' && (
                                            <span
                                                className="
                                                    bg-mustard/40
                                                    text-espresso
                                                    font-bold
                                                    text-xs
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    gap-1
                                                    shadow
                                                "
                                            >
                                                محشي جبنة

                                                <span className="w-7 h-7 relative shrink-0">
                                                    <Image
                                                        src="/cheese.png"
                                                        alt="Cheese"
                                                        fill
                                                        sizes="28px"
                                                        className="object-contain"
                                                    />
                                                </span>
                                            </span>
                                        )}


                                        {/* T&D */}

                                        {selectedBox.id === 'T&D box' && (
                                            <span
                                                className="
                                                    bg-mustard
                                                    text-espresso
                                                    text-xs
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    gap-1
                                                    shadow
                                                    font-bold
                                                "
                                            >
                                                <Crown
                                                    className="w-3.5 h-3.5"
                                                    fill="#553e2b"
                                                />

                                                Bestseller
                                            </span>
                                        )}

                                    </div>


                                    {/* Description */}

                                    <p
                                        className={`
                                            ${zain.className}
                                            text-lg
                                            md:text-xl
                                            text-espresso/80
                                            dark:text-cream/80
                                        `}
                                    >
                                        {selectedBox.description}
                                    </p>


                                    {/* =====================================================
                                        Box Contents
                                    ===================================================== */}

                                    <div
                                        className="
                                            grid
                                            grid-cols-1
                                            sm:grid-cols-2
                                            gap-2.5
                                            pt-1
                                        "
                                    >

                                        {boxContentsList.map((item, index) => {

                                            const iconPath = getIngredientIcon(item);

                                            return (
                                                <div
                                                    key={`${selectedBox.id}-content-${index}`}
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        bg-[#edd0b9]/40
                                                        dark:bg-cream/5
                                                        px-3.5
                                                        py-2
                                                        rounded-xl
                                                        border
                                                        border-espresso/5
                                                        dark:border-cream/10
                                                        min-w-0
                                                    "
                                                >

                                                    <div className="relative w-6 h-6 shrink-0">
                                                        <Image
                                                            src={iconPath}
                                                            alt={item}
                                                            fill
                                                            sizes="24px"
                                                            className="object-contain drop-shadow-sm"
                                                        />
                                                    </div>

                                                    <span
                                                        className={`
                                                            ${zain.className}
                                                            text-base
                                                            md:text-lg
                                                            font-bold
                                                            text-espresso
                                                            dark:text-cream
                                                            leading-tight
                                                        `}
                                                    >
                                                        {item}
                                                    </span>

                                                </div>
                                            );
                                        })}

                                    </div>

                                </motion.div>
                            ) : (
                                // Placeholder shown until the user picks a box —
                                // no box details are revealed before a real selection
                                <motion.div
                                    key="info-placeholder"
                                    initial={{
                                        opacity: 0,
                                        y: 12,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -12,
                                    }}
                                    transition={{
                                        duration: 0.28,
                                        ease: 'easeInOut',
                                    }}
                                    className="space-y-3"
                                >

                                    <h2
                                        className={`
                                            ${zain.className}
                                            text-3xl
                                            sm:text-4xl
                                            md:text-5xl
                                            text-espresso
                                            dark:text-cream
                                            font-bold
                                        `}
                                    >
                                        اختار البوكس اللي يعجبك
                                    </h2>

                                    <p
                                        className={`
                                            ${zain.className}
                                            text-lg
                                            md:text-xl
                                            text-espresso/70
                                            dark:text-cream/70
                                        `}
                                    >
                                        هتلاقي هنا تفاصيل البوكس، المكونات، والسعر
                                    </p>

                                </motion.div>
                            )}

                        </AnimatePresence>


                        {/* =====================================================
                            Box Selectors
                        ===================================================== */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                flex-wrap
                            "
                        >

                            {/* Beef */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-[#edd0b9]/20
                                    dark:bg-cream/5
                                    p-2
                                    rounded-2xl
                                    border
                                    border-espresso/5
                                    dark:border-cream/10
                                "
                            >

                                <div className="w-7 h-7 relative shrink-0">
                                    <Image
                                        src="/beef-icon-2.png"
                                        alt="Beef"
                                        fill
                                        sizes="28px"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {beefBoxes.map((box) => (
                                        <BoxSelector
                                            key={box.id}
                                            box={box}
                                        />
                                    ))}
                                </div>

                            </div>


                            {/* Chicken */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-[#edd0b9]/20
                                    dark:bg-cream/5
                                    p-2
                                    rounded-2xl
                                    border
                                    border-espresso/5
                                    dark:border-cream/10
                                "
                            >

                                <div className="w-7 h-7 relative shrink-0">
                                    <Image
                                        src="/chicken-icon.png"
                                        alt="Chicken"
                                        fill
                                        sizes="28px"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {chickenBoxes.map((box) => (
                                        <BoxSelector
                                            key={box.id}
                                            box={box}
                                        />
                                    ))}
                                </div>

                            </div>


                            {/* Mix */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    bg-[#edd0b9]/20
                                    dark:bg-cream/5
                                    p-2
                                    rounded-2xl
                                    border
                                    border-espresso/5
                                    dark:border-cream/10
                                "
                            >

                                <div className="w-7 h-7 relative shrink-0">
                                    <Image
                                        src="/mix.png"
                                        alt="Mix"
                                        fill
                                        sizes="28px"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {mixBoxes.map((box) => (
                                        <BoxSelector
                                            key={box.id}
                                            box={box}
                                        />
                                    ))}
                                </div>

                            </div>

                        </div>


                        {/* =====================================================
                            Order Notes
                        ===================================================== */}

                        <div className="w-full">

                            <label
                                htmlFor="order-notes"
                                className={`
                                    ${zain.className}
                                    block
                                    text-lg
                                    font-bold
                                    text-espresso
                                    dark:text-cream
                                    mb-2
                                `}
                            >
                                عندك أي ملاحظات على الأوردر؟
                            </label>

                            <textarea
                                id="order-notes"
                                value={orderNotes}
                                onChange={(e) =>
                                    setOrderNotes(sanitizeNotes(e.target.value))
                                }
                                maxLength={MAX_NOTES_LENGTH}
                                rows={3}
                                placeholder="مثلا: عايز استلمه الصبح أو معاد معين"
                                className={`
                                    ${zain.className}
                                    w-full
                                    resize-none
                                    rounded-2xl
                                    border
                                    border-espresso/10
                                    dark:border-cream/10
                                    bg-[#edd0b9]/30
                                    dark:bg-cream/5
                                    px-4
                                    py-3
                                    text-base
                                    md:text-lg
                                    text-espresso
                                    dark:text-cream
                                    placeholder:text-espresso/45
                                    dark:placeholder:text-cream/45
                                    outline-none
                                    focus:border-mustard
                                    focus:ring-2
                                    focus:ring-mustard/20
                                    transition-all
                                `}
                            />

                        </div>


                        {/* =====================================================
                            Quantity + Order
                        ===================================================== */}

                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                items-stretch
                                sm:items-center
                                gap-3
                                pt-2
                            "
                        >

                            {/* Quantity */}

                            <div
                                className={`
                                    flex
                                    items-center
                                    justify-center
                                    bg-mustard
                                    text-espresso
                                    rounded-full
                                    p-1
                                    shadow-inner
                                    border
                                    border-espresso/10
                                    self-center
                                    sm:self-auto
                                    transition-opacity
                                    duration-200
                                    ${!isSelectedBox ? 'opacity-50 pointer-events-none' : ''}
                                `}
                            >

                                <button
                                    onClick={() =>
                                        handleQuantity('inc')
                                    }
                                    disabled={!isSelectedBox}
                                    aria-label="زيادة الكمية"
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-white/60
                                        hover:bg-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        transition-colors
                                        duration-200
                                    "
                                >
                                    <Plus
                                        className="w-4 h-4 text-espresso"
                                    />
                                </button>


                                <span
                                    className={`
                                        ${zain.className}
                                        text-2xl
                                        font-black
                                        px-4
                                    `}
                                >
                                    {quantity}
                                </span>


                                <button
                                    onClick={() =>
                                        handleQuantity('dec')
                                    }
                                    disabled={!isSelectedBox}
                                    aria-label="تقليل الكمية"
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-white/60
                                        hover:bg-white
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        transition-colors
                                        duration-200
                                    "
                                >
                                    <Minus
                                        className="w-4 h-4 text-espresso"
                                    />
                                </button>

                            </div>


                            {/* WhatsApp */}

                            {isSelectedBox ? (
                                <a
                                    href={`https://wa.me/201228134545?text=${whatsappText}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        bg-mustard
                                        hover:bg-[#d99f3b]
                                        text-espresso
                                        px-6
                                        sm:px-8
                                        py-3
                                        rounded-full
                                        font-bold
                                        shadow-md
                                        ${zain.className}
                                        text-lg
                                        md:text-xl
                                        flex-1
                                        transition-all
                                        duration-200
                                        hover:scale-[1.01]
                                    `}
                                >

                                    <ShoppingBag className="w-5 h-5" />

                                    <span>
                                        اطلب الآن
                                    </span>

                                    <span className="text-base opacity-85">
                                        ({selectedBox.price * quantity} ج.م)
                                    </span>

                                </a>
                            ) : (
                                <button
                                    type="button"
                                    disabled
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        bg-mustard/40
                                        text-espresso/60
                                        px-6
                                        sm:px-8
                                        py-3
                                        rounded-full
                                        font-bold
                                        cursor-not-allowed
                                        ${zain.className}
                                        text-lg
                                        md:text-xl
                                        flex-1
                                    `}
                                >

                                    <span>
                                        هيظهر السعر بعد الاختيار
                                    </span>

                                </button>
                            )}

                        </div>


                        {/* Delivery note */}

                        <p
                            className={`
                                ${zain.className}
                                text-center
                                sm:text-right
                                text-sm
                                md:text-base
                                text-espresso/60
                                dark:text-cream/60
                                -mt-1
                            `}
                        >
                            استلم أوردرك خلال 24 ساعة من تأكيد الطلب
                        </p>

                    </div>

                </div>

            </div>

        </>
    );
}