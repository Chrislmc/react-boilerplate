import { Section } from "@/components/section";
import classNames from "classnames";
import { useEffect, useState } from "react";
import "./_home-page.scss";
import { HomePageAboutSection } from "./homePageAboutSection";
import { HomePageContactMeSection } from "./homePageContactSection";
import { HomePageExperienceSection } from "./homePageExperienceSection";
import { HomePageFooterSection } from "./homePageFooterSection";
import { HomePageHeroBannerSection } from "./homePageHeroBannerSection";
import { HomePagePortfolioSection } from "./homePagePortfolioSection";

export const HomePage = () => {
    const [isImage1Loaded, setImage1Loaded] = useState(false);
    const [finishedLoadingAll, setFinish] = useState(false);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (isImage1Loaded) {
                setShowLoader(false);
            }
        }, 1500);
    }, [isImage1Loaded]);

    console.log("showLoader", showLoader);
    return (
        <div id="home-page">
            <div
                className={classNames(
                    "loading-overlay",
                    showLoader ? "mod__show-loader" : ""
                )}
            >
                <div className={"container"}>
                    <div
                        className={`wave ${
                            finishedLoadingAll ? "waveHidden" : ""
                        }`}
                    >
                        {"Loading...".split("").map((letter, index) => {
                            return (
                                <span key={index} style={{ "--c": index }}>
                                    {letter}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Section className="home-page-hero-banner-section">
                <HomePageHeroBannerSection setImageLoaded={setImage1Loaded} />
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
