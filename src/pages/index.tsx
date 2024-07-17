import { Videos } from "@/assets/video";
import { ImiSwiper } from "@/components/imiSwiper";
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
                    <ImiSwiper
                        cardLists={[
                            <ImiVideoPlayer
                                url={Videos.HomePageHeroBannerVideo}
                                controls={false}
                                height={"auto"}
                                width={"100%"}
                            />,
                            <ImiVideoPlayer
                                url={Videos.HomePageHeroBannerVideo}
                                controls={false}
                                height={"auto"}
                                width={"100%"}
                            />,
                        ]}
                        pagination={{ clickable: true }}
                        navigation
                        speed={1000}
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
