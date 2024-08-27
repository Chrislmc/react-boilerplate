import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { IImiAccordion } from "@/components/imiAccordion";
import { redirectRouteMap } from "@/utils/routes/route";

export const naturopathyDescRibbonItems = [
    {
        imgUrl: Icons.Testing,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.testing",
    },
    {
        imgUrl: Icons.HerbalMedicine,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.herbalMedicine",
    },
    {
        imgUrl: Icons.HerbalMedicine,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.nutrition",
    },
    {
        imgUrl: Icons.Supplements,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.supplements",
    },
];

export const naturopathyDetailsAccordionItems: IImiAccordion["content"] = [
    {
        header: "naturopathicMedicine.details.accordion1.header",
        details: [
            { desc: "naturopathicMedicine.details.accordion1.details.desc1" },
            { desc: "naturopathicMedicine.details.accordion1.details.desc2" },
            { desc: "naturopathicMedicine.details.accordion1.details.desc3" },
            { desc: "naturopathicMedicine.details.accordion1.details.desc4" },
        ],
    },
    {
        header: "naturopathicMedicine.details.accordion2.header",
        details: [
            { desc: "naturopathicMedicine.details.accordion2.details.desc1" },
            { desc: "naturopathicMedicine.details.accordion2.details.desc2" },
        ],
    },
    {
        header: "naturopathicMedicine.details.accordion3.header",
        details: [
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc1Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc1Suffix",
            },
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc2Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc2Suffix",
            },
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc3Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc3Suffix",
            },
        ],
    },
];

export const NaturopathyPageHealthNeedCardList = [
    {
        imgUrl: Icons.GutHealth,
        text: "naturopathicMedicine.effect.gutHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Anxiety,
        text: "naturopathicMedicine.effect.anxiety",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.SkinProblems,
        text: "naturopathicMedicine.effect.skinProblems",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Immunity,
        text: "naturopathicMedicine.effect.immunity",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Headaches,
        text: "naturopathicMedicine.effect.headaches",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Sleep,
        text: "naturopathicMedicine.effect.sleep",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.HormonalHealth,
        text: "naturopathicMedicine.effect.hormonalHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Pregnancy,
        text: "naturopathicMedicine.effect.pregnancy",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.FoodIntolerances,
        text: "naturopathicMedicine.effect.foodIntolerances",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Detox,
        text: "naturopathicMedicine.effect.detox",
        redirectUrl: "",
    },
];

export const naturopathyPageArticleCardList = [
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "naturopathicMedicine.articlesAndVideos.card1.date",
        title: "naturopathicMedicine.articlesAndVideos.card1.title",
        desc: "naturopathicMedicine.articlesAndVideos.card1.desc",
    },
    {
        id: "2",
        imgUrl: Images.HomePageHealthHubCard2,
        date: "naturopathicMedicine.articlesAndVideos.card2.date",
        title: "naturopathicMedicine.articlesAndVideos.card2.title",
        desc: "naturopathicMedicine.articlesAndVideos.card2.desc",
    },
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "naturopathicMedicine.articlesAndVideos.card3.date",
        title: "naturopathicMedicine.articlesAndVideos.card3.title",
        desc: "naturopathicMedicine.articlesAndVideos.card3.desc",
    },
];
