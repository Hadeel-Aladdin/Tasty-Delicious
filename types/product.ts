/* Defining the structure for burger images */

export type ImgDetails = {
    id: string;
    image: string;
    alt: string;
};

export type ProductImages = {
    topBun: ImgDetails;
    Mayo: ImgDetails;
    Halapino: ImgDetails;
    pickles: ImgDetails;
    cheddar: ImgDetails;
    burger1: ImgDetails;
    burger2: ImgDetails | null;
    boxSauce: ImgDetails;
    burger3: ImgDetails | null;
    burger4: ImgDetails | null;
    Ketchup: ImgDetails;
    bottomBun: ImgDetails;
};


/* Defining the structure for Box content */

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
};


/* Defining the structure for Boxes */

export type Box = {
    id: string;
    name: string;
    description: string;
    price: number;
    images: ProductImages;
    contents: BoxFixedContent & BoxSpicContent;
};