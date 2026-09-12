'use client';

import { useState } from 'react';
import Image from 'next/image';
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


    // Box categorization

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

    // Extract burger images for the circles

    const getBurgerImages = (box: Box): ImgDetails[] => {
        return [
            box.images.burger1,
            box.images.burger2,
            box.images.burger3,
            box.images.burger4,
        ].filter((img): img is ImgDetails => Boolean(img));
    };

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
                bg-[#f8f1e3]
                w-full
                min-h-[calc(100vh-80px)]
                mt-20
                flex
                items-center
                justify-center
                px-4
                md:px-10
                py-6
            "
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* =====================================================
                    الجانب الأيمن
                ===================================================== */}

                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">

                    {/* =========================
                        تفاصيل البوكس
                    ========================= */}

                    <div className="space-y-3">

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
                    </div>

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

                    <div
                        className="
                            relative
                            w-full
                            max-w-[360px]
                            h-[500px]
                            flex items-center justify-center
                        "
                    >

                        {/* ================================================= */}
                        {/* Top Bun */}
                        {/* ================================================= */}

                        {selectedBox.images.topBun?.image && (
                            <div
                                className="
                                    absolute
                                    top-[5px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[210px]
                                    h-[85px]
                                    z-50
                                "
                            >
                                <Image
                                    src={selectedBox.images.topBun.image}
                                    alt="قطع خبز بريوش"
                                    fill
                                    priority
                                    sizes="210px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Pickles */}
                        {/* ================================================= */}

                        {selectedBox.images.pickles?.image && (
                            <div
                                className="
                                    absolute
                                    top-[100px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[170px]
                                    h-[55px]
                                    z-40
                                "
                            >
                                <Image
                                    src={selectedBox.images.pickles.image}
                                    alt="خيار مخلل"
                                    fill
                                    sizes="170px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Halapino */}
                        {/* ================================================= */}

                        {selectedBox.images.Halapino?.image && (
                            <div
                                className="
                                    absolute
                                    top-[145px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[180px]
                                    h-[55px]
                                    z-35
                                "
                            >
                                <Image
                                    src={selectedBox.images.Halapino.image}
                                    alt="هالبينو"
                                    fill
                                    sizes="180px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Cheddar */}
                        {/* ================================================= */}

                        {selectedBox.images.cheddar?.image && (
                            <div
                                className="
                                    absolute
                                    top-[190px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[190px]
                                    h-[45px]
                                    z-30
                                "
                            >
                                <Image
                                    src={selectedBox.images.cheddar.image}
                                    alt="صوص شيدر"
                                    fill
                                    sizes="190px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Burger 1 */}
                        {/* ================================================= */}

                        {selectedBox.images.burger1?.image && (
                            <div
                                className="
                                    absolute
                                    top-[225px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[180px]
                                    h-[55px]
                                    z-25
                                "
                            >
                                <Image
                                    src={selectedBox.images.burger1.image}
                                    alt={selectedBox.images.burger1.alt}
                                    fill
                                    priority
                                    sizes="180px"
                                    className="object-contain"
                                />
                            </div>
                        )}

                        {/* ================================================= */}
                        {/* Burger 2 */}
                        {/* ================================================= */}

                        {selectedBox.images.burger2?.image && (
                            <div
                                className="
                                    absolute
                                    top-[275px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[180px]
                                    h-[55px]
                                    z-20
                                "
                            >
                                <Image
                                    src={selectedBox.images.burger2.image}
                                    alt={selectedBox.images.burger2.alt}
                                    fill
                                    sizes="180px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Sauce */}
                        {/* ================================================= */}

                        {selectedBox.images.boxSauce?.image && (
                            <div
                                className="
                                    absolute
                                    top-[320px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[155px]
                                    h-[45px]
                                    z-15
                                "
                            >
                                <Image
                                    src={selectedBox.images.boxSauce.image}
                                    alt={selectedBox.images.boxSauce.alt}
                                    fill
                                    sizes="155px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Burger 3 */}
                        {/* ================================================= */}

                        {selectedBox.images.burger3?.image && (
                            <div
                                className="
                                    absolute
                                    top-[355px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[180px]
                                    h-[55px]
                                    z-10
                                "
                            >
                                <Image
                                    src={selectedBox.images.burger3.image}
                                    alt={selectedBox.images.burger3.alt}
                                    fill
                                    sizes="180px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Burger 4 */}
                        {/* ================================================= */}

                        {selectedBox.images.burger4?.image && (
                            <div
                                className="
                                    absolute
                                    top-[395px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[180px]
                                    h-[55px]
                                    z-5
                                "
                            >
                                <Image
                                    src={selectedBox.images.burger4.image}
                                    alt={selectedBox.images.burger4.alt}
                                    fill
                                    sizes="180px"
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* ================================================= */}
                        {/* Bottom Bun */}
                        {/* ================================================= */}

                        {selectedBox.images.bottomBun?.image && (
                            <div
                                className="
                                    absolute
                                    bottom-[0px]
                                    left-1/2
                                    -translate-x-1/2
                                    w-[210px]
                                    h-[70px]
                                    z-0
                                "
                            >
                                <Image
                                    src={selectedBox.images.bottomBun.image}
                                    alt="قطع خبز بريوش"
                                    fill
                                    priority
                                    sizes="210px"
                                    className="object-contain"
                                />
                            </div>
                        )}

                    </div>


                    {/* ================= الجملة تحت البرجر ================= */}

                    <div
                        className={`
                            text-center
                            text-espresso
                            ${zain.className}
                            mt-6
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