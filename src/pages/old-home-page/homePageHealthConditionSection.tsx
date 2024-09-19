import { BaseCard } from "@/components/atoms/baseCard";
import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import "./_home-page.scss";
import { homePageHealthConditionCardList } from "./homePageConstant";

export const HomePageHealthConditionSection = () => {
    const t = i18nHelper("home-page");

    return (
        <DescSection
            header={t("healthCondition.header")}
            desc={[t("healthCondition.desc")]}
            customBottomComponent={
                <>
                    <Swiper
                        cardLists={[
                            ...homePageHealthConditionCardList.map(
                                (cardItem) => (
                                    <div className="health-condition-card-container">
                                        <BaseCard shadow>
                                            <img src={cardItem.imgUrl} />
                                            <span className="card-desc">
                                                {t(cardItem.text)}
                                            </span>
                                        </BaseCard>
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
                    <Button
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
            <BaseCard shadow>
                <span className="card-desc">{t("healthCondition.aToZ")}</span>
                <Button
                    text={t("healthCondition.seeAllHealthConditions")}
                    size="padding"
                />
            </BaseCard>
        </div>
    );
};
