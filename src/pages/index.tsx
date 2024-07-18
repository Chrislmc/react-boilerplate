import { ImiSection } from "@/components/imiSection";
import { Layout } from "@/components/layout";
import { useHomePageScrollingEffect } from "@/utils/hooks/useHomePageScrollingEffect";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_homePage.scss";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";
import { HomePageServicesSection } from "./homePageServicesSection";

export const HomePage = () => {
    const { siteContentRef } = useHomePageScrollingEffect();
    const t = i18nHelper("home-page");

    return (
        <Layout className="home-page" ref={siteContentRef}>
            <div id="home-page">
                <ImiSection className="home-page-hero-banner-section">
                    <HomePageHeroBannerSection />
                </ImiSection>
                <ImiSection className="home-page-services-section">
                    <HomePageServicesSection />
                </ImiSection>
            </div>
        </Layout>
    );
};
