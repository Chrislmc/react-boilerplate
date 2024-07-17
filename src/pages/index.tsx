import { Videos } from "@/assets/video";
import { Layout } from "@/components/layout";
import { useHomePageScrollingEffect } from "@/utils/hooks/useHomePageScrollingEffect";
import ReactPlayer from "react-player";
import "./_homePage.scss";

export const HomePage = () => {
    const { heroBannerBackgroundContainerRef, siteContentRef } =
        useHomePageScrollingEffect();

    return (
        <Layout className="home-page" ref={siteContentRef}>
            <div className="home-page">
                <div className="home-page-hero-banner">
                    <ReactPlayer
                        url={Videos.HomePageHeroBannerVideo}
                        controls={false}
                        playing={false}
                        muted={true}
                        loop={true}
                        playsinline={true}
                        height={"auto"}
                        width={"100%"}
                    />
                    <div
                        className="home-page-hero-banner-background-container"
                        ref={heroBannerBackgroundContainerRef}
                    />
                </div>
            </div>
        </Layout>
    );
};
