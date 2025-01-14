import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { Videos } from "@/assets/video";
import { IButtonProps } from "@/components/atoms/button";
import { ICardWithImageContentProps } from "@/components/molecules/cardWithImageContent";
import { VideoPlayer } from "@/components/molecules/videoPlayer";
import { redirectRouteMap } from "@/utils/routes/route";
import { IArticle } from "@/utils/types/article";
import { HomePageHeroBannerCard } from "./homePageHeroBannerCard";

export const homePageSwiperCardLists = [
    <HomePageHeroBannerCard
        heroImg={{
            videoUrl: Videos.HomePageHeroBannerVideo,
        }}
        header="hero-banner.card1.title"
        desc="hero-banner.card1.desc"
        button={{
            text: "hero-banner.card1.linkText",
        }}
    />,

    <div style={{ height: "56.25rem" }}>
        <VideoPlayer
            url={Videos.HomePageHeroBannerVideo}
            controls={false}
            height={"auto"}
            width={"100%"}
        />
    </div>,
];

export const homePageHeroBannerRibbonItems = [
    {
        imgUrl: Icons.HomePageConsultation,
        link: redirectRouteMap.homepage,
        desc: "hero-banner.ribbon.consultation",
    },
    {
        imgUrl: Icons.HomePageLabTest,
        link: redirectRouteMap.labTest,
        desc: "hero-banner.ribbon.labTests",
    },
    {
        imgUrl: Icons.HomePageShop,
        link: redirectRouteMap.shop,
        desc: "hero-banner.ribbon.shop",
    },
    {
        imgUrl: Icons.HomePageDispensary,
        link: redirectRouteMap.dispensary,
        desc: "hero-banner.ribbon.dispensary",
    },
];

export const homePageServicesCardList = [
    {
        imgUrl: Images.HomePageServiceCard1,
        title: "services.card1.title",
        desc: "services.card1.desc",
        button: {
            text: "services.card1.linkText",
            redirectUrl: redirectRouteMap.naturopathy,
        },
    },
    {
        imgUrl: Images.HomePageServiceCard2,
        title: "services.card2.title",
        desc: "services.card2.desc",
        button: {
            text: "services.card2.linkText",
        },
    },
    {
        imgUrl: Images.HomePageServiceCard3,
        title: "services.card3.title",
        desc: "services.card3.desc",
        button: {
            text: "services.card3.linkText",
        },
    },
    {
        imgUrl: Images.HomePageServiceCard4,
        title: "services.card4.title",
        desc: "services.card4.desc",
        button: {
            text: "services.card4.linkText",
        },
    },
];

export const homePageProductCardList = [
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
];

export const homePageDispensaryCardList: (ICardWithImageContentProps & {
    button: IButtonProps;
})[] = [
    {
        imgUrl: Images.HomePageDispensaryCard1,
        title: "dispensary.card1.title",
        desc: "dispensary.card1.desc",
        button: {
            text: "dispensary.card1.linkText",
        },
    },
    {
        imgUrl: Images.HomePageDispensaryCard2,
        title: "dispensary.card2.title",
        desc: "dispensary.card2.desc",
        button: {
            text: "dispensary.card2.linkText",
            size: "padding",
        },
    },
    {
        imgUrl: Images.HomePageDispensaryCard3,
        title: "dispensary.card3.title",
        desc: "dispensary.card3.desc",
        button: {
            text: "dispensary.card3.linkText",
            size: "padding",
            buttonClassName: "size-small-padding",
        },
    },
    {
        imgUrl: Images.HomePageDispensaryCard4,
        title: "dispensary.card4.title",
        desc: "dispensary.card4.desc",
        button: {
            text: "dispensary.card4.linkText",
        },
    },
];

export const homePageHealthConditionCardList = [
    {
        imgUrl: Icons.Allergies,
        text: "healthCondition.allergies",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.GutHealth,
        text: "healthCondition.gutHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Immunity,
        text: "healthCondition.immunity",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Sleep,
        text: "healthCondition.sleep",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.HormonalHealth,
        text: "healthCondition.hormonalHealth",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.Pain,
        text: "healthCondition.pain",
        redirectUrl: "",
    },
    {
        imgUrl: Icons.DetoxAndWeightLoss,
        text: "healthCondition.detoxAndWeightLoss",
        redirectUrl: "",
    },
];

export enum IHomePageHealthHubTab {
    TRENDING = "trending",
    POPULAR = "popular",
    HEALTH_NEEDS = "healthNeeds",
    SUPPLEMENTS = "supplements",
    PRACTITIONER_BLOGS = "practitionerBlogs",
}

export const homePageHealthHubTabItems = [
    {
        text: "healthHub.tab.trending",
        value: IHomePageHealthHubTab.TRENDING,
    },
    {
        text: "healthHub.tab.popular",
        value: IHomePageHealthHubTab.POPULAR,
    },
    {
        text: "healthHub.tab.healthNeeds",
        value: IHomePageHealthHubTab.HEALTH_NEEDS,
    },
    {
        text: "healthHub.tab.supplements",
        value: IHomePageHealthHubTab.SUPPLEMENTS,
    },
    {
        text: "healthHub.tab.practitionerBlogs",
        value: IHomePageHealthHubTab.PRACTITIONER_BLOGS,
    },
];

export const homePageArticleList: IArticle[] = [
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "healthHub.card1.date",
        title: "healthHub.card1.title",
        desc: "healthHub.card1.desc",
        content: [
            "healthHub.card1.content1",
            "healthHub.card1.content2",
            "healthHub.card1.content3",
            "healthHub.card1.content4",
        ],
    },
    {
        id: "2",
        imgUrl: Images.HomePageHealthHubCard2,
        date: "healthHub.card2.date",
        title: "healthHub.card2.title",
        desc: "healthHub.card2.desc",
        content: [
            "healthHub.card1.content1",
            "healthHub.card1.content2",
            "healthHub.card1.content3",
            "healthHub.card1.content4",
        ],
    },
];

export const homePageHealthHubCardList: {
    [key in IHomePageHealthHubTab]: string[];
} = {
    [IHomePageHealthHubTab.TRENDING]: ["1", "2", "1", "1", "2", "1"],
    [IHomePageHealthHubTab.POPULAR]: ["1", "2"],
    [IHomePageHealthHubTab.HEALTH_NEEDS]: ["1", "1", "1", "1", "1"],
    [IHomePageHealthHubTab.SUPPLEMENTS]: ["2"],
    [IHomePageHealthHubTab.PRACTITIONER_BLOGS]: ["1"],
};
