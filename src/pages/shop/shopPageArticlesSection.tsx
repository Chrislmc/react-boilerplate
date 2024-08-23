import { ImiArticleCard } from "@/components/imiArticleCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";
import { shopPageArticlesCardList } from "./shopPageConstant";

export const ShopPageArticlesSection = () => {
    const t = i18nHelper("shop");

    return (
        <ImiDescSection
            header={t("shop.articles.header")}
            style="small-subsection"
            customBottomComponent={
                <>
                    <div className="card-grid-container">
                        {shopPageArticlesCardList.map((card, i) => (
                            <ImiArticleCard
                                key={`health-hub-card-${i}`}
                                id={card.id}
                                imgUrl={card.imgUrl}
                                date={t(card.date)}
                                title={t(card.title)}
                                desc={t(card.desc)}
                            />
                        ))}
                    </div>
                    <div className="btn-container">
                        <ImiButton
                            text={t("shop.articles.linkText")}
                            size="padding"
                        />
                    </div>
                </>
            }
        />
    );
};
