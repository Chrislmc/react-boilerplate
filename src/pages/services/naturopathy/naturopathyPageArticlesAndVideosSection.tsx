import { ArticleCard } from "@/components/articleCard";
import { Button } from "@/components/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { naturopathyPageArticleCardList } from "./naturopathyPageConstant";

export const NaturopathyPageArticlesAndVideosSection = () => {
    const t = i18nHelper("services");

    return (
        <DescSection
            header={t("naturopathicMedicine.articlesAndVideos.title")}
            style="small-subsection"
            customBottomComponent={
                <>
                    <div className={`health-hub-card-grid-container`}>
                        {naturopathyPageArticleCardList.map((card, i) => {
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
                        })}
                    </div>
                    <Button
                        text={t(
                            "naturopathicMedicine.articlesAndVideos.linkText"
                        )}
                        size="padding"
                        redirectUrl={redirectRouteMap.healthHub}
                    />
                </>
            }
        />
    );
};
