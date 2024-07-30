import { homePageImages } from "./home-page";
import ImiLogo from "./imi logo.png";
import { practitionersImages } from "./practitioners";
import ImiProduct1 from "./product1.png";
import ImiProduct2 from "./product2.png";
import ImiProduct3 from "./product3.png";
import ImiProduct4 from "./product4.png";
import { shopPageImages } from "./shop";

export const Images = {
    ImiLogo,
    ImiProduct1,
    ImiProduct2,
    ImiProduct3,
    ImiProduct4,
    ...homePageImages,
    ...practitionersImages,
    ...shopPageImages,
};
