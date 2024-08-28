import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import "./_home-page.scss";
import { homePageHealthConditionCardList } from "./homePageConstant";

export const HomePageHealthConditionSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ImiDescSection
            header={t("healthCondition.header")}
            desc={[t("healthCondition.desc")]}
            customBottomComponent={
                <>
                    <ImiSwiper
                        cardLists={[
                            ...homePageHealthConditionCardList.map(
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
                            ),
                            HomePageHealthConditionLastCard(),
                        ]}
                        slidesPerGroup={4}
                        slidesPerView={4}
                        spaceBetween={convertRemToPx(1.25)}
                        pagination={{ clickable: true }}
                        speed={2000}
                    />
                    <ImiButton
                        text={t("healthCondition.viewAllAToZ")}
                        size="padding"
                        redirectUrl={redirectRouteMap.healthCondition}
                    />
                </>
            }
        />
    );
};

export const HomePageHealthConditionLastCard = () => {
    const t = i18nHelper("home-page");

    return (
        <div className="health-condition-card-container health-condition-last-card">
            <ImiBaseCard shadow>
                <span className="card-desc">{t("healthCondition.aToZ")}</span>
                <ImiButton
                    text={t("healthCondition.seeAllHealthConditions")}
                    size="padding"
                />
            </ImiBaseCard>
        </div>
    );
};
