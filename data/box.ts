import type { Box } from "@/types/product";

export const boxes: Box[] = [

    /********************** BEEF BOXES **************************/

    // Classic Box - 1
    {
        id: "classic-box",
        name: "Classic Box",
        description: "بوكس مثالي لمحبي البرجر الكلاسيك بطعم غني ومكونات مميزة",
        price: 530,

        image: {
            id: "classic-box-sandwich",
            image: "/boxes/classic-box-image.png",
            alt: "ساندوتش Classic Box",
        },

        contents: {
            burger1: " 6 برجر كلاسيك",
            burger2: null,
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // Volcano Box - 2
    {
        id: "volcano-box",
        name: "Volcano Box",
        description: "تجربة مميزة لمحبي البرجر الغرقان جبنة والنكهات الفريدة",
        price: 600,

        image: {
            id: "volcano-box-sandwich",
            image: "/boxes/volcano-box-image.png",
            alt: "ساندوتش Volcano Box",
        },

        contents: {
            burger1: " برجر فولكانو 6",
            burger2: null,
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // Matching Box - 3
    {
        id: "matching-box",
        name: "Matching Box",
        description: "بوكس يجمع بين الطعم الكلاسيك والطعم القوي لمحبي التنوع",
        price: 570,

        image: {
            id: "matching-box-sandwich",
            image: "/boxes/matching-box-image.png",
            alt: "ساندوتش Matching Box",
        },

        contents: {
            burger1: "3 برجر كلاسيك",
            burger2: "3 برجر فولكانو",
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },


    /********************** CHICKEN BOXES **************************/


    // Grill Cordon Box - 4
    {
        id: "grill-cordon-box",
        name: "Grill Cordon Box",
        description: "اختيار غني لمحبي الطعم المشوي وصدور الدجاج المحشية بالخضار والجبنة بتوابل مميزة",
        price: 540,

        image: {
            id: "grill-cordon-box-sandwich",
            image: "/sandwiches/grill-cordon.png",
            alt: "ساندوتش Grill Cordon Box",
        },

        contents: {
            burger1: "6 كوردن جريل",
            burger2: null,
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // Fried Cordon Box - 5
    {
        id: "fried-cordon-box",
        name: "Fried Cordon Box",
        description: "بوكس غني لعشاق الطعم المقرمش وصدور الدجاج المحشية بالخضار والجبنة بتوابل مميزة",
        price: 620,

        image: {
            id: "fried-cordon-box-sandwich",
            image: "/sandwiches/fried-cordon.png",
            alt: "ساندوتش Fried Cordon Box",
        },

        contents: {
            burger1: "6 كوردن فرايد",
            burger2: null,
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // Cordon Mix Box - 6
    {
        id: "cordon-mix-box",
        name: "Cordon Mix Box",
        description: "مزيج متنوع بين Grill cordon و Fried cordon لعشاق التجارب المختلفة",
        price: 580,

        image: {
            id: "cordon-mix-box-sandwich",
            image: "/sandwiches/mix-cordon.png",
            alt: "ساندوتش Cordon Mix Box",
        },

        contents: {
            burger1: "3 كوردن جريل",
            burger2: "3 كوردن فرايد",
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },


    /********************** MIX BOXES **************************/

    // BBQ Box - 7
    {
        id: "bbq-box",
        name: "BBQ Box",
        description: "مزيج متوازن من البرجر الكلاسيك والكوردن المشوى لمحبي الطعم الغني والمشوي",
        price: 530,

        image: {
            id: "bbq-box-sandwich",
            image: "/sandwiches/bbq.png",
            alt: "ساندوتش BBQ Box",
        },

        contents: {
            burger1: "3 برجر كلاسيك",
            burger2: "3 كوردن جريل",
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس",
            ranchSauce: "صوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // T&D Box - 8
    {
        id: "T&D box",
        name: "T&D Box",
        description: "التجربة الكاملة من Tasty & Delicious، أفضل اختيار لتجربة كل الأنواع في بوكس واحد",
        price: 750,

        image: {
            id: "td-box-sandwich",
            image: "/sandwiches/t&d.png",
            alt: "ساندوتش T&D Box",
        },

        contents: {
            burger1: "2 برجر كلاسيك",
            burger2: "2 برجر فولكانو",
            burger3: "2 كوردن جريل",
            burger4: "2 كوردن فرايد",
            bun: "8 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس",
            ranchSauce: "صوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },
];
