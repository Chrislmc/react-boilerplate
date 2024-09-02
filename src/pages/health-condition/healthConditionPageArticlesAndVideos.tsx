import { ImiArticleCard } from "@/components/imiArticleCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { healthConditionPageArticleCardList } from "./healthConditionPageConstant";

export const HealthConditionPageArticlesAndVideos = () => {
    const t = i18nHelper("health-condition");

    return (
        <div className="articles-and-videos">
            <ImiDescSection
                header={t("healthCondition.articlesAndVideos.title")}
                style="small-subsection"
                customBottomComponent={
                    <>
                        <div className={`health-hub-card-grid-container`}>
                            {healthConditionPageArticleCardList.map(
                                (card, i) => {
                                    return (
                                        <ImiArticleCard
                                            key={`health-hub-card-${i}`}
                                            id={card.id}
                                            imgUrl={card.imgUrl}
                                            date={t(card.date)}
                                            title={t(card.title)}
                                            desc={t(card.desc)}
                                        />
                                    );
                                }
                            )}
                        </div>
                        <ImiButton
                            text={t(
                                "healthCondition.articlesAndVideos.linkText"
                            )}
                            size="padding"
                            redirectUrl={redirectRouteMap.healthHub}
                        />
                    </>
                }
            />
        </div>
    );
};
