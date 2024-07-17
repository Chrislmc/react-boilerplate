import { Videos } from "@/assets/video";
import { ImiVideoPlayer } from "@/components/imiVideoPlayer";
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
