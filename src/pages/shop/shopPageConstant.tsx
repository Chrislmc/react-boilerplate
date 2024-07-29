import { Images } from "@/assets/images";
import { redirectRouteMap } from "@/utils/routes/route";

export const shopPageCategoryList = [
    {
        text: "shop.category.saleAndOffers",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shop.category.vitaminAndMinerals",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shop.category.probiotics",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shop.category.oils",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shop.category.supplements",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shop.category.lifestyle",
        redirectUrl: redirectRouteMap.products,
    },
];

export const shopPageProductCardList = [
    {
        id: "1",
        imgUrl: Images.ImiProduct1,
        name: "Viracon",
        desc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: "219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "2",
        imgUrl: Images.ImiProduct2,
        name: "Ther-Biotic® Complete Capsule",
        desc: "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: "430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
    },
    {
        id: "3",
        imgUrl: Images.ImiProduct3,
        name: "C Complete Powder",
        desc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: "295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
    },
    {
        id: "4",
        imgUrl: Images.ImiProduct4,
        name: "Bundle Offer [20% Off]: Anti-Aging",
        desc: "Stars aren’t the only thing glowing this holiday season.",
        currency: "HK$",
        price: "970.00",
        rating: 0,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "5",
        imgUrl: Images.ImiProduct1,
        name: "Viracon",
        desc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: "219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "6",
        imgUrl: Images.ImiProduct2,
        name: "Ther-Biotic® Complete Capsule",
        desc: "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: "430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
    },
    {
        id: "7",
        imgUrl: Images.ImiProduct3,
        name: "C Complete Powder",
        desc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: "295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
    },
];
