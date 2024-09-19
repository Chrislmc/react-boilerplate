import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { redirectRouteMap } from "@/utils/routes/route";

export const shopPageCategoryList = [
    {
        text: "shared.filter.categories.saleAndOffers",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shared.filter.categories.vitaminAndMinerals",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shared.filter.categories.probiotics",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shared.filter.categories.oils",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shared.filter.categories.supplements",
        redirectUrl: redirectRouteMap.products,
    },
    {
        text: "shared.filter.categories.lifestyle",
        redirectUrl: redirectRouteMap.products,
    },
];

export const shopPageProductCardList = [
    {
        id: "1",
        imgUrl: [Images.ImiProduct1],
        name: "Viracon",
        shortDesc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: 219.0,
        priceDesc: "HK$219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "2",
        imgUrl: [Images.ImiProduct2],
        name: "Ther-Biotic® Complete Capsule",
        shortDesc:
            "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: 430.0,
        priceDesc: "HK$430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
    },
    {
        id: "3",
        imgUrl: [Images.ImiProduct3],
        name: "C Complete Powder",
        shortDesc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: 295.0,
        priceDesc: "HK$295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
    },
    {
        id: "4",
        imgUrl: [Images.ImiProduct4],
        name: "Bundle Offer [20% Off]: Anti-Aging",
        shortDesc: "Stars aren’t the only thing glowing this holiday season.",
        currency: "HK$",
        price: 970.0,
        priceDesc: "HK$970.00",
        rating: 0,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "5",
        imgUrl: [Images.ImiProduct1],
        name: "Viracon",
        shortDesc: "Maximise your natural immune defences with Viracon.",
        currency: "HK$",
        price: 219.0,
        priceDesc: "HK$219.00",
        rating: 5,
        isOutOfStock: false,
        onlyAvailableInClinic: false,
    },
    {
        id: "6",
        imgUrl: [Images.ImiProduct2],
        name: "Ther-Biotic® Complete Capsule",
        shortDesc:
            "Encourage a flourishing environment of good bacteria in the gut.",
        currency: "HK$",
        price: 430.0,
        priceDesc: "HK$430.00",
        rating: 4,
        isOutOfStock: false,
        onlyAvailableInClinic: true,
    },
    {
        id: "7",
        imgUrl: [Images.ImiProduct3],
        name: "C Complete Powder",
        shortDesc: "A mighty union of vitamin C and flavonoids.",
        currency: "HK$",
        price: 295.0,
        priceDesc: "HK$295.00",
        rating: 3,
        isOutOfStock: true,
        onlyAvailableInClinic: false,
    },
];

export const shopPageHealthNeedCardList = [
    {
        imgUrl: Icons.Allergies,
        text: "shared.filter.healthNeed.allergies",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.GutHealth,
        text: "shared.filter.healthNeed.gutHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Immunity,
        text: "shared.filter.healthNeed.immunity",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Sleep,
        text: "shared.filter.healthNeed.sleep",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.HormonalHealth,
        text: "shared.filter.healthNeed.hormonalHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Pain,
        text: "shared.filter.healthNeed.pain",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.DetoxAndWeightLoss,
        text: "shared.filter.healthNeed.detoxAndWeightLoss",
        redirectUrl: "",
    },
];

export const shopPageArticlesCardList = [
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "shop.articles.card1.date",
        title: "shop.articles.card1.title",
        desc: "shop.articles.card1.desc",
    },
    {
        id: "2",
        imgUrl: Images.HomePageHealthHubCard2,
        date: "shop.articles.card2.date",
        title: "shop.articles.card2.title",
        desc: "shop.articles.card2.desc",
    },
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "shop.articles.card3.date",
        title: "shop.articles.card3.title",
        desc: "shop.articles.card3.desc",
    },
];
