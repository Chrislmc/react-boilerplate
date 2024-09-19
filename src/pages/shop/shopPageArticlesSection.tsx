import { ArticleCard } from "@/components/articleCard";
import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";
import { shopPageArticlesCardList } from "./shopPageConstant";

export const ShopPageArticlesSection = () => {
    const t = i18nHelper("shop");

    return (
        <DescSection
            header={t("shop.articles.header")}
            style="small-subsection"
            customBottomComponent={
                <>
                    <div className="card-grid-container">
                        {shopPageArticlesCardList.map((card, i) => (
                            <ArticleCard
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
                        <Button
                            text={t("shop.articles.linkText")}
                            size="padding"
                        />
                    </div>
                </>
            }
        />
    );
};
