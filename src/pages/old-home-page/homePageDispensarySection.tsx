import { Images } from "@/assets/images";
import { GradientBanner } from "@/components/gradientBanner";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { CardWithImageContent } from "@/components/molecules/cardWithImageContent";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";
import { homePageDispensaryCardList } from "./homePageConstant";

export const HomePageDispensarySection = () => {
    const t = i18nHelper("home-page");

    return (
        <>
            <GradientBanner
                colorTheme={"primary"}
                content={[
                    {
                        header: t("dispensary.header"),
                        descList: [t("dispensary.desc")],
                        button: {
                            text: t("dispensary.linkText"),
                            colorTheme: "orange",
                            textClassName: "mod__hover-blueish-green",
                            size: "padding",
                        },
                    },
                ]}
                imgUrl={Images.HomePageDispensary}
                imgPosition="right"
            />
            <ContainerX>
                <SectionContainerY>
                    <div className="dispensary-card-grid-container">
                        {homePageDispensaryCardList.map((cardItem, i) => (
                            <CardWithImageContent
                                key={`dispensary-card-${i}`}
                                imgUrl={cardItem.imgUrl}
                                title={t(cardItem.title)}
                                desc={t(cardItem.desc)}
                                button={{
                                    ...cardItem.button,
                                    text: t(cardItem.button.text),
                                }}
                            />
                        ))}
                    </div>
                </SectionContainerY>
            </ContainerX>
        </>
    );
};
