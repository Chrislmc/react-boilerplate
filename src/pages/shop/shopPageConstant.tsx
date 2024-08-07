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

export const shopPageHealthNeedCardList = [
    {
        imgUrl: Icons.Allergies,
        text: "shop.healthNeed.allergies",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.GutHealth,
        text: "shop.healthNeed.gutHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Immunity,
        text: "shop.healthNeed.immunity",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Sleep,
        text: "shop.healthNeed.sleep",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.HormonalHealth,
        text: "shop.healthNeed.hormonalHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Pain,
        text: "shop.healthNeed.pain",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.DetoxAndWeightLoss,
        text: "shop.healthNeed.detoxAndWeightLoss",
        redirectUrl: "",
    },
];

export const shopPageArticlesCardList = [
    {
        imgUrl: Images.HomePageHealthHubCard1,
        date: "shop.articles.card1.date",
        title: "shop.articles.card1.title",
        desc: "shop.articles.card1.desc",
    },
    {
        imgUrl: Images.HomePageHealthHubCard2,
        date: "shop.articles.card2.date",
        title: "shop.articles.card2.title",
        desc: "shop.articles.card2.desc",
    },
    {
        imgUrl: Images.HomePageHealthHubCard1,
        date: "shop.articles.card3.date",
        title: "shop.articles.card3.title",
        desc: "shop.articles.card3.desc",
    },
];
