import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { Button } from "@/components/atoms/button";
import FadeIn from "@/components/fadeIn";
import { ContainerX } from "@/components/layout/containerX";
import useViewport from "@/utils/hooks/useViewport";
import { i18nHelper } from "@/utils/i18n-helper";
import { Dispatch, RefObject, SetStateAction } from "react";
import { contactMethods } from "./homePageConstant";

interface Props {
    setImageLoaded: Dispatch<SetStateAction<boolean>>;
}

export const HomePageHeroBannerSection: React.FC<Props> = ({
    setImageLoaded,
}) => {
    const [, currentElement] = useViewport<HTMLDivElement>(-200);
    const t = i18nHelper("home-page");

    return (
        <div
            ref={currentElement as RefObject<HTMLDivElement>}
            className="hero-banner-section-container"
        >
            <div className="image-container-background">
                <img src={Images.Portrait3Background} />
            </div>
            <div className="image-container">
                <img src={Images.Portrait3} />
            </div>
            <div className="hero-banner-container">
                <ContainerX className="hero-banner-desc-container-x">
                    <FadeIn
                        transitionDuration={800}
                        delay={200}
                        direction="right"
                        className="desc-container-fade-in"
                    >
                        <div className="desc-container">
                            <h1 className="header">
                                I'M{" "}
                                <p className="header-highlight">Chris Lai</p>
                            </h1>

                            <h2 className="header-desc">Fullstack Developer</h2>

                            <Button
                                text={"Contact Me"}
                                type="outline-rectangle"
                                redirectUrl="https://www.linkedin.com/in/chris-lai-7a5b79119/"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn
                        transitionDuration={800}
                        delay={1000}
                        className="contacts-container-fade-in"
                    >
                        <div className="contacts-container">
                            {contactMethods.map((method, i) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={`contact-method-${i}`}
                                        href={method.redirectUrl}
                                        target="_blank"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </FadeIn>
                </ContainerX>
            </div>

            <ContainerX className="header-row-container-x">
                <div className="header-row">
                    <div className="icon-container">
                        <img
                            src={Icons.IconNoBackground}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>

                    <div className="header-btn-row">
                        <a
                            key="about"
                            className="header-btn"
                            href="#home-page-about-section"
                        >
                            {t("hero-banner.about")}
                        </a>
                        <a
                            key="portfolio"
                            className="header-btn"
                            href="#home-page-portfolio-section"
                        >
                            {t("hero-banner.portfolio")}
                        </a>
                        <a
                            key="experience"
                            className="header-btn"
                            href="#home-page-experience-section"
                        >
                            {t("hero-banner.experience")}
                        </a>
                    </div>
                </div>
            </ContainerX>
        </div>
    );
};
