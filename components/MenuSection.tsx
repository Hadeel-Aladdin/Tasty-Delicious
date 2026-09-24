'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Crown,
    Plus,
    Minus,
    ShoppingBag,
    Trash2,
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
    Order types
===================================================== */

type CartLine = {
    id: string;
    quantity: number;
};


/* =====================================================
    Menu Section
===================================================== */

// If the visitor leaves the tab / app for at least this long and comes back
// without having added anything to the order, the menu starts fresh.
// Set it to 0 to reset on every return.
const RESET_AFTER_AWAY_MS = 5 * 60 * 1000;

export default function MenuSection() {

    const [selectedBox, setSelectedBox] = useState<Box>(boxes[0]);
    // Quantity for the box currently being viewed (before adding it to the order)
    const [quantity, setQuantity] = useState<number>(1);

    // The order: every box the customer has added, with its own quantity
    const [cart, setCart] = useState<CartLine[]>([]);

    // Customer notes for the order
    const [orderNotes, setOrderNotes] = useState('');

    // Tracks whether the user has actively picked a box,
    // so the box image only locks in after a real selection
    const [isSelectedBox, setIsSelectedBox] = useState<boolean>(false);


    /* =====================================================
        Fresh start on return (only while the order is empty)
    ===================================================== */

    useEffect(() => {
        // Once something is in the order, leave everything as it is
        if (cart.length > 0) return;

        let hiddenAt: number | null = null;

        const resetMenu = () => {
            setSelectedBox(boxes[0]);
            setIsSelectedBox(false);
            setQuantity(1);
            setOrderNotes('');
        };

        // Tab / app comes back to the foreground after a while
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                hiddenAt = Date.now();
                return;
            }

            if (hiddenAt !== null && Date.now() - hiddenAt >= RESET_AFTER_AWAY_MS) {
                resetMenu();
            }

            hiddenAt = null;
        };

        // The page is restored from the browser's back/forward cache
        // (e.g. the visitor left the site and pressed Back)
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted) resetMenu();
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('pageshow', handlePageShow);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, [cart.length]);


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
        Order (cart) handlers
    ===================================================== */

    // Adds the selected box with the chosen quantity.
    // If the box is already in the order, its quantity is increased.
    const addToCart = () => {
        if (!isSelectedBox) return;

        setCart((prev) => {
            const existing = prev.find((line) => line.id === selectedBox.id);

            if (existing) {
                return prev.map((line) =>
                    line.id === selectedBox.id
                        ? { ...line, quantity: line.quantity + quantity }
                        : line
                );
            }

            return [...prev, { id: selectedBox.id, quantity }];
        });

        // Ready to pick the next box
        setQuantity(1);
    };

    const updateCartQuantity = (id: string, delta: 1 | -1) => {
        setCart((prev) =>
            prev.map((line) =>
                line.id === id
                    ? { ...line, quantity: Math.max(1, line.quantity + delta) }
                    : line
            )
        );
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((line) => line.id !== id));
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
        Order summary (resolved from the cart)
    ===================================================== */

    const cartItems = cart
        .map((line) => {
            const box = boxes.find((b) => b.id === line.id);
            return box ? { box, quantity: line.quantity } : null;
        })
        .filter((item): item is { box: Box; quantity: number } => item !== null);

    const cartTotal = cartItems.reduce(
        (sum, item) => sum + item.box.price * item.quantity,
        0
    );


    /* =====================================================
        WhatsApp order message
    ===================================================== */

    const whatsappText = encodeURIComponent(
        [
            'أهلاً، عايز أطلب أوردر:',
            ...cartItems.map(
                (item) =>
                    `- ${item.box.name} (العدد: ${item.quantity}) = ${item.box.price * item.quantity} ج.م`
            ),
            `- الإجمالي: ${cartTotal} ج.م`,
            `- ملاحظات: ${orderNotes.trim() || 'لا توجد ملاحظات'}`,
        ].join('\n')
    );


    /* =====================================================
        Select box
    ===================================================== */

    const selectBox = (box: Box) => {
        setSelectedBox(box);
        setQuantity(1);
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

        // How many of this box are already in the order
        const cartQty = cart.find((line) => line.id === box.id)?.quantity ?? 0;

        const displayName = box.name
            .replace(/box|بوكس/gi, '')
            .trim();

        // Single, longer names (like "Matching") don't have a
        // natural line-break point — shrink them to fit on one line
        const isSingleLongWord = !displayName.includes(' ') && displayName.length > 6;

        // Very long single words (like "Matching") need an even smaller mobile size
        // so they stay inside the circle
        const isExtraLongWord = isSingleLongWord && displayName.length > 7;

        // Every box shares the same light/dark colors, selected or not —
        // only T&D gets a distinct, special treatment
        const textColorClass = isSpecial
            ? isSelected
                ? 'text-espresso'
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
                        ? 'scale-110 shadow-md ring-2 ring-espresso/20 dark:ring-cream/20'
                        : 'hover:scale-105'
                    }

                    ${isSpecial
                        ? isSelected
                            ? 'border-mustard bg-mustard dark:bg-peach'
                            : 'border-mustard/60 bg-mustard/30'
                        : isSelected
                            ? 'border-mustard bg-cream bg-white/60 dark:bg-peach'
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
                            ? `${isExtraLongWord ? 'text-[8px]' : 'text-[10px]'} md:text-[12px] whitespace-nowrap`
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


                {/* Count of this box already in the order */}
                {cartQty > 0 && (
                    <span
                        className={`
                            ${zain.className}
                            absolute
                            -bottom-1
                            -right-1
                            min-w-5
                            h-5
                            px-1
                            rounded-full
                            bg-espresso
                            text-cream
                            dark:bg-mustard
                            dark:text-espresso
                            text-[11px]
                            font-black
                            flex
                            items-center
                            justify-center
                            border-2
                            border-cream
                            dark:border-espresso
                            shadow-sm
                            z-10
                        `}
                    >
                        {cartQty}
                    </span>
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
                            مخصوص يحافظ عليه لحد ما يوصل لك عشان تبدأ تختار هتعمل كل ساندوتش ازاي بالصوصات اللي تنقيها والمخلل اللي تحبه.
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
                        gap-6
                        lg:gap-10
                        items-center
                    "
                >


                    {/* =====================================================
                        Boxes Photos
                    ===================================================== */}

                    <div
                        className="
                            order-2
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
                                            className="object-contain pointer-events-none"
                                            draggable= "false"
                                            onContextMenu={(e)=> e.preventDefault()}
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

                    {/* 
                        Mobile / tablet: this wrapper uses `display: contents`, so its children
                        become direct grid items and are ordered with the `order-*` classes:
                        1 selectors, 2 photo, 3 title + description + contents,
                        4 add to order, 5 order summary, 6 notes, 7 order button, 8 delivery note.
                        Desktop (lg+): a normal flex column, DOM order is kept (`lg:order-none`).
                    */}

                    <div
                        className="
                            contents
                            lg:flex
                            lg:order-1
                            lg:col-span-7
                            lg:flex-col
                            lg:justify-between
                            h-auto
                            lg:space-y-6
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
                                    className="space-y-3 order-3 lg:order-none"
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
                                            grid-cols-2
                                            gap-2
                                            sm:gap-2.5
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
                                                        px-2.5
                                                        sm:px-3.5
                                                        py-2
                                                        rounded-xl
                                                        border
                                                        border-espresso/5
                                                        dark:border-cream/10
                                                        min-w-0
                                                    "
                                                >

                                                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
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
                                                            text-sm
                                                            sm:text-base
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
                                    className="space-y-3 order-3 lg:order-none"
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
                                order-1
                                lg:order-none
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
                            Add to order (quantity + add button)
                        ===================================================== */}

                        <div
                            className="
                                order-4
                                lg:order-none
                                flex
                                flex-col
                                sm:flex-row
                                items-stretch
                                sm:items-center
                                gap-3
                                pt-2
                            "
                        >

                            {/* Quantity of the selected box */}

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


                            {/* Add to order */}

                            <button
                                type="button"
                                onClick={addToCart}
                                disabled={!isSelectedBox}
                                className={`
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    border-2
                                    border-mustard
                                    text-espresso
                                    dark:text-cream
                                    px-6
                                    sm:px-8
                                    py-3
                                    rounded-full
                                    font-bold
                                    ${zain.className}
                                    text-lg
                                    md:text-xl
                                    flex-1
                                    transition-all
                                    duration-200
                                    ${isSelectedBox
                                        ? 'hover:bg-mustard/20 active:scale-[0.99]'
                                        : 'opacity-50 cursor-not-allowed'
                                    }
                                `}
                            >

                                <span>
                                    {isSelectedBox ? 'ضيف للأوردر' : 'اختار بوكس الأول'}
                                </span>

                                {isSelectedBox && (
                                    <span className="text-base opacity-85">
                                        ({selectedBox.price * quantity} ج.م)
                                    </span>
                                )}

                            </button>

                        </div>


                        {/* =====================================================
                            Order Summary (every box added so far)
                        ===================================================== */}

                        <AnimatePresence initial={false}>

                            {cartItems.length > 0 && (
                                <motion.div
                                    key="order-summary"
                                    initial={{
                                        opacity: 0,
                                        height: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        height: 'auto',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: 'easeInOut',
                                    }}
                                    className="overflow-hidden order-5 lg:order-none"
                                >

                                    <div
                                        className="
                                            bg-[#edd0b9]/20
                                            dark:bg-cream/5
                                            rounded-2xl
                                            border
                                            border-espresso/5
                                            dark:border-cream/10
                                            p-3
                                            md:p-4
                                        "
                                    >

                                        <h3
                                            className={`
                                                ${zain.className}
                                                text-lg
                                                md:text-xl
                                                font-bold
                                                text-espresso
                                                dark:text-cream
                                                mb-1
                                            `}
                                        >
                                            أوردرك
                                        </h3>


                                        <ul className="divide-y divide-espresso/10 dark:divide-cream/10">

                                            {cartItems.map(({ box, quantity: lineQuantity }) => (
                                                <li
                                                    key={box.id}
                                                    className="flex items-center gap-2 sm:gap-3 py-2.5"
                                                >

                                                    {/* Name + unit price */}

                                                    <div className="flex-1 min-w-0">
                                                        <p
                                                            className={`
                                                                ${zain.className}
                                                                text-base
                                                                md:text-lg
                                                                font-bold
                                                                leading-tight
                                                                text-espresso
                                                                dark:text-cream
                                                            `}
                                                        >
                                                            {box.name}
                                                        </p>

                                                        <p
                                                            className={`
                                                                ${zain.className}
                                                                text-sm
                                                                text-espresso/60
                                                                dark:text-cream/60
                                                            `}
                                                        >
                                                            {box.price} ج.م للبوكس
                                                        </p>
                                                    </div>


                                                    {/* Line quantity */}

                                                    <div className="flex items-center bg-mustard text-espresso rounded-full p-0.5 shrink-0">

                                                        <button
                                                            type="button"
                                                            onClick={() => updateCartQuantity(box.id, 1)}
                                                            aria-label={`زيادة كمية ${box.name}`}
                                                            className="
                                                                w-8
                                                                h-8
                                                                rounded-full
                                                                bg-white/60
                                                                hover:bg-white
                                                                flex
                                                                items-center
                                                                justify-center
                                                                transition-colors
                                                                duration-200
                                                            "
                                                        >
                                                            <Plus className="w-3.5 h-3.5 text-espresso" />
                                                        </button>

                                                        <span
                                                            className={`
                                                                ${zain.className}
                                                                text-lg
                                                                font-black
                                                                px-3
                                                            `}
                                                        >
                                                            {lineQuantity}
                                                        </span>

                                                        <button
                                                            type="button"
                                                            onClick={() => updateCartQuantity(box.id, -1)}
                                                            disabled={lineQuantity <= 1}
                                                            aria-label={`تقليل كمية ${box.name}`}
                                                            className="
                                                                w-8
                                                                h-8
                                                                rounded-full
                                                                bg-white/60
                                                                hover:bg-white
                                                                flex
                                                                items-center
                                                                justify-center
                                                                transition-colors
                                                                duration-200
                                                                disabled:opacity-40
                                                                disabled:cursor-not-allowed
                                                                disabled:hover:bg-white/60
                                                            "
                                                        >
                                                            <Minus className="w-3.5 h-3.5 text-espresso" />
                                                        </button>

                                                    </div>


                                                    {/* Line total */}

                                                    <span
                                                        className={`
                                                            ${zain.className}
                                                            text-base
                                                            md:text-lg
                                                            font-bold
                                                            text-espresso
                                                            dark:text-cream
                                                            min-w-[4.5rem]
                                                            text-center
                                                        `}
                                                    >
                                                        {box.price * lineQuantity} ج.م
                                                    </span>


                                                    {/* Remove from order */}

                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(box.id)}
                                                        aria-label={`حذف ${box.name} من الأوردر`}
                                                        className="
                                                            w-8
                                                            h-8
                                                            shrink-0
                                                            rounded-full
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-espresso/60
                                                            dark:text-cream/60
                                                            hover:text-red-500
                                                            hover:bg-red-500/10
                                                            transition-colors
                                                            duration-200
                                                        "
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>

                                                </li>
                                            ))}

                                        </ul>


                                        {/* Order total */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                pt-3
                                                mt-1
                                                border-t
                                                border-espresso/10
                                                dark:border-cream/10
                                            "
                                        >
                                            <span
                                                className={`
                                                    ${zain.className}
                                                    text-lg
                                                    font-bold
                                                    text-espresso
                                                    dark:text-cream
                                                `}
                                            >
                                                الإجمالي
                                            </span>

                                            <span
                                                className={`
                                                    ${zain.className}
                                                    text-xl
                                                    font-black
                                                    text-espresso
                                                    dark:text-cream
                                                `}
                                            >
                                                {cartTotal} ج.م
                                            </span>
                                        </div>

                                    </div>

                                </motion.div>
                            )}

                        </AnimatePresence>


                        {/* =====================================================
                            Order Notes
                        ===================================================== */}

                        <div className="w-full order-6 lg:order-none">

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
                                placeholder="لو حابب تختار معاد تسليم معين، او تضيف حاجة على الاوردر"
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
                            Send the whole order on WhatsApp
                        ===================================================== */}

                        {cartItems.length > 0 ? (
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
                                    w-full
                                    order-7
                                    lg:order-none
                                    transition-all
                                    duration-200
                                    hover:scale-[1.01]
                                `}
                            >

                                <span>
                                    اطلب الآن
                                </span>

                                <span className="text-base opacity-85">
                                    ({cartTotal} ج.م)
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
                                    w-full
                                    order-7
                                    lg:order-none
                                `}
                            >

                                <span>
                                    ضيف بوكس للأوردر الأول
                                </span>

                            </button>
                        )}


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
                                order-8
                                lg:order-none
                            `}
                        >
                            استلام الاوردر خلال 24 ساعة من تأكيد الطلب
                        </p>

                    </div>

                </div>

            </div>

        </>
    );
}