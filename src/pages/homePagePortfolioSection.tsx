import FadeIn from "@/components/fadeIn";
import { ContainerX } from "@/components/layout/containerX";
import { CardWithHoverEffect } from "@/components/molecules/cardWithHoverEffect";
import useViewport from "@/utils/hooks/useViewport";
import { i18nHelper } from "@/utils/i18n-helper";
import { RefObject } from "react";
import { portfolios } from "./homePageConstant";

export const HomePagePortfolioSection = () => {
    const [isVisible, currentElement] = useViewport<HTMLDivElement>(-200);
    const t = i18nHelper("home-page");

    return (
        <ContainerX ref={currentElement as RefObject<HTMLDivElement>}>
            <FadeIn visible={isVisible} transitionDuration={800} delay={0}>
                <div className="subsection portfolio-container">
                    <h2 className="header">{t("about-me.portfolio.header")}</h2>
                    <div className="portfolio-grid">
                        {portfolios.map((portfolio) => (
                            <CardWithHoverEffect
                                key={portfolio.id}
                                className={portfolio.id}
                                priorImgUrl={portfolio.imageUrl[0]}
                                afterImgUrl={portfolio.imageUrl[1]}
                                header={t(portfolio.header)}
                                descs={portfolio.descs.map((desc) => t(desc))}
                                button={
                                    portfolio?.button && {
                                        ...portfolio.button,
                                        text: t(portfolio.button.text),
                                        type: "rectangle",
                                    }
                                }
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>
        </ContainerX>
    );
};