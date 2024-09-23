import { Section } from "@/components/section";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";

export const HomePage = () => {
    return (
        <div id="home-page">
            <Section className="home-page-hero-banner-section">
                <HomePageHeroBannerSection />
            </Section>
        </div>
    );
};
