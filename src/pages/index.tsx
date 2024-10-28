import { Section } from "@/components/section";
import "./_home-page.scss";
import { HomePageAboutSection } from "./homePageAboutSection";
import { HomePageContactMeSection } from "./homePageContactSection";
import { HomePageExperienceSection } from "./homePageExperienceSection";
import { HomePageFooterSection } from "./homePageFooterSection";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";
import { HomePagePortfolioSection } from "./homePagePortfolioSection";

export const HomePage = () => {
    return (
        <div id="home-page">
            <Section className="home-page-hero-banner-section">
                <HomePageHeroBannerSection />
            </Section>
            <Section
                id="home-page-about-section"
                className="home-page-about-section"
            >
                <HomePageAboutSection />
            </Section>
            <Section
                id="home-page-portfolio-section"
                className="home-page-portfolio-section"
            >
                <HomePagePortfolioSection />
            </Section>
            <Section
                id="home-page-experience-section"
                className="home-page-experience-section"
            >
                <HomePageExperienceSection />
            </Section>
            <Section className="home-page-contact-me-section">
                <HomePageContactMeSection />
            </Section>
            <Section className="home-page-footer-section">
                <HomePageFooterSection />
            </Section>
        </div>
    );
};
