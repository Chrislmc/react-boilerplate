import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "./_swiper.scss";

interface Props extends SwiperProps {
    cardLists?: ReactNode[];
}

export const ImiSwiper: React.FC<Props> = ({ cardLists, ...props }: Props) => {
    const modules = [];
    if ("autoplay" in props) modules.push(Autoplay);
    if ("navigation" in props) modules.push(Navigation);
    if ("pagination" in props) modules.push(Pagination);

    return (
        <div
            className={`imi-swiper-component${
                props?.speed ? ` mod__speed${props.speed}` : ""
            }`}
        >
            <Swiper modules={modules} {...props}>
                {cardLists?.length &&
                    cardLists?.map((card, i) => (
                        <SwiperSlide
                            key={`imi-swiper-slide-${i}`}
                            className="imi-swiper-slide"
                        >
                            {card}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};
