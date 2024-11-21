import { Images } from "@/assets/images";
import { CardWithImageContent } from "@/components/molecules/cardWithImageContent";
import { Swiper } from "@/components/molecules/swiper";

export const SwiperSample = () => {
    return (
        <div style={{ height: "32.5rem" }}>
            <Swiper
                cardLists={[
                    <div
                        className="component-wrapper"
                        style={{ width: "25rem" }}
                    >
                        <CardWithImageContent
                            imgUrl={Images.SampleImage1}
                            title={"What is Lorem Ipsum?"}
                            desc={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                            }
                        />
                    </div>,
                    <div
                        className="component-wrapper"
                        style={{ width: "25rem" }}
                    >
                        <CardWithImageContent
                            imgUrl={Images.SampleImage1}
                            title={"What is Lorem Ipsum?"}
                            desc={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                            }
                        />
                    </div>,
                    <div
                        className="component-wrapper"
                        style={{ width: "25rem" }}
                    >
                        <CardWithImageContent
                            imgUrl={Images.SampleImage1}
                            title={"What is Lorem Ipsum?"}
                            desc={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                            }
                        />
                    </div>,
                ]}
                pagination={{ clickable: true }}
                navigation
                slidesPerView={2}
                speed={1000}
            />
        </div>
    );
};
