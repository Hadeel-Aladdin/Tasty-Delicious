/* Defines the structure for a box's sandwich image */

export type ImgDetails = {
    id: string;
    image: string;
    alt: string;
};


/* Defines the structure for Box content */

export type BoxFixedContent = {
    readonly MayoSauce: "مايونيز";
    readonly KetchupSauce: "كاتشب";
    readonly cheddarSauce: "صوص شيدر";
    readonly pickles: "خيار مخلل";
    readonly Halapino: "هالبينو";
};

export type BoxSpicContent = {
    bun: string;
    burger1: string;
    burger2: string | null;
    burger3: string | null;
    burger4: string | null;
    boxSauce: string;
    // Secondary sauce, only present on boxes that combine two sauces (e.g. BBQ, T&D)
    ranchSauce?: string | null;
};


/* Defines the structure for Boxes */

export type Box = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: ImgDetails;
    contents: BoxFixedContent & BoxSpicContent;
};
