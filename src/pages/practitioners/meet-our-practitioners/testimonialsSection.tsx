import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { testimonialCardList } from "./meetOurPractitionersPageConstant";
import { TestimonialCard } from "./testimonialCard";

export const TestimonialsSection = () => {
    const t = i18nHelper("practitioners");

    return (
        <DescSection
            header={t("meetOurPractitioners.testimonials.title")}
            style="small-subsection"
            customBottomComponent={
                <Swiper
                    cardLists={testimonialCardList.map((card, i) => (
                        <TestimonialCard
                            key={`testimonial-card-${i}`}
                            imgUrl={card.imgUrl}
                            name={t(card.name)}
                            title={t(card.title)}
                            desc={t(card.desc)}
                        />
                    ))}
                    slidesPerGroup={2}
                    slidesPerView={2}
                    spaceBetween={convertRemToPx(1.25)}
                    pagination={{ clickable: true }}
                    speed={2000}
                />
            }
        />
    );
};
