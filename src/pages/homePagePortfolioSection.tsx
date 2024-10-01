import { ContainerX } from "@/components/layout/containerX";
import { CardWithHoverEffect } from "@/components/molecules/cardWithHoverEffect";
import { i18nHelper } from "@/utils/i18n-helper";
import { portfolios } from "./homePageConstant";

export const HomePagePortfolioSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ContainerX>
            <div className="subsection portfolio-container">
                <h2 className="header">{t("about-me.portfolio.header")}</h2>
            </div>
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
        </ContainerX>
    );
};
