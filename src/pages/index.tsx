import { Layout } from "@/components/layout";
import { Section } from "@/components/section";
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
                <Section className="home-page-hero-banner-section">
                    <HomePageHeroBannerSection />
                </Section>
                <Section className="home-page-services-section">
                    <HomePageServicesSection />
                </Section>
                <Section className="home-page-product-section">
                    <HomePageProductSection />
                </Section>
                <Section className="home-page-dispensary-section">
                    <HomePageDispensarySection />
                </Section>
                <Section className="home-page-health-condition-section">
                    <HomePageHealthConditionSection />
                </Section>
                <Section className="home-page-health-hub-section">
                    <HomePageHealthHubSection />
                </Section>
                <Section className="home-page-book-now-section">
                    <HomePageBookNowSection />
                </Section>
            </div>
        </Layout>
    );
};
