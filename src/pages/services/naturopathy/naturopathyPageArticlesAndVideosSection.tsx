import { ImiArticleCard } from "@/components/imiArticleCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { naturopathyPageArticleCardList } from "./naturopathyPageConstant";

export const NaturopathyPageArticlesAndVideosSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiDescSection
            header={t("naturopathicMedicine.articlesAndVideos.title")}
            style="small-subsection"
            customBottomComponent={
                <>
                    <div className={`health-hub-card-grid-container`}>
                        {naturopathyPageArticleCardList.map((card, i) => {
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
                        })}
                    </div>
                    <ImiButton
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
