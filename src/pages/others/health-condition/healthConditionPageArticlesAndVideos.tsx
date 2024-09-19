import { ArticleCard } from "@/components/articleCard";
import { Button } from "@/components/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { healthConditionPageArticleCardList } from "./healthConditionPageConstant";

export const HealthConditionPageArticlesAndVideos = () => {
    const t = i18nHelper("others");

    return (
        <div className="articles-and-videos">
            <DescSection
                header={t("healthCondition.articlesAndVideos.title")}
                style="small-subsection"
                customBottomComponent={
                    <>
                        <div className={`health-hub-card-grid-container`}>
                            {healthConditionPageArticleCardList.map(
                                (card, i) => {
                                    return (
                                        <ArticleCard
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
                        <Button
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
