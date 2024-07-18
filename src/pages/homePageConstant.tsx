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
        imgUrl: Icons.IconHomePageConsultation,
        link: redirectRouteMap.homepage,
        desc: "hero-banner.ribbon.consultation",
    },
    {
        imgUrl: Icons.IconHomePageLabTest,
        link: redirectRouteMap.homepage,
        desc: "hero-banner.ribbon.labTests",
    },
    {
        imgUrl: Icons.IconHomePageShop,
        link: redirectRouteMap.shop,
        desc: "hero-banner.ribbon.shop",
    },
    {
        imgUrl: Icons.IconHomePageDispensary,
        link: redirectRouteMap.dispensary,
        desc: "hero-banner.ribbon.dispensary",
    },
];

export const homePageServicesCardList = [
    {
        imgUrl: Images.ImageHomePageServiceCard1,
        title: "services.card1.title",
        desc: "services.card1.desc",
        button: {
            text: "services.card1.linkText",
        },
    },
    {
        imgUrl: Images.ImageHomePageServiceCard2,
        title: "services.card2.title",
        desc: "services.card2.desc",
        button: {
            text: "services.card2.linkText",
        },
    },
    {
        imgUrl: Images.ImageHomePageServiceCard3,
        title: "services.card3.title",
        desc: "services.card3.desc",
        button: {
            text: "services.card3.linkText",
        },
    },
    {
        imgUrl: Images.ImageHomePageServiceCard4,
        title: "services.card4.title",
        desc: "services.card4.desc",
        button: {
            text: "services.card4.linkText",
        },
    },
];
