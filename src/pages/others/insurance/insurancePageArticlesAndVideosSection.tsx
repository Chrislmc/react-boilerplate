import { ArticleCard } from "@/components/articleCard";
import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { insurancePageArticleCardList } from "./insurancePageConstant";

export const InsurancePageArticlesAndVideosSection = () => {
    const t = i18nHelper("others");

    return (
        <DescSection
            header={t("insurance.articlesAndVideos.title")}
            style="small-subsection"
            customBottomComponent={
                <Swiper
                    cardLists={insurancePageArticleCardList.map((card, i) => (
                        <ArticleCard
                            key={`article-card-${i}`}
                            id={card.id}
                            imgUrl={card.imgUrl}
                            date={t(card.date)}
                            title={t(card.title)}
                            desc={t(card.desc)}
                        />
                    ))}
                    slidesPerGroup={3}
                    slidesPerView={3}
                    spaceBetween={convertRemToPx(1.25)}
                    pagination={{ clickable: true }}
                    speed={2000}
                />
            }
        />
    );
};
