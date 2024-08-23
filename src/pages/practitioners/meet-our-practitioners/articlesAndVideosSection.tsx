import { ImiArticleCard } from "@/components/imiArticleCard";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_meet-our-practitioners-page.scss";
import { meetOurPractitionersPageArticleCardList } from "./meetOurPractitionersPageConstant";

export const ArticlesAndVideosSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <ImiDescSection
            header={t("meetOurPractitioners.articlesAndVideos.title")}
            style="small-subsection"
            customBottomComponent={
                <ImiSwiper
                    cardLists={meetOurPractitionersPageArticleCardList.map(
                        (card, i) => (
                            <ImiArticleCard
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
