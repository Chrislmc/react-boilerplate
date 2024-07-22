import { ImiSection } from "@/components/imiSection";
import { Layout } from "@/components/layout";
import { useHomePageScrollingEffect } from "@/utils/hooks/useHomePageScrollingEffect";
import "./_home-page.scss";
import { HomePageBookNowSection } from "./homePageBookNowSection";
import { HomePageDispensarySection } from "./homePageDispensarySection";
import { HomePageHealthConditionSection } from "./homePageHealthConditionSection";
import { HomePageHealthHubSection } from "./homePageHealthHubSection";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";
import { HomePageProductSection } from "./homePageProductSection";
import { HomePageServicesSection } from "./homePageServicesSection";

export const HomePage = () => {
    const { siteContentRef } = useHomePageScrollingEffect();

    return (
        <Layout className="home-page" ref={siteContentRef}>
            <div id="home-page">
                <ImiSection className="home-page-hero-banner-section">
                    <HomePageHeroBannerSection />
                </ImiSection>
                <ImiSection className="home-page-services-section">
                    <HomePageServicesSection />
                </ImiSection>
                <ImiSection className="home-page-product-section">
                    <HomePageProductSection />
                </ImiSection>
                <ImiSection className="home-page-dispensary-section">
                    <HomePageDispensarySection />
                </ImiSection>
                <ImiSection className="home-page-health-condition-section">
                    <HomePageHealthConditionSection />
                </ImiSection>
                <ImiSection className="home-page-health-hub-section">
                    <HomePageHealthHubSection />
                </ImiSection>
                <ImiSection className="home-page-book-now-section">
                    <HomePageBookNowSection />
                </ImiSection>
            </div>
        </Layout>
    );
};
