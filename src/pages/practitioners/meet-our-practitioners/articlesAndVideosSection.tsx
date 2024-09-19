import { ArticleCard } from "@/components/articleCard";
import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/molecules/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_meet-our-practitioners-page.scss";
import { meetOurPractitionersPageArticleCardList } from "./meetOurPractitionersPageConstant";

export const ArticlesAndVideosSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <DescSection
            header={t("meetOurPractitioners.articlesAndVideos.title")}
            style="small-subsection"
            customBottomComponent={
                <Swiper
                    cardLists={meetOurPractitionersPageArticleCardList.map(
                        (card, i) => (
                            <ArticleCard
                                key={`article-card-${i}`}
                                id={card.id}
                                imgUrl={card.imgUrl}
                                date={t(card.date)}
                                title={t(card.title)}
                                desc={t(card.desc)}
                            />
                        )
                    )}
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
