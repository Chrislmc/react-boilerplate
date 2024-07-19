import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";
import { homePageHealthConditionCardList } from "./homePageConstant";

export const HomePageHealthHubSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ContainerX>
            <SectionContainerY>
                <ImiDescSection
                    header={t("healthHub.header")}
                    desc={[t("healthHub.desc")]}
                    customFullWidthBottomComponent={
                        <>
                            <ImiSwiper
                                cardLists={homePageHealthConditionCardList.map(
                                    (cardItem) => (
                                        <div className="health-condition-card-container">
                                            <ImiBaseCard shadow>
                                                <img src={cardItem.imgUrl} />
                                                <span className="card-desc">
                                                    {t(cardItem.text)}
                                                </span>
                                            </ImiBaseCard>
                                        </div>
                                    )
                                )}
                                slidesPerGroup={4}
                                slidesPerView={4}
                                spaceBetween={convertRemToPx(1.25)}
                                pagination={{ clickable: true }}
                            />
                            <ImiButton text={t("healthHub.viewAllAToZ")} />
                        </>
                    }
                />
            </SectionContainerY>
        </ContainerX>
    );
};
