import { Images } from "@/assets/images";
import { ImiCardWithImageContent } from "@/components/imiCardWithImageContent";
import { ImiGradientBanner } from "@/components/imiGradientBanner";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";
import { homePageDispensaryCardList } from "./homePageConstant";

export const HomePageDispensarySection = () => {
    const t = i18nHelper("home-page");

    return (
        <>
            <ImiGradientBanner
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
                            <ImiCardWithImageContent
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
