import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as ReactSwiper, SwiperProps, SwiperSlide } from "swiper/react";
import "./_swiper.scss";

interface Props extends SwiperProps {
    cardLists?: ReactNode[];
}

export const Swiper: React.FC<Props> = ({ cardLists, ...props }: Props) => {
    const modules = [];
    if ("autoplay" in props) modules.push(Autoplay);
    if ("navigation" in props) modules.push(Navigation);
    if ("pagination" in props) modules.push(Pagination);

    return (
        <div
            className={`swiper-component${
                props?.speed ? ` mod__speed${props.speed}` : ""
            }`}
        >
            <ReactSwiper modules={modules} {...props}>
                {cardLists?.length &&
                    cardLists?.map((card, i) => (
                        <SwiperSlide
                            key={`swiper-slide-${i}`}
                            className="swiper-slide"
                        >
                            {card}
                        </SwiperSlide>
                    ))}
            </ReactSwiper>
        </div>
    );
};
