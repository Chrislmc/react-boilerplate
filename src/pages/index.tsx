import { Videos } from "@/assets/video";
import { ImiVideoPlayer } from "@/components/imiVideoPlayer";
import { Layout } from "@/components/layout";
import { useHomePageScrollingEffect } from "@/utils/hooks/useHomePageScrollingEffect";
import "./_homePage.scss";

export const HomePage = () => {
    const { heroBannerBackgroundContainerRef, siteContentRef } =
        useHomePageScrollingEffect();

    return (
        <Layout className="home-page" ref={siteContentRef}>
            <div className="home-page">
                <div className="home-page-hero-banner">
                    <ImiVideoPlayer
                        url={Videos.HomePageHeroBannerVideo}
                        controls={false}
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
