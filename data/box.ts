import type { Box } from "@/types/product";

export const boxes: Box[] = [

    /********************** BEEF BOXES **************************/

    // Classic Box -1
    {
        id: "classic-box",
        name: "Classic Box",
        description: "بوكس مثالي لمحبي البرجر الكلاسيك بطعم غني ومكونات مميزة",
        price: 530,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "classic-burger",
                image: "/products/classic-beef.png",
                alt: "برجر كلاسيك",
            },
            burger2: null,

            boxSauce: {
                id: "taxas-sauce",
                image: "/products/taxas-sauce.png",
                alt: "صوص تاكسس",
            },

            burger3: {
                id: "classic-burger",
                image: "/products/classic-beef.png",
                alt: "برجر كلاسيك",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "6 برجر كلاسيك",
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

        // Volcano Box -2    
    {
        id: "volcano-box",
        name: "Volcano Box",
        description: "تجربة قوية لمحبي النكهات الجريئة والطعم الحار",
        price: 600,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "volcano-burger",
                image: "/products/volcano-beef.png",
                alt: "برجر فولكانو",
            },
            burger2: null,

            boxSauce: {
                id: "taxas-sauce",
                image: "/products/taxas-sauce.png",
                alt: "صوص تاكسس",
            },
            burger3: {
                id: "volcano-burger",
                image: "/products/volcano-beef.png",
                alt: "برجر فولكانو",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "برجر فولكانو 6",
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

    // Matching Box -3
    {
        id: "matching-box",
        name: "Matching Box",
        description: "بوكس يجمع بين الطعم الكلاسيك والطعم القوي لمحبي التنوع",
        price: 570,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "classic-burger",
                image: "/products/classic-beef.png",
                alt: "برجر كلاسيك",
            },
            burger2: null,

            boxSauce: {
                id: "taxas-sauce",
                image: "/products/taxas-sauce.png",
                alt: "صوص تاكسس",
            },

            burger3: {
                id: "volcano-burger",
                image: "/products/volcano-beef.png",
                alt: "برجر فولكانو",
            },
            burger4: null,


            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "برجر كلاسيك 3",
            burger2: "برجر فولكانو 3",
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


    // Grill Cordon Box -4  
    {
        id: "grill-cordon-box",
        name: "Grill Cordon Box",
        description: "اختيار غني لمحبي الطعم المشوي والجبنة والمكونات المميزة",
        price: 540,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "grill-cordon",
                image: "/products/grill-ch.png",
                alt: "كوردن جريل",
            },
            burger2: null,

            boxSauce: {
                id: "ranch-sauce",
                image: "/products/ranch-sauce.png",
                alt: "صوص رانش",
            },
            burger3: {
                id: "grill-cordon",
                image: "/products/grill-ch.png",
                alt: "كوردن جريل",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "كوردن جريل 6",
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

    // Fried Cordon Box -5
    {
        id: "fried-cordon-box",
        name: "Fried Cordon Box",
        description: "بوكس غني لعشاق الطعم المقرمش والنكهات الغنية",
        price: 620,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "fried-cordon",
                image: "/products/fried-ch.png",
                alt: "كوردن فرايد",
            },
            burger2: null,

            boxSauce: {
                id: "ranch-sauce",
                image: "/products/ranch-sauce.png",
                alt: "صوص رانش",
            },
            burger3: {
                id: "fried-cordon",
                image: "/products/fried-ch.png",
                alt: "كوردن فرايد",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "كوردن فرايد 6",
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

    // Cordon Mix Box -6    
    {
        id: "cordon-mix-box",
        name: "Cordon Mix Box",
        description: "مزيج متنوع بين Grill cordon و Fried cordon لعشاق التجارب المختلفة",
        price: 580,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "grill-cordon",
                image: "/products/grill-ch.png",
                alt: "كوردن جريل",
            },
            burger2: null,

            boxSauce: {
                id: "ranch-sauce",
                image: "/products/ranch-sauce.png",
                alt: "صوص رانش",
            },

            burger3: {
                id: "fried-cordon",
                image: "/products/fried-ch.png",
                alt: "كوردن فرايد",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "كوردن جريل 3",
            burger2: "كوردن فرايد 3",
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

    // BBQ Box -7
    {
        id: "bbq-box",
        name: "BBQ Box",
        description: "مزيج متوازن من البرجر الكلاسيك والكوردن المشوى لمحبي الطعم الغني والمشوي",
        price: 530,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "classic-burger",
                image: "/products/classic-beef.png",
                alt: "برجر كلاسيك",
            },
            burger2: null,

            boxSauce: {
                id: "taxas-sauce",
                image: "/products/taxas-sauce.png",
                alt: "صوص تاكسس",
            },

            burger3: {
                id: "grill-cordon",
                image: "/products/grill-ch.png",
                alt: "كوردن جريل",
            },
            burger4: null,

            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "برجر كلاسيك 3",
            burger2: "كوردن جريل 3",
            burger3: null,
            burger4: null,
            bun: "6 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس وصوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },

    // T&D Box -8
    {
        id: "T&D box",
        name: "T&D Box",
        description: "التجربة الكاملة من Tasty & Delicious، أفضل اختيار لتجربة أكثر من نوع في بوكس واحد",
        price: 750,

        images: {
            topBun: {
                id: "top-bun",
                image: "/products/top-bun.png",
                alt: "قطعة خبز بريوش علوية",
            },
            Mayo: {
                id: "mayo",
                image: "/products/mayo.png",
                alt: "مايونيز",
            },
            Halapino: {
                id: "halapino",
                image: "/products/halapino.png",
                alt: "هالبينو",
            },
            pickles: {
                id: "pickles",
                image: "/products/pickles.png",
                alt: "خيار مخلل",
            },
            cheddar: {
                id: "cheddar",
                image: "/products/cheddar.png",
                alt: "صوص شيدر",
            },

            burger1: {
                id: "classic-burger",
                image: "/products/classic-beef.png",
                alt: "برجر كلاسيك",
            },
            burger2: {
                id: "volcano-burger",
                image: "/products/volcano-beef.png",
                alt: "برجر فولكانو",
            },

            boxSauce: {
                id: "taxas-sauce",
                image: "/products/taxas-sauce.png",
                alt: "صوص تاكسس",
            },
            burger3: {
                id: "grill-cordon",
                image: "/products/grill-ch.png",
                alt: "كوردن جريل",
            },
            burger4: {
                id: "fried-cordon",
                image: "/products/fried-ch.png",
                alt: "كوردن فرايد",
            },
            Ketchup: {
                id: "ketchup",
                image: "/products/ketchup.png",
                alt: "كاتشب",
            },
            bottomBun: {
                id: "bottom-bun",
                image: "/products/bottom-bun.png",
                alt: "قطعة خبز بريوش سفلية",
            },
        },

        contents: {
            burger1: "برجر كلاسيك 2",
            burger2: "برجر فولكانو 2",
            burger3: "كوردن جريل 2",
            burger4: "كوردن فرايد 2",
            bun: "8 قطع خبز بريوش",
            pickles: "خيار مخلل",
            Halapino: "هالبينو",
            boxSauce: "صوص تاكسس وصوص رانش",
            cheddarSauce: "صوص شيدر",
            MayoSauce: "مايونيز",
            KetchupSauce: "كاتشب",
        },
    },
];