import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { Videos } from "@/assets/video";
import { ImiVideoPlayer } from "@/components/imiVideoPlayer";
import { redirectRouteMap } from "@/utils/routes/route";
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
        <ImiVideoPlayer
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
        link: redirectRouteMap.homepage,
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
];
