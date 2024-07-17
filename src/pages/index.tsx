import { ImiSwiper } from "@/components/imiSwiper";
import { Layout } from "@/components/layout";
import { useHomePageScrollingEffect } from "@/utils/hooks/useHomePageScrollingEffect";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_homePage.scss";
import { homePageSwiperCardLists } from "./homePageConstant";

export const HomePage = () => {
    const { siteContentRef } = useHomePageScrollingEffect();
    const t = i18nHelper("home-page");

    return (
        <Layout className="home-page" ref={siteContentRef}>
            <div id="home-page">
                <section className="home-page-hero-banner-section">
                    <div className="home-page-hero-banner">
                        <ImiSwiper
                            cardLists={homePageSwiperCardLists}
                            pagination={{ clickable: true }}
                            navigation
                            speed={1000}
                        />
                    </div>
                </section>
            </div>
        </Layout>
    );
};
