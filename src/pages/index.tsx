import { Section } from "@/components/section";
import { HomePageAboutSection } from "./homePageAboutSection";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";

export const HomePage = () => {
    return (
        <div id="home-page">
            <Section className="home-page-hero-banner-section">
                <HomePageHeroBannerSection />
            </Section>
            <Section className="home-page-about-section">
                <HomePageAboutSection />
            </Section>
        </div>
    );
};
