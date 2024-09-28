import { Section } from "@/components/section";
import { HomePageAboutSection } from "./homePageAboutSection";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";
import { HomePagePortfolioSection } from "./homePagePortfolioSection";

export const HomePage = () => {
    return (
        <div id="home-page">
            <Section className="home-page-hero-banner-section">
                <HomePageHeroBannerSection />
            </Section>
            <Section className="home-page-about-section">
                <HomePageAboutSection />
            </Section>
            <Section className="home-page-portfolio-section">
                <HomePagePortfolioSection />
            </Section>
        </div>
    );
};
