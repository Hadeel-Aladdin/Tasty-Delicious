'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Aref_Ruqaa, Zain } from 'next/font/google';
import {
    Flame,
    Crown,
    Plus,
    Minus,
    ShoppingBag,
    Utensils,
} from 'lucide-react';

import { boxes } from '@/data/box';
import type { Box, ImgDetails } from '@/types/product';

const aref = Aref_Ruqaa({
    weight: ['400', '700'],
    subsets: ['arabic'],
});

const zain = Zain({
    weight: ['400', '700', '800'],
    subsets: ['arabic'],
});

/* =====================================================
    Exploded-stack layer builder
    - No fixed pixel positions -> no empty gaps.
    - Each layer only takes space in the stack if its
      image actually exists for the selected box.
===================================================== */

type StackLayer = {
    key: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    marginTop: number; // negative = overlap with the layer above it
};

const SIZE = {
    bun: { width: 210, height: 85 },
    bottomBun: { width: 210, height: 70 },
    sauce: { width: 155, height: 45 },     // ketchup / mayo / box sauces
    wide: { width: 170, height: 55 },      // pickles / halapino
    cheese: { width: 190, height: 45 },
    patty: { width: 180, height: 55 },
};

const RANCH_SAUCE: ImgDetails = {
    id: 'ranch-sauce',
    image: '/products/ranch-sauce.png',
    alt: 'صوص رانش',
};

function buildStack(box: Box): StackLayer[] {
    const layers: StackLayer[] = [];

    const push = (
        key: string,
        img: ImgDetails | null | undefined,
        size: { width: number; height: number },
        overlap: number
    ) => {
        if (!img?.image) return;
        layers.push({
            key,
            src: img.image,
            alt: img.alt,
            width: size.width,
            height: size.height,
            marginTop: layers.length === 0 ? 0 : -overlap,
        });
    };

    const isTD = box.id === 'T&D box';

    push('top-bun', box.images.topBun, SIZE.bun, 0);
    push('ketchup', box.images.Ketchup, SIZE.sauce, 10);
    push('pickles', box.images.pickles, SIZE.wide, 25);
    push('halapino', box.images.Halapino, SIZE.wide, 25);
    push('cheddar-top', box.images.cheddar, SIZE.cheese, 25);
    push('burger1', box.images.burger1, SIZE.patty, 20);

    if (isTD) {
        // ترتيب خاص لـ T&D Box: صوص بين كل طبقتين لحمة/فراخ مختلفين
        push('taxas-sauce', box.images.boxSauce, SIZE.sauce, 15); // بين burger1 و burger2
        push('burger2', box.images.burger2, SIZE.patty, 20);
        push('cheddar-sauce', box.images.cheddar, SIZE.sauce, 15); // بين burger2 و burger3
        push('burger3', box.images.burger3, SIZE.patty, 20);
        push('ranch-sauce', RANCH_SAUCE, SIZE.sauce, 15);          // بين burger3 و burger4
        push('burger4', box.images.burger4, SIZE.patty, 20);
    } else {
        push('box-sauce', box.images.boxSauce, SIZE.sauce, 15);
        push('burger3', box.images.burger3, SIZE.patty, 20);
        // احتياطي لو أي بوكس مستقبلي فيه burger2/burger4 من غير ما يكون T&D
        push('burger2', box.images.burger2, SIZE.patty, 20);
        push('burger4', box.images.burger4, SIZE.patty, 20);
    }

    push('mayo', box.images.Mayo, SIZE.sauce, 15);
    push('bottom-bun', box.images.bottomBun, SIZE.bottomBun, 25);

    return layers;
}

/* =====================================================
    تصنيف البوكسات حسب عدد اللحمات/النكهات الظاهرة
    (بيتحدد بيها حجم دخان الخلفية بس - الطول بقى تلقائي)
===================================================== */

type StackVariant = 'single' | 'double' | 'quad';

function getStackVariant(box: Box): StackVariant {
    const singleIds = ['classic-box', 'volcano-box', 'grill-cordon-box', 'fried-cordon-box'];
    const doubleIds = ['matching-box', 'cordon-mix-box', 'bbq-box'];

    if (box.id === 'T&D box') return 'quad';
    if (doubleIds.includes(box.id)) return 'double';
    if (singleIds.includes(box.id)) return 'single';
    return 'single';
}

const SMOKE_SCALE: Record<StackVariant, number> = {
    single: 1,
    double: 1.15,
    quad: 1.35,
};

export default function MenuSection() {

    // Default displayed box and quantity

    const [selectedBox, setSelectedBox] = useState<Box>(boxes[0]);
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantity = (type: 'inc' | 'dec') => {
        if (type === 'dec' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }

        if (type === 'inc') {
            setQuantity((prev) => prev + 1);
        }
    };


    // Box categorization (selector groups)

    const beefBoxes = [
        boxes.find((box) => box.id === 'classic-box'),
        boxes.find((box) => box.id === 'matching-box'),
        boxes.find((box) => box.id === 'volcano-box'),
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


    // Extracting content of the current selected box

    const boxContentsList = Object.values(selectedBox.contents).filter(
        (val): val is string => Boolean(val)
    );


    // Order now message

    const whatsappText = encodeURIComponent(
        `أهلاً، عايز أطلب أوردر:\n- ${selectedBox.name} (عدد: ${quantity})`
    );

    // On click function that sets the actual selected box

    const selectBox = (box: Box) => {
        setSelectedBox(box);
        setQuantity(1);
    };

    // Stack + variant for the currently selected box

    const stack = buildStack(selectedBox);
    const variant = getStackVariant(selectedBox);

    // Main function that changes the info displayed on the UI according to the selected box

    const BoxSelector = ({ box }: { box: Box }) => {
        const isSelected = selectedBox.id === box.id;
        const isVolcano = box.id === 'volcano-box';
        const isSpecial = box.id === 'T&D box';

        // تنظيف الاسم من كلمة Box أو بوكس
        const displayName = box.name.replace(/box|بوكس/gi, '').trim();

        // تحديد لون النص بنفس لون البوردر
        const textColorClass = isVolcano
            ? 'text-volcano'
            : isSpecial && isSelected
                ? 'text-cream'
                : isSelected || isSpecial
                    ? 'text-mustard'
                    : 'text-espresso';

        return (
            <button
                key={box.id}
                onClick={() => selectBox(box)}
                title={box.name}
                className={`
                relative
                w-11 h-11
                md:w-[54px] md:h-[54px]
                rounded-full
                border-2
                transition-all
                duration-200
                shrink-0
                flex items-center justify-center
                p-0.5 text-center
                ${aref.className}

                ${isSelected
                        ? 'scale-110 shadow-md ring-2 ring-espresso/20'
                        : 'hover:scale-105'
                    }

                ${isVolcano
                        ? isSelected
                            ? 'border-volcano bg-volcano/10'
                            : 'border-volcano/50 bg-volcano/20'
                        : isSpecial
                            ? isSelected
                                ? 'border-mustard bg-mustard'
                                : 'border-mustard/60 bg-mustard/30'
                            : isSelected
                                ? 'border-mustard bg-cream'
                                : 'border-mustard/40 bg-cream/20'
                    }
            `}
            >
                {/* نص متجاوب: خط أصغر بدون truncate ليناسب حجم الدائرة */}
                <span
                    className={`
                    w-full 
                    ${textColorClass} 
                    font-bold 
                    text-[9px] md:text-[10px] 
                    leading-[1.1] 
                    break-words 
                    hyphens-auto
                `}
                >
                    {displayName}
                </span>

                {/* Flame للـ Volcano */}
                {isVolcano && (
                    <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-volcano flex items-center justify-center shadow-sm z-10">
                        <Flame
                            className="w-2.5 h-2.5 text-white"
                            fill="white"
                        />
                    </div>
                )}

                {/* Crown للـ Special Taste */}
                {isSpecial && (
                    <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-mustard flex items-center justify-center shadow-sm z-10">
                        <Crown
                            className="w-2.5 h-2.5 text-espresso"
                            fill="#553e2b"
                        />
                    </div>
                )}
            </button>
        );
    };

    return (
        <div
            id="menu"
            dir="rtl"
            className="
                bg-cream/30
                w-full
                h-screen
                mt-20
                flex
                items-center
                justify-center
                px-4
                md:px-10
                py-6
                overflow-y-auto
            "
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* =====================================================
                    الجانب الأيمن
                ===================================================== */}

                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedBox.id}-info`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.28, ease: 'easeInOut' }}
                            className="space-y-3"
                        >

                            <div className="flex items-center gap-3 flex-wrap">

                                <h2
                                    className={`
                                        ${aref.className}
                                        text-4xl
                                        md:text-5xl
                                        text-espresso
                                        font-bold
                                    `}
                                >
                                    {selectedBox.name}
                                </h2>

                                {/* Volcano */}
                                {selectedBox.id === 'volcano-box' && (
                                    <span
                                        className="
                                            bg-volcano
                                            text-white
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
                                        <Flame
                                            className="w-3.5 h-3.5"
                                            fill="white"
                                        />
                                        سبايسي
                                    </span>
                                )}

                                {/* T&D / Special Taste */}
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

                            <p
                                className={`
                                    ${zain.className}
                                    text-lg
                                    md:text-xl
                                    text-espresso/80
                                `}
                            >
                                {selectedBox.description}
                            </p>

                            {/* =========================
                                محتويات البوكس
                            ========================= */}

                            <div className="grid grid-cols-2 gap-2.5 pt-1">

                                {boxContentsList.map((item, index) => (
                                    <div
                                        key={`${selectedBox.id}-content-${index}`}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            bg-[#edd0b9]/40
                                            px-3.5
                                            py-2
                                            rounded-xl
                                            border
                                            border-espresso/5
                                        "
                                    >
                                        <Utensils className="w-4 h-4 text-mustard shrink-0" />

                                        <span
                                            className={`
                                                ${zain.className}
                                                text-lg
                                                font-bold
                                                text-espresso
                                            `}
                                        >
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* =====================================================
                        التقسيمة
                    ===================================================== */}

                    <div className="flex items-center gap-3 flex-wrap">

                        {/* =========================
                            Beef
                        ========================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-[#edd0b9]/20
                                p-2
                                rounded-2xl
                                border
                                border-espresso/5
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

                        {/* =========================
                            Chicken
                        ========================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-[#edd0b9]/20
                                p-2
                                rounded-2xl
                                border
                                border-espresso/5
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

                        {/* =========================
                            Mix
                        ========================= */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-[#edd0b9]/20
                                p-2
                                rounded-2xl
                                border
                                border-espresso/5
                            "
                        >
                            <div className="w-7 h-7 relative shrink-0">
                                <Image
                                    src="/mix.png"
                                    alt="mix"
                                    fill
                                    sizes="80px"
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
                        الكمية + الطلب
                    ===================================================== */}

                    <div className="flex items-center gap-4 pt-2">

                        {/* Quantity */}
                        <div
                            className="
                                flex
                                items-center
                                bg-mustard
                                text-espresso
                                rounded-full
                                p-1
                                shadow-inner
                                border
                                border-espresso/10
                            "
                        >
                            <button
                                onClick={() => handleQuantity('inc')}
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
                                <Plus className="w-4 h-4 text-espresso" />
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
                                onClick={() => handleQuantity('dec')}
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
                                <Minus className="w-4 h-4 text-espresso" />
                            </button>
                        </div>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/20112233?text=${whatsappText}`}
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
                                px-8
                                py-3
                                rounded-full
                                font-bold
                                shadow-md
                                ${zain.className}
                                text-xl
                                flex-1
                                max-w-md
                                transition-all
                                duration-200
                            `}
                        >
                            <ShoppingBag className="w-5 h-5" />

                            <span>اطلب الآن</span>

                            <span className="text-base opacity-85">
                                ({selectedBox.price * quantity} ج.م)
                            </span>
                        </a>

                    </div>

                </div>

                {/* =====================================================
                    الجانب الأيسر - Exploded View
                ===================================================== */}

                <div
                    className="
                        lg:col-span-5
                        flex flex-col
                        items-center
                        justify-center
                        relative
                    "
                >
                    <Image
                        src="/products/smoke.png"
                        alt=""
                        fill
                        sizes="700px"
                        className="object-contain opacity-60"
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedBox.id}-stack`}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.32, ease: 'easeInOut' }}
                            className="
                                relative
                                w-full
                                max-w-[360px]
                                flex flex-col
                                items-center
                                justify-center
                                py-6
                            "
                        >

                            {/* ================================================= */}
                            {/* Smoke background */}
                            {/* ================================================= */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    flex
                                    items-center
                                    justify-center
                                    pointer-events-none
                                "
                                style={{ zIndex: 0 }}
                            >
                                {/* <div
                                    className="relative w-[280px] h-[280px]"
                                    style={{ transform: `scale(${SMOKE_SCALE[variant]})` }}
                                >
                                    <Image
                                        src="/products/smoke.png"
                                        alt=""
                                        fill
                                        sizes="400px"
                                        className="object-contain opacity-60"
                                    />
                                </div> */}
                            </div>

                            {/* ================================================= */}
                            {/* Burger stack (dynamic, gapless) */}
                            {/* ================================================= */}

                            <div
                                className="relative flex flex-col items-center"
                                style={{ zIndex: 1 }}
                            >
                                {stack.map((layer, index) => (
                                    <div
                                        key={layer.key}
                                        className="relative"
                                        style={{
                                            width: layer.width,
                                            height: layer.height,
                                            marginTop: layer.marginTop,
                                            zIndex: stack.length - index,
                                        }}
                                    >
                                        <Image
                                            src={layer.src}
                                            alt={layer.alt}
                                            fill
                                            priority={index < 2}
                                            sizes={`${layer.width}px`}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* ================= الجملة تحت البرجر ================= */}

                    <div
                        className={`
                            text-center
                            text-espresso
                            ${zain.className}
                            mt-4
                        `}
                    >
                        <p className="text-xl font-bold">
                            بمكونات طازجة وجودة عالية
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
